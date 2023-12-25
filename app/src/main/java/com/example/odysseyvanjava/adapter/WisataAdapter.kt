package com.example.odysseyvanjava.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.odysseyvanjava.R
import com.example.odysseyvanjava.data.Wisata

class WisataAdapter(private val onItemClick: (Wisata) -> Unit) :
    RecyclerView.Adapter<WisataAdapter.WisataViewHolder>() {

    private var wisataList: List<Wisata> = listOf()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): WisataViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val view = inflater.inflate(R.layout.item_wisata, parent, false)
        return WisataViewHolder(view)
    }

    override fun onBindViewHolder(holder: WisataViewHolder, position: Int) {
        val currentWisata = wisataList[position]

        // Set data ke dalam view
        holder.itemView.findViewById<TextView>(R.id.namaTextView).text = currentWisata.Nama
        holder.itemView.findViewById<TextView>(R.id.kotaTextView).text = currentWisata.Kota

        // Implementasi load gambar menggunakan Glide atau cara lainnya
        Glide.with(holder.itemView.context)
            .load(currentWisata.link_gambar)
            .into(holder.itemView.findViewById(R.id.gambarImageView))

        // Handle klik pada item
        holder.itemView.setOnClickListener {
            onItemClick.invoke(currentWisata)
        }
    }

    override fun getItemCount(): Int {
        return wisataList.size
    }

    fun setWisataData(wisataList: List<Wisata>) {
        this.wisataList = wisataList
        notifyDataSetChanged()
    }

    class WisataViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)
}
