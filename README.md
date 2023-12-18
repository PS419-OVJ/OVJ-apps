# Cloud Computing Path

Membuat **REST APIs** dan menerapkannya ke  [Google Cloud Platform](https://cloud.google.com) dengan menggunakan [Google App Engine](https://cloud.google.com/appengine) untuk saling komunikasi antara **Machine Learning** and **Mobile Development**. Dan Membuat database [Cloud SQL](https://cloud.google.com/sql) untuk menyimpan semua data. 

## RESTful APIs

Dalam membuat **REST API** kami menggunakan Node.js dan Framwoek Express.js, untuk respons menggunakan format **JSON**. Untuk masing-masing URL yang dapat digunakan akan dijelaskan dibawah ini.

## Daftar Destinasi Wisata

Di bagian ini terdapat daftar semua Daftar Destinasi Wisata yang ada di wilayah Jawa bagian barat yang dapat difilter berdasarkan kota atau kategori. Respon dari setiap URL menggunakan format **JSON**.

**Base URL :**

> https://capstone-ps419.et.r.appspot.com/

### Menampilkan Destinasi Wisata Berdasrkan Kota

- **Menampilkan Semua Wisata yang berlokasi di Sukabumi**

  **Path :**

  > /getsukabumi

  **Method :**

  > `GET`
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getsukabumi

  **Contoh Respon**

```json
{
        "ID": 1,
        "Nama": "Geopark Ciletuh",
        "Rating": 4.6,
        "Jam Operasional": "24 Jam",
        "Tiket Masuk": "Gratis",
        "Kategori": "Alam,Sejarah&Budaya,Pendidikan",
        "Kota": "Sukabumi",
        "Lokasi": "https://maps.app.goo.gl/Nky7HKeGKkv2P5C49",
        "Deskripsi": "Taman bumi dengan konsep manajemen pengelolaan kawasan yang menyerasikan keragaman geologi, hayati, dan budaya, melalui prinsip konservasi, edukasi, dan pembangunan yang berkelanjutan di kawasan Pelabuhan Ratu, Kabupaten Sukabumi, Jawa Barat, Indonesia."
    }
```

<br>

