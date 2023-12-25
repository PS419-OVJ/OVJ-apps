package com.example.odysseyvanjava.retrofit

import com.example.odysseyvanjava.data.Wisata
import retrofit2.Call;
import retrofit2.http.GET

interface ApiEndpoint {
    @GET("wisata")
    fun getWisataData(): Call<List<Wisata>>
}