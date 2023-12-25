package com.example.odysseyvanjava.data

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Wisata (
    val Id_destinasi: Int,
    val Nama: String,
    val Rating: Double,
    val Jam_Operasional: String,
    val Tiket_Masuk: String,
    val Kategori: String,
    val Kota: String,
    val Lokasi: String,
    val Deskripsi: String,
    val link_gambar: String,
    var isFavorite: Boolean = false
):Parcelable