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

// router.get("/getnature", (req, res) => {
//     const query = "SELECT * FROM data_wisata where Kategori='Nature-Adventure'"
//     connection.query(query, (err, rows, field) => {
//         if(err) {
//             res.status(500).send({message: err.sqlMessage})
//         } else {
//             res.json(rows)
//         }
//     })
// })

// router.get("/geturban", (req, res) => {
//     const query = "SELECT * FROM data_wisata where Kategori='Urban-Fam'"
//     connection.query(query, (err, rows, field) => {
//         if(err) {
//             res.status(500).send({message: err.sqlMessage})
//         } else {
//             res.json(rows)
//         }
//     })
// })

// router.get("/getedu", (req, res) => {
//     const query = "SELECT * FROM data_wisata where Kategori='Edu-Culture-Food'"
//     connection.query(query, (err, rows, field) => {
//         if(err) {
//             res.status(500).send({message: err.sqlMessage})
//         } else {
//             res.json(rows)
//         }
//     })
// })

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

router.get("/getalam", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Alam', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getkeluarga", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Keluarga', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getair", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Air', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getsejarah", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Sejarah&Budaya', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getkuliner", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Kuliner', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getpetualangan", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Petualangan', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getpendidikan", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Pendidikan', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getreligi", (req, res) => {
    const query = "SELECT * FROM data_komplit WHERE FIND_IN_SET('Religi', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getonekategori", (req, res) => {
    const { kategori } = req.body;
    if (!kategori) {
        return res.status(400).json({ message: 'Kategori tidak boleh kosong.' });
    }
    const query = `SELECT * FROM data_komplit WHERE FIND_IN_SET(?, kategori) > 0;`
    connection.query(query, [kategori], (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getonekota", (req, res) => {
    const { kota } = req.body;
    if (!kota) {
        return res.status(400).json({ message: 'Kota tidak boleh kosong.' });
    }
    const query = `SELECT * FROM data_komplit WHERE FIND_IN_SET(?, kota) > 0;`
    connection.query(query, [kota], (err, rows, field) => {
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