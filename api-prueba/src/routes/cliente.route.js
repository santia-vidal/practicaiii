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

router.put('/cliente/:idcliente', async(req,res) => {
    const db = await conexion.obtener_conexion()

    const unCliente = req.body
    const id = req.params.idcliente

    await db.query(`update cliente
        set nombre = '${unCliente.nombre}', apellido = '${unCliente.apellido}', dni = ${unCliente.dni}
        where id_cliente = ${id}`)

        res.json('Actualización exitosa!')
        
})

router.delete('/cliente/:idcliente', async(req,res) => {
    const db = await conexion.obtener_conexion()

    const id = req.params.idcliente

    await db.query(`delete from cliente where id_cliente = ${id}`)

    res.json('Eliminación exitosa!')
})

router.get('/cliente/:idcliente', async(req,res) => {
    const db = await conexion.obtener_conexion()

    const id = req.params.idcliente

    const row = await db.query(`select * from cliente where id_cliente=${id}`)

    res.json(row)
})

module.exports = router