# Cloud Computing Path

Membuat **REST APIs** dan menerapkannya ke  [Google Cloud Platform](https://cloud.google.com) dengan menggunakan [Google App Engine](https://cloud.google.com/appengine) untuk saling komunikasi antara **Machine Learning** and **Mobile Development**. Dan Membuat database [Cloud SQL](https://cloud.google.com/sql) untuk menyimpan semua data. 

## REST APIs

Dalam membuat **REST API** kami menggunakan Node.js dan Framwoek Express.js, untuk respons menggunakan format **JSON**. Untuk masing-masing URL yang dapat digunakan akan dijelaskan dibawah ini.

## Daftar Destinasi Wisata

Di bagian ini terdapat daftar semua Destinasi Wisata yang ada di wilayah Jawa bagian barat yang dapat difilter berdasarkan kota atau kategori. Respon dari setiap URL menggunakan format **JSON**.

**Base URL :**

> https://capstone-ps419.et.r.appspot.com/

 **Method :**

  > `GET`
  

### Menampilkan Destinasi Wisata Berdasarkan Kota

- **Menampilkan Semua Wisata yang berlokasi di Sukabumi**

  **Path :**

  > /getsukabumi
  
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

- **Menampilkan Semua Wisata yang berlokasi di Tasikmalaya**

  **Path :**

  > /gettasikmalaya
  
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

- **Menampilkan Semua Wisata yang berlokasi di Pangandaran**

  **Path :**

  > /getpangandaran
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getpangandaran

  **Contoh Respon**

```json
  {
        "ID": 94,
        "Nama": "Goa Sutra Reregan",
        "Rating": 3.9,
        "Jam Operasional": "07.00-18.30 WIB",
        "Tiket Masuk": "Rp25.000",
        "Kategori": "Alam,Air,Petualangan",
        "Kota": "Pangandaran",
        "Lokasi": "https://maps.app.goo.gl/FMZBc7WF3o6pPDtXA",
        "Deskripsi": "Goa Sutra Reregan merupakan tempat wisata yang memiliki karakteristik yang unik yaitu stalakmit dan stalaktit yang masih alami, dan ini lah yang menjadi daya tarik bagi wisatawan."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Banjar**

  **Path :**

  > /getbanjar
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getbanjar

  **Contoh Respon**

```json
 {
        "ID": 108,
        "Nama": "Taman Pusat Dakwah Islam",
        "Rating": 4.3,
        "Jam Operasional": "24 Jam",
        "Tiket Masuk": "Gratis",
        "Kategori": "Keluarga,Pendidikan,Religi",
        "Kota": "Banjar",
        "Lokasi": "https://maps.app.goo.gl/Qmdd19KynMCHzPEL8",
        "Deskripsi": "Ruang terbuka hijau di pinggir Sungai Citanduy yang mengelilingi gedung Pusdai, bisa dijadikan tempat untuk rekreasi, bermain, dan bersantai"
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Cilegon**

  **Path :**

  > /getcilegon

  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getcilegon

  **Contoh Respon**

```json
  {
        "ID": 111,
        "Nama": "Pulau Merak Kecil",
        "Rating": 4.5,
        "Jam Operasional": "06.00-17.00 WIB",
        "Tiket Masuk": "Rp17.000",
        "Kategori": "Alam,Air,Petualangan,Kuliner",
        "Kota": "Cilegon",
        "Lokasi": "https://maps.app.goo.gl/muND6os8jFvAfjpk9",
        "Deskripsi": "Pulau Merak Kecil berada di perairan Selat Sunda, Cilegon, Banten. Pulau tersebut menawarkan suasana pantai yang sejuk dengan hamparan pasir putih dan laut birunya yang menenangkan sehingga sangat cocok untuk melepas penat setelah beraktivitas selama hampir sepekan. Selain itu, saat ini pengunjung sudah dapat menikmati sejumlah fasilitas tambahan seperti banana boat, wisata naik perahu, dan snorkeling, terdapat juga fasilitas penunjang di antaranya toilet, tempat ganti pakaian, dan mushola. Meskipun ukurannya kecil, pulau tersebut memiliki beberapa akomodasi yang bisa digunakan untuk bermalam seperti homestay dan tenda. Selain itu, terdapat warung-warung kuliner yang menyediakan makanan laut segar."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Serang**

  **Path :**

  > /getserang

  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getserang

  **Contoh Respon**

```json
{
        "ID": 130,
        "Nama": "Anyer Wonderland",
        "Rating": 4.8,
        "Jam Operasional": "09.00-22.00 WIB",
        "Tiket Masuk": "Rp50.000",
        "Kategori": "Keluarga,Air,Pendidikan",
        "Kota": "Serang",
        "Lokasi": "https://maps.app.goo.gl/XeC4QZHevrtGMmCGA",
        "Deskripsi": "Anyer Wonderland adalah destinasi wisata terbaru yang menawarkan pengalaman seru dan menyenangkan untuk mengisi liburan bersama teman, keluarga, hingga pasangan. Beragam wahana permainan seru disajikan di Anyer Wonderland seperti Minizone, Mini Zoo, Rainbow Slide, Mini LRT, Banana dan Donat Boat, dan Snorkeling."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Pandeglang**

  **Path :**

  > /getpandeglang
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getpandeglang

  **Contoh Respon**

```json
 {
        "ID": 137,
        "Nama": "Saung Biru Gunung Karang",
        "Rating": 4.3,
        "Jam Operasional": "09.00-17.00 WIB",
        "Tiket Masuk": "Rp 10.000",
        "Kategori": "Keluarga,Alam,Kuliner",
        "Kota": "Pandeglang",
        "Lokasi": "https://maps.app.goo.gl/D647DrnwKXF8jAXn8",
        "Deskripsi": "Di Saung Biru Pandeglang banyak spot foto yang Instagramable, cocok untuk kamu yang ingin memiliki foto dengan view menarik dan aethetic."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Lebak**

  **Path :**

  > /getlebak
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getlebak

  **Contoh Respon**

```json
  {
        "ID": 147,
        "Nama": "Saba Baduy",
        "Rating": 4.9,
        "Jam Operasional": "24 Jam",
        "Tiket Masuk": "Gratis",
        "Kategori": "Alam,Petualangan,Sejarah&Budaya",
        "Kota": "Lebak",
        "Lokasi": "https://maps.app.goo.gl/Uc7oVJb5hJkeFtNN8",
        "Deskripsi": "Suku Baduy merupakan suku yang hidup masih teguh memegang adat budaya nenek moyang sampai saat ini. Mereka hidup secara sederhana dan menyatu dengan alam. Alam yang masih alami dan budaya yang ditawarkan oleh kampung suku Baduy menjadi daya tarik tersendiri bagi daerah ini."
    }
```
<br>
 - **Menampilkan Semua Wisata yang berlokasi di Bogor**

  **Path :**

  > /getbogor
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getbogor

  **Contoh Respon**

```json
 {
        "ID": 164,
        "Nama": "Kebun Raya Bogor",
        "Rating": 4.7,
        "Jam Operasional": "07.00-16.00 WIB",
        "Tiket Masuk": "Rp25.000-Rp35.000",
        "Kategori": "Keluarga,Alam",
        "Kota": "Bogor",
        "Lokasi": "https://maps.app.goo.gl/g5WGLp8LDxfWrf7AA",
        "Deskripsi": "Kebun Raya Bogor atau Kebun Botani Bogor adalah sebuah kebun botani besar yang terletak di Kota Bogor, Indonesia. Luasnya mencapai 87 hektar dan memiliki 15.000 jenis koleksi pohon dan tumbuhan."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Jakarta**

  **Path :**

  > /getjakarta
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getjakarta

  **Contoh Respon**

```json
{
        "ID": 184,
        "Nama": "Monumen nasional (Tugu Monas)",
        "Rating": 4.6,
        "Jam Operasional": "08.00-16.00 WIB",
        "Tiket Masuk": "Rp4.000-Rp15.000",
        "Kategori": "Keluarga,Pendidikan",
        "Kota": "Jakarta",
        "Lokasi": "https://maps.app.goo.gl/oKFreWYH53QvtbAj9",
        "Deskripsi": "Monas merupakan ikon dari ibu kota, bahkan dari indonesia itu sendiri. Monas menjadi salah satu symbol kemerdekaan indonesia yang memiliki tinggi sekitar 32 meter."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Depok**

  **Path :**

  > /getdepok
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getdepok

  **Contoh Respon**

```json
 {
        "ID": 195,
        "Nama": "Fantasy Waterpark",
        "Rating": 5,
        "Jam Operasional": "08.00-17.00 WIB",
        "Tiket Masuk": "Rp45.000-Rp65.000",
        "Kategori": "Keluarga,Air",
        "Kota": "Depok",
        "Lokasi": "https://maps.app.goo.gl/qt64sZhcqcdzhUHW8",
        "Deskripsi": "Fantasy Waterpark merupakan objek wisata terbaik di Depok yang cocok dikunjungi bersama keluarga. Destinasi ini mengusung konsep unik, yakni Negeri 1001 Malam yang identik dengan kisah Aladin. Konsep ini sangat menarik, terutama bagi anak-anak yang menyukai dongeng."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Bekasi**

  **Path :**

  > /getbekasi
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getbekasi
  
  **Contoh Respon**

```json
 {
        "ID": 205,
        "Nama": "Taman Buaya Indonesia Jaya",
        "Rating": 4.1,
        "Jam Operasional": "08.00-17.00 WIB",
        "Tiket Masuk": "Rp20.000",
        "Kategori": "Keluarga",
        "Kota": "Bekasi",
        "Lokasi": "https://maps.app.goo.gl/nFRUxBd4CvGW2EJS8",
        "Deskripsi": "tempat wisata ini adalah tempat penangkaran buaya terbesar di Indonesia, dan bahkan di Asia"
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Bekasi**

  **Path :**

  > /getbekasi
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getbekasi
  
  **Contoh Respon**

```json
 {
        "ID": 205,
        "Nama": "Taman Buaya Indonesia Jaya",
        "Rating": 4.1,
        "Jam Operasional": "08.00-17.00 WIB",
        "Tiket Masuk": "Rp20.000",
        "Kategori": "Keluarga",
        "Kota": "Bekasi",
        "Lokasi": "https://maps.app.goo.gl/nFRUxBd4CvGW2EJS8",
        "Deskripsi": "tempat wisata ini adalah tempat penangkaran buaya terbesar di Indonesia, dan bahkan di Asia"
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Tangerang**

  **Path :**

  > /gettangerang
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/gettangerang
  
  **Contoh Respon**

```json
 {
        "ID": 214,
        "Nama": "Scientia Square Park",
        "Rating": 4.5,
        "Jam Operasional": "07.00-22.00 WIB",
        "Tiket Masuk": "Rp45.000",
        "Kategori": "Keluarga,Alam,Air",
        "Kota": "Tangerang",
        "Lokasi": "https://maps.app.goo.gl/8CCdpTwijFB7w1Sa8",
        "Deskripsi": "Taman kota dengan jalur jogging, panjat tebing dan peternakan koi, serta taman skate dan pusat ping-pong."
    }
```
<br>

- **Menampilkan Semua Wisata yang berlokasi di Bandung**

  **Path :**

  > /getbandung
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getbandung
  
  **Contoh Respon**

```json
{
        "ID": 229,
        "Nama": "tangkuban parahu",
        "Rating": 4.5,
        "Jam Operasional": "08.00-17.00 WIB",
        "Tiket Masuk": "Rp30.000-Rp200.000",
        "Kategori": "Keluarga,Alam",
        "Kota": "Bandung",
        "Lokasi": "https://maps.app.goo.gl/1zLRWNCBtLzfFh516",
        "Deskripsi": "Gunung Tangkuban Parahu adalah salah satu gunung berapi aktif di Indonesia yang terletak di Kabupaten Bandung Barat, Jawa Barat. Gunung ini memiliki ketinggian 2.084 meter di atas permukaan laut dan merupakan salah satu destinasi wisata alam yang populer di Bandung."
    }
```
<br>

### Menampilkan Destinasi Wisata Berdasarkan Kota

- **Mendapatkan Semua Data Wisata Dengan Kategori Alam**
 **Path :**

  > /getalam
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getalam

<br>

- **Mendapatkan Semua Data Wisata Dengan Kategori Keluarga**
 **Path :**

  > /getkeluarga
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getkeluarga

<br>
  
