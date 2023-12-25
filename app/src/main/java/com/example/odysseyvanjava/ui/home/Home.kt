package com.example.odysseyvanjava.ui.home

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.odysseyvanjava.ui.detail.DetailActivity
import com.example.odysseyvanjava.R
import com.example.odysseyvanjava.data.Wisata
import com.example.odysseyvanjava.adapter.WisataAdapter
import com.example.odysseyvanjava.retrofit.ApiEndpoint
import com.google.gson.Gson
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class Home : Fragment() {
    private lateinit var recyclerView: RecyclerView
    private lateinit var wisataAdapter: WisataAdapter
    private lateinit var apiEndpoint: ApiEndpoint

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_home, container, false)

        recyclerView = view.findViewById(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(activity)
        wisataAdapter = WisataAdapter { showDetail(it) }
        recyclerView.adapter = wisataAdapter

        // Inisialisasi Retrofit
        val retrofit = Retrofit.Builder()
            .baseUrl("https://capstone-ps419.et.r.appspot.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        apiEndpoint = retrofit.create(ApiEndpoint::class.java)

        // Ambil data wisata dari API
        fetchData()

        return view
    }

    private fun fetchData() {
        val call = apiEndpoint.getWisataData()
        call.enqueue(object : Callback<List<Wisata>> {
            override fun onResponse(call: Call<List<Wisata>>, response: Response<List<Wisata>>) {
                if (response.isSuccessful) {
                    val wisataList = response.body()
                    wisataList?.let { wisataAdapter.setWisataData(it) }
                } else {
                    // Handle kesalahan
                }
            }

            override fun onFailure(call: Call<List<Wisata>>, t: Throwable) {
                // Handle kegagalan panggilan API
            }
        })
    }

    private fun showDetail(wisata: Wisata) {
        // Menyimpan objek Wisata ke dalam Intent sebagai string JSON
        val gson = Gson()
        val wisataJson = gson.toJson(wisata)

        val intent = Intent(activity, DetailActivity::class.java)
        intent.putExtra("Wisata", wisataJson)

        // Memulai aktivitas DetailActivity
        startActivity(intent)
    }
}

