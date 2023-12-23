const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv").config()

const wisataRouter = require('./routes/wisata')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(wisataRouter)

app.get("/", (req, res) => {
    console.log("API Data Wisata Pulau Jawa Bagian Barat oleh Cloud Computing Team CH2-PS419")
    res.send("API Data Wisata Pulau Jawa Bagian Barat oleh Cloud Computing Team CH2-PS419")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
})