const express = require('express')
const mysql = require('mysql')
const router = express.Router()

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
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Alam', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getkeluarga", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Keluarga', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getair", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Air', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getsejarah", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Sejarah&Budaya', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getkuliner", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Kuliner', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getpetualangan", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Petualangan', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getpendidikan", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Pendidikan', kategori) > 0;"
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getreligi", (req, res) => {
    const query = "SELECT * FROM data_wisata WHERE FIND_IN_SET('Religi', kategori) > 0;"
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
    const query = `SELECT * FROM data_wisata WHERE FIND_IN_SET(?, kategori) > 0;`
    connection.query(query, [kategori], (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

router.get("/getmorekategori", (req, res) => {
    const { kategori } = req.body;
    if (!kategori) {
        return res.status(400).json({ message: 'Kategori tidak boleh kosong.' });
    }

    let kategoriArray;
    if (Array.isArray(kategori)) {
        kategoriArray = kategori;
    } else {
        kategoriArray = kategori.split(',');
    }

    const query = `SELECT * FROM data_wisata WHERE ${kategoriArray.map(() => 'FIND_IN_SET(?, kategori)').join(' AND ')};`;
    connection.query(query, kategoriArray, (err, rows, field) => {
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
    const query = `SELECT * FROM data_wisata WHERE FIND_IN_SET(?, kota) > 0;`
    connection.query(query, [kota], (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage})
        } else {
            res.json(rows)
        }
    })
})

module.exports = router