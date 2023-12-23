from flask import Flask, jsonify,request
import tensorflow as tf
import numpy as np
from numpy import genfromtxt
from sklearn.preprocessing import StandardScaler, MinMaxScaler
import csv
from collections import defaultdict

app = Flask(__name__)

def print_pred_pariwisata(y_p, item, wisata_dict, maxcount=10):
    """ print results of prediction of a new user. inputs are expected to be in
        sorted order, unscaled. """
    result = []
    count = 0

    for i in range(0, y_p.shape[0]):
        if count == maxcount:
            break
        count += 1
        destinasi_id = item[i, 0].astype(int)
        result.append([wisata_dict[destinasi_id]['title']])
    
    return result

def gen_user_vecs(user_vec, num_items):
    """ given a user vector return:
        user predict maxtrix to match the size of item_vecs """
    user_vecs = np.tile(user_vec, (num_items, 1))
    return user_vecs

item_train = genfromtxt('item_train.csv', delimiter=",")
user_train = genfromtxt('user_train.csv', delimiter=",")
y_train    = genfromtxt('y_train.csv', delimiter=",")
item_vecs = genfromtxt('item_vecs.csv', delimiter=",")

wisata_dict = defaultdict(dict)
count = 0
with open('destinasi_list.csv', newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        for line in reader:
            if count == 0:
                count += 1  #skip header
                #print(line) print
            else:
                count += 1
                destinasi_id = int(line[0])
                wisata_dict[destinasi_id]["title"] = line[1]

model = tf.keras.models.load_model('model_pariwisata.h5', compile=False)

@app.route("/predict",methods=["GET","POST"])
def predict():
    if request.method =="POST":
        try:
            data = request.json
            user_id = 230117
            rating_count = 5
            sejarahbudaya = data.get("Sejarah&Budaya")
            alam = data.get("Alam")
            air = data.get("Air")
            kuliner = data.get("Kuliner")
            religi = data.get("Religi")
            pendidikan = data.get("Pendidikan")
            keluarga = data.get("Keluarga")
            petualangan = data.get("Petualangan")
            rating_avrg = (sejarahbudaya+alam+air+kuliner+religi+pendidikan+keluarga+petualangan)/8

            user_vec = np.array([[user_id, rating_count, rating_avrg, sejarahbudaya, alam, air, kuliner, religi, pendidikan, keluarga, petualangan]])

            scalerItem = StandardScaler()
            scalerItem.fit(item_train)

            scalerUser = StandardScaler()
            scalerUser.fit(user_train)

            scalerTarget = MinMaxScaler((-1, 1))
            scalerTarget.fit(y_train.reshape(-1, 1))

            # generate and replicate the user vector to match the number movies in the data set.
            user_vecs = gen_user_vecs(user_vec,len(item_vecs))

            # scale our user and item vectors
            suser_vecs = scalerUser.transform(user_vecs)
            sitem_vecs = scalerItem.transform(item_vecs)

            # make a prediction
            y_p = model.predict([suser_vecs[:, 3:], sitem_vecs[:, 1:]])

            # unscale y prediction
            y_pu = scalerTarget.inverse_transform(y_p)

            # sort the results, highest prediction first
            sorted_index = np.argsort(-y_pu,axis=0).reshape(-1).tolist()  #negate to get largest rating first
            sorted_ypu   = y_pu[sorted_index]
            sorted_items = item_vecs[sorted_index]  #using unscaled vectors for display

            data = print_pred_pariwisata(sorted_ypu, sorted_items, wisata_dict, maxcount = 10)

            return jsonify({
                "destinasi wisata 1": data[0],
                "destinasi wisata 2": data[1],
                "destinasi wisata 3": data[2],
                "destinasi wisata 4": data[3],
                "destinasi wisata 5": data[4],
                "destinasi wisata 6": data[5],
                "destinasi wisata 7": data[6],
                "destinasi wisata 8": data[7],
                "destinasi wisata 9": data[8],
                "destinasi wisata 10": data[9]
            })
        except Exception as e:
            return jsonify({'error': str(e)})
    else:
        return jsonify({
            "status":{
                "code":405,
                "message":"method not allowed"
            },
            "data":None,
        }),405



if __name__ == "__main__":
    app.run()

