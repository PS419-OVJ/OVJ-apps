# Cloud Computing Path

Membuat **REST APIs** dan menerapkannya ke  [Google Cloud Platform](https://cloud.google.com) dengan menggunakan [Google App Engine](https://cloud.google.com/appengine) untuk saling komunikasi antara **Machine Learning** and **Mobile Development**. Dan Membuat database [Cloud SQL](https://cloud.google.com/sql) untuk menyimpan semua data. 

## REST APIs

Dalam membuat **REST API** kami menggunakan Node.js dan Framwork Express.js, untuk respons menggunakan format **JSON**. Untuk masing-masing URL yang dapat digunakan akan dijelaskan dibawah ini.

## Daftar Destinasi Wisata

Di bagian ini terdapat daftar semua Destinasi Wisata yang ada di wilayah Jawa bagian barat yang dapat difilter berdasarkan kota atau kategori. Respon dari setiap URL menggunakan format **JSON**.

**Base URL :**

> https://capstone-ps419.et.r.appspot.com/

 **Method :**

  > `GET`

- **Mendapatkan Semua Data Wisata**

 **Path :**

  > /wisata

   **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/wisata

### Menampilkan Destinasi Wisata Berdasarkan Kota

- **Mendapatkan Semua Data Wisata berlokasi di Sukabumi**

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

- **Mendapatkan Semua Data Wisata berlokasi di Tasikmalaya**

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

- **Mendapatkan Semua Data Wisata berlokasi di Ciamis**

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

- **Mendapatkan Semua Data Wisata berlokasi di Pangandaran**

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

- **Mendapatkan Semua Data Wisata berlokasi di Banjar**

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

- **Mendapatkan Semua Data Wisata berlokasi di Cilegon**

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

- **Mendapatkan Semua Data Wisata berlokasi di Serang**

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

- **Mendapatkan Semua Data Wisata berlokasi di Pandeglang**

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

- **Mendapatkan Semua Data Wisata berlokasi di Lebak**

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

- **Mendapatkan Semua Data Wisata berlokasi di Bogor**

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

- **Mendapatkan Semua Data Wisata berlokasi di Jakarta**

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

- **Mendapatkan Semua Data Wisata berlokasi di Depok**

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

- **Mendapatkan Semua Data Wisata berlokasi di Bekasi**

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

- **Mendapatkan Semua Data Wisata berlokasi di Tangerang**

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

- **Mendapatkan Semua Data Wisata berlokasi di Bandung**

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

- **Mendapatkan Semua Data Wisata berlokasi di Cirebon**

  **Path :**

  > /getcirebon
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getcirebon
  
  **Contoh Respon**

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

- **Mendapatkan Semua Data Wisata berlokasi di Garut**

  **Path :**

  > /getgarut
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getgarut
  
  **Contoh Respon**

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

- **Mendapatkan Semua Data Wisata berlokasi di Kuningan**

  **Path :**

  > /getkuningan
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getkuningan
  
  **Contoh Respon**

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
### Menampilkan Destinasi Wisata Berdasarkan Kategori

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

- **Mendapatkan Semua Data Wisata Dengan Kategori Air**
  
 **Path :**

  > /getair
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getair

<br>

- **Mendapatkan Semua Data Wisata Dengan Kategori Sejarah**
  
 **Path :**

  > /getsejarah
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getsejarah

<br>

- **Mendapatkan Semua Data Wisata Dengan Kategori Kuliner**
  
 **Path :**

  > /getkuliner
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getkuliner

<br>

- **Mendapatkan Semua Data Wisata Dengan Kategori Petualangan**
  
 **Path :**

  > /getpetualangan
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getpetualangan
<br>

- **Mendapatkan Semua Data Wisata Dengan Kategori Pendidikan**
  
 **Path :**

  > /getpendidikan
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getpendidikan

<br>

### Menampilkan Destinasi Wisata Berdasarkan Kategori
- **Mendapatkan Semua Data Wisata Dengan Memilih Salah Satu Kategori**
  
 **Path :**

  > /getonekategori 
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getonekategori 

<br>

- **Mendapatkan Semua Data Wisata Dengan Memilih Lebih Dari Satu Kategori**
  
 **Path :**

  > /getmorekategori
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getmorekategori

<br>


- **Mendapatkan Semua Data Wisata Dengan Memilih Salah Satu Kota**
  
 **Path :**

  > /getonekota
  
  **Contoh Perintah**

  > https://capstone-ps419.et.r.appspot.com/getonekota
<br>


