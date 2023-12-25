package com.example.odysseyvanjava.ui.profile

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.odysseyvanjava.R
import android.widget.Button
import android.widget.TextView
import com.example.odysseyvanjava.ui.signin.SignInActivity
import com.google.firebase.auth.FirebaseAuth

class Profile : Fragment() {

    private lateinit var emailTextView: TextView
    private lateinit var changePasswordButton: Button
    private lateinit var logoutButton: Button

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_profile, container, false)

        // Inisialisasi elemen UI
        emailTextView = view.findViewById(R.id.emailTextView)
        changePasswordButton = view.findViewById(R.id.changePasswordButton)
        logoutButton = view.findViewById(R.id.logoutButton)

        // Mendapatkan email pengguna dari Firebase Authentication
        val currentUser = FirebaseAuth.getInstance().currentUser
        val userEmail = currentUser?.email

        // Menampilkan email di TextView
        emailTextView.text = "Email Pengguna: $userEmail"

        logoutButton.setOnClickListener {
            logout()
        }

        return view
    }

    fun changePassword(view: View) {
        // Implementasi untuk mengganti sandi
        // Gunakan FirebaseAuth.getInstance().sendPasswordResetEmail untuk mengirim email reset sandi jika diperlukan
        // Anda dapat membuka tampilan khusus untuk mengganti sandi atau menyesuaikan sesuai kebutuhan proyek Anda
    }

    private fun logout() {
        // Logout dari akun Firebase
        FirebaseAuth.getInstance().signOut()

        // Arahkan pengguna ke halaman login atau aktivitas lainnya
        val intent = Intent(activity, SignInActivity::class.java)
        startActivity(intent)
        activity?.finish() // Selesaikan aktivitas fragment atau activity saat ini agar tidak dapat dikembalikan
    }
}
