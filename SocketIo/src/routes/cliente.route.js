const express = require('express')

const router = express.Router()

const conexion = require('../database')

router.get('/cliente', async(req,res) => {
    const db = await conexion.obtener_conexion()
    const rows = await db.query('select * from cliente')
    res.json(rows)
})

router.post('/cliente', async(req,res) => {
    const unCliente = req.body
    const db = await conexion.obtener_conexion()

    await db.query(`insert into cliente (razon_social, telefono, direccion_ip, descripcion_equipo, sistema_operativo)
        values('${unCliente.razon_social}',${unCliente.telefono}, ${unCliente.direccion_ip}',${unCliente.descripcion_equipo}','${unCliente.sistema_operativo}')`)

        res.json('El cliente se insertó correctamentre')
})

router.put('/cliente/:idcliente', async(req,res) => {
    const db = await conexion.obtener_conexion()

    const unCliente = req.body
    const id = req.params.idcliente

    await db.query(`update cliente
        set razon_social = '${unCliente.razon_social}', telefono = ${unCliente.telefono}, direccion_ip = ${unCliente.direccion_ip}, descripcion_equipo = '${unCliente.descripcion_equipo}', sistema_oprativo = '${sistema_operativo}'
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