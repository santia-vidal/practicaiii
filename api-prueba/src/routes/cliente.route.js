const express = require('express')

const router = express.Router()

const conexion = require('../database')

router.get('/clientes', async(req,res) => {
    const db = await conexion.obtener_conexion()
    const rows = await db.query('select * from cliente')
    res.json(rows)
})

router.post('/cliente', async(req,res) => {
    const unCliente = req.body
    const db = await conexion.obtener_conexion()

    await db.query(`insert into cliente (nombre, apellido, dni)
        values('${unCliente.nombre}','${unCliente.apellido}',${unCliente.dni})`)

        res.json('El cliente se insertó correctamentre')
})


module.exports = router