package com.example.odysseyvanjava.ui.splashscreen

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import com.example.odysseyvanjava.R
import com.example.odysseyvanjava.ui.signin.SignInActivity

class SplashScreenActivity : AppCompatActivity() {

    private val SPLASH_DELAY: Long = 2000 // Waktu tampilan splash screen (dalam milidetik)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash_screen)
        Handler().postDelayed({
            val intent = Intent(this@SplashScreenActivity, SignInActivity::class.java)
            startActivity(intent)
            finish() // Menyelesaikan aktivitas splash screen agar tidak dapat dikembalikan
        }, SPLASH_DELAY)
    }

}