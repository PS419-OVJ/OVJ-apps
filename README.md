# Cloud Computing Path

Creating **RESTful APIs** and deploying to  [Google Cloud Platform](https://cloud.google.com) by using [Google App Engine](https://cloud.google.com/appengine) and [Google Run](https://cloud.google.com/run) for communication between **Machine Learning Recommendation System Model** and **Mobile Development**. And Creating database in [Cloud SQL](https://cloud.google.com/sql) to save all data.

## REST APIs

In making the  **REST API** we use [Python](https://www.python.org), [Node.js](https://nodejs.org) with Framework [Express.js](https://expressjs.com), for responses using **JSON** format. For each URL that can be used will be explained below.

## List Destination

In this section there is a list of all destinations that can be filtered by category and city. Response from each URL using **JSON** format.

**Base URL :**

> https://capstone-ps419.et.r.appspot.com/

 **Method :**

  > `GET`

- **Show List Destination**

 **Path :**

  > /wisata

   **Example request**

  > https://capstone-ps419.et.r.appspot.com/wisata

### Show List Destination Search By City

- **Get all destinations located in the city of Sukabumi**

  **Path :**

  > /getsukabumi
  
  **Example request**

  > https://capstone-ps419.et.r.appspot.com/getsukabumi

  **Example Response**

```json
{
        "Id_destinasi": 1,
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

- **Get all destinations located in the city of Tasikmalaya**

  **Path :**

  > /gettasikmalaya
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/gettasikmalaya

  **Example Response**

```json
{
        "Id_destinasi": 61,
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

- **Get all destinations located in the city of  Ciamis**

  **Path :**

  > /getciamis

  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getciamis

  **Example Response**

```json
 {
        "Id_destinasi": 75,
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

- **Get all destinations located in the city of Pangandaran**

  **Path :**

  > /getpangandaran
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getpangandaran

  **Example Response**

```json
  {
        "Id_destinasi": 94,
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

- **Get all destinations located in the city of  Banjar**

  **Path :**

  > /getbanjar
  
  **Example Response**

  > https://capstone-ps419.et.r.appspot.com/getbanjar

  **Contoh Respon**

```json
 {
        "Id_destinasi": 108,
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

- **Get all destinations located in the city of Kuningan**

  **Path :**

  > /getkuningan
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getkuningan
  
  **Example Response**

```json
{
        "Id_destinasi": 291,
        "Nama": "Taman Purbakala Cipari",
        "Rating": 4.4,
        "Jam Operasional": "08.00-16.00 WIB",
        "Tiket Masuk": "Rp5.000",
        "Kategori": "Sejarah&Budaya,Pendidikan",
        "Kota": "Kuningan",
        "Lokasi": "https://maps.app.goo.gl/juMErYXC4xm2KLMq5",
        "Deskripsi": "Taman Purbakala Cipari adalah situs arkeologi yang terkenal karena penemuan prasasti-prasasti Canggal yang berasal dari abad ke-8 Masehi. Situs ini memberikan wawasan tentang sejarah dan peradaban masa lalu di wilayah tersebut"
    }
```
<br>

- **Get all destinations located in the city of Bogor**

  **Path :**

  > /getbogor
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getbogor

  **Example Response**

```json
 {
        "Id_destinasi": 164,
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

- **Get all destinations located in the city of Bandung**

  **Path :**

  > /getbandung
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getbandung
  
  **Example Response**

```json
{
        "Id_destinasi": 229,
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

- **Get all destinations located in the city of Cirebon**

  **Path :**

  > /getcirebon
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getcirebon
  
  **Example Response**

```json
{
        "Id_destinasi": 284,
        "Nama": "Keraton Kasepuhan Cirebon",
        "Rating": 4.5,
        "Jam Operasional": "08.00-16.00 WIB",
        "Tiket Masuk": "Rp20.000",
        "Kategori": "Keluarga,Sejarah&Budaya,Religi",
        "Kota": "Cirebon",
        "Lokasi": "https://maps.app.goo.gl/qehg8f9jKu9KVNuU6",
        "Deskripsi": "Keraton ini adalah istana kerajaan yang kaya sejarah, dengan arsitektur yang memukau dan museum yang mengungkapkan warisan budaya Cirebon"
    }
```
<br>

- **Get all destinations located in the city of Garut**

  **Path :**

  > /getgarut
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getgarut
  
  **Example Response**

```json
{
        "Id_destinasi": 345,
        "Nama": "Gunung Guntur",
        "Rating": 4.6,
        "Jam Operasional": "24 Jam",
        "Tiket Masuk": "Rp14.500",
        "Kategori": "Alam,Petualangan",
        "Kota": "Garut",
        "Lokasi": "https://maps.app.goo.gl/UUwJ347iHfbYPctV8",
        "Deskripsi": "Jika Anda menyukai kegiatan naik gunung, maka Gunung Guntur dapat menjadi pilihan wisata. Gunung ini berada di ketinggian sekitar 2.249 meter di atas permukaan laut dan memiliki ciri khas lahan yang tandus dan sedikit rumput"
    }
```
<br>

- **Get all destinations located in the city of Cilegon**

  **Path :**

  > /getcilegon

  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getcilegon

  **Example Response**

```json
  {
        "Id_destinasi": 111,
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

- **Get all destinations located in the city of Serang**

  **Path :**

  > /getserang

  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getserang

  **Example Response**

```json
{
        "Id_destinasi": 130,
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

- **Get all destinations located in the city of Pandeglang**

  **Path :**

  > /getpandeglang
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getpandeglang

  **Example Response**

```json
 {
        "Id_destinasi": 137,
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

- **Get all destinations located in the city of Lebak**

  **Path :**

  > /getlebak
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getlebak

  **Example Response**

```json
  {
        "Id_destinasi": 147,
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



- **Get all destinations located in the city of Jakarta**

  **Path :**

  > /getjakarta
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getjakarta

  **Example Response**

```json
{
        "Id_destinasi": 184,
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

- **Get all destinations located in the city of Depok**

  **Path :**

  > /getdepok
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getdepok

  **Example Response**

```json
 {
        "Id_destinasi": 195,
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

- **Get all destinations located in the city of Bekasi**

  **Path :**

  > /getbekasi
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getbekasi
  
  **Example Response**

```json
 {
        "Id_destinasi": 205,
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

- **Get all destinations located in the city of Tangerang**

  **Path :**

  > /gettangerang
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/gettangerang
  
  **Example Response**

```json
 {
        "Id_destinasi": 214,
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


### Menampilkan Destinasi Wisata Berdasarkan Kategori

- **Get all destinations with Nature Category**
  
 **Path :**

  > /getalam
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getalam

<br>

- **Get all destinations With Family Category**
  
 **Path :**

  > /getkeluarga
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getkeluarga

<br>

- **Get all destinations With Water Category**
  
 **Path :**

  > /getair
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getair

<br>

- **Get all destination With History Category**
  
 **Path :**

  > /getsejarah
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getsejarah

<br>

- **Get all destinations with the Culinary Category**
  
 **Path :**

  > /getkuliner
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getkuliner

<br>

- **Get all destinations With Adventure Category**
  
 **Path :**

  > /getpetualangan
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getpetualangan
<br>

- **Get all destinations With Education Category**
  
 **Path :**

  > /getpendidikan
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getpendidikan

<br>

### Menampilkan Destinasi Wisata Berdasarkan Kategori
- **Get all destinations by selecting one of the categories**
  
 **Path :**

  > /getonekategori 
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getonekategori 

<br>

- **Get all destinations by selecting more one category**
  
 **Path :**

  > /getmorekategori
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getmorekategori

<br>


- **Get all destinations by selecting one of the city**
  
 **Path :**

  > /getonekota
  
  **Example Request**

  > https://capstone-ps419.et.r.appspot.com/getonekota
<br>

## Destination Recommendation
This **RESTful APIs** is used to connect data models that have been created by the **Machine Learning** team into data that can be consumed by **Mobile Development** to provide destination recommendations to users. Response from each URL using **JSON** format.

**Base URL :**

> https://hellops419-o3k3r6jfja-et.a.run.app/

 **Path :**

  > /predict

 **Method :**

  > `GET`

 **Example Request**

  > https://hellops419-o3k3r6jfja-et.a.run.app/predict 
