const express = require('express')
const mysql = require('mysql')
const router = express.Router()

// TODO: Sesuaikan konfigurasi database
const connection = mysql.createConnection({
    host: '34.101.176.249',
    user: 'root',
    database: 'ps419',
    password: '123456'
})

router.get("/", (req, res) => {
    const query = "select * FROM data_wisata"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getnature", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kategori='Nature-Adventure'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/geturban", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kategori='Urban-Fam'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getedu", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kategori='Edu-Culture-Food'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getsukabumi", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Sukabumi'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/gettasikmalaya", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Tasikmalaya'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getciamis", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Ciamis'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getpangandaran", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Pangandaran'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getbanjar", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Banjar'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getcilegon", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Cilegon'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getserang", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Serang'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getpandeglang", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Pandeglang'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getlebak", (req, res) => {
    const query = "SELECT * FROM data_wisata where Kota='Lebak'"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

// router.get("/getrecord/:id", (req, res) => {
//     const id = req.params.id

//     const query = "SELECT * FROM records WHERE id = ?"
//     connection.query(query, [id], (err, rows, field) => {
//         if(err) {
//             res.status(500).send({message: err.sqlMessage})
//         } else {
//             res.json(rows)
//         }
//     })
// })

// router.get("/searchrecords", (req, res) => {
//     const s = req.query.s;

//     console.log(s)
//     const query = "SELECT * FROM records WHERE name LIKE '%" + s + "%' or notes LIKE '%" + s + "%'"
//     connection.query(query, (err, rows, field) => {
//         if(err) {
//             res.status(500).send({message: err.sqlMessage})
//         } else {
//             res.json(rows)
//         }
//     })
// })

module.exports = router