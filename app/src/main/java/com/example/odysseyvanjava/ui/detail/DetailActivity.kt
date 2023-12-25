package com.example.odysseyvanjava.ui.detail

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

import android.content.Intent
import android.net.Uri
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import com.bumptech.glide.Glide
import com.example.odysseyvanjava.R
import com.example.odysseyvanjava.data.Wisata
import com.google.gson.Gson


class DetailActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail)

        // Mendapatkan data dari intent
        val intent = intent
        val wisataJson = intent.getStringExtra("Wisata")

        // Mengonversi string JSON kembali menjadi objek Wisata
        val gson = Gson()
        val wisata = gson.fromJson(wisataJson, Wisata::class.java)

        // Menginisialisasi elemen-elemen UI
        val gambarDetailImageView: ImageView = findViewById(R.id.gambarDetailImageView)
        val namaDetailTextView: TextView = findViewById(R.id.namaDetailTextView)
        val ratingDetailTextView: TextView = findViewById(R.id.ratingDetailTextView)
        val deskripsiDetailTextView: TextView = findViewById(R.id.deskripsiDetailTextView)
        val kotaDetailTextView:TextView = findViewById(R.id.kotaDetailTextView)
        val jamDetailTextView:TextView = findViewById(R.id.jamDetailTextView)
        val tiketDetailTextView: TextView = findViewById(R.id.tiketDetailTextView)

        // ... inisialisasi elemen-elemen lainnya

        // Menetapkan nilai dari objek Wisata ke dalam elemen-elemen UI
        wisata?.let {
            // Implementasikan logika untuk menetapkan nilai ke elemen-elemen UI di sini
            namaDetailTextView.text = it.Nama
            ratingDetailTextView.text = "Rating: ${it.Rating}"
            deskripsiDetailTextView.text = it.Deskripsi
            kotaDetailTextView.text = it.Kota
            jamDetailTextView.text = it.Jam_Operasional
            tiketDetailTextView.text = it.Tiket_Masuk


            // Load gambar menggunakan Glide atau cara lainnya
            Glide.with(this)
                .load(it.link_gambar)
                .into(gambarDetailImageView)
        }

        // Mengatur onClickListener untuk tombol "Buka Lokasi"
        val bukaLokasiButton: Button = findViewById(R.id.bukaLokasiButton)
        bukaLokasiButton.setOnClickListener {
            bukaLokasi(wisata?.Lokasi)
        }
    }

    private fun bukaLokasi(lokasi: String?) {
        // Implementasi untuk membuka lokasi, misalnya dengan Intent untuk membuka aplikasi peta
        // Gunakan Intent.ACTION_VIEW dengan URI untuk membuka peta
        // Pastikan untuk menambahkan permission di AndroidManifest.xml jika diperlukan
        val intent = Intent(Intent.ACTION_VIEW, Uri.parse(lokasi))
        startActivity(intent)
    }
}
