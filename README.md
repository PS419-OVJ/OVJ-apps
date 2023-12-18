# Cloud Computing Path

Membuat **REST APIs** dan menerapkannya ke  [Google Cloud Platform](https://cloud.google.com) dengan menggunakan [Google App Engine](https://cloud.google.com/appengine) untuk saling komunikasi antara **Machine Learning** and **Mobile Development**. Dan Membuat database [Cloud SQL](https://cloud.google.com/sql) untuk menyimpan semua data. 

## RESTful APIs

Dalam membuat **REST API** kami menggunakan Node.js dan Framwoek Express.js, untuk respons menggunakan format **JSON**. Untuk masing-masing URL yang dapat digunakan akan dijelaskan dibawah ini.

## Daftar Destinasi Wisata

Di bagian ini terdapat daftar semua Daftar Destinasi Wisata yang ada di wilayah Jawa bagian barat yang dapat difilter berdasarkan kota atau kategori. Respon dari setiap URL menggunakan format **JSON**.

**Base URL :**

> https://capstone-ps419.et.r.appspot.com/

### Menampilkan Destinasi Wisata Berdasarkan Kota

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

- **Menampilkan Semua Wisata yang berlokasi di Tasikmalaya **

  **Path :**

  > /gettasikmalaya

  **Method :**

  > `GET`
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/gettasikmalaya

  **Contoh Respon**

```json
{
        "ID": 61,
        "Nama": "Taman Wisata Karang Resik",
        "Rating": 4.3,
        "Jam Operasional": "09.00-16.00 WIB",
        "Tiket Masuk": "Rp35.000",
        "Kategori": "Keluarga,Air",
        "Kota": "Tasikmalaya",
        "Lokasi": "https://maps.app.goo.gl/8udi3J91J6e692mG6",
        "Deskripsi": "Taman Wisata Karang Resik adalah sebuah taman hiburan keluarga yang terletak di Jalan Mohamad Hatta, Tasikmalaya, Jawa Barat. Taman ini memiliki luas sekitar 5 hektar dan menawarkan berbagai macam wahana permainan, mulai dari seluncur air, kolam renang, hingga wahana permainan anak-anak."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Ciamis**

  **Path :**

  > /getciamis

  **Method :**

  > `GET`
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getciamis

  **Contoh Respon**

```json
 {
        "ID": 75,
        "Nama": "Wahana Edukasi Sukahaji Waterboom",
        "Rating": 4.3,
        "Jam Operasional": "08.00-16.00 WIB",
        "Tiket Masuk": "Rp25.000",
        "Kategori": "Keluarga,Air",
        "Kota": "Ciamis",
        "Lokasi": "https://maps.app.goo.gl/ortBWGLkXaNoSKXe8",
        "Deskripsi": "Family-friendly water park with swimming pools & tube slides, plus a splash zone for younger kids."
    }
```

<br>
