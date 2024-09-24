const mariadb = require('mariadb')

const parametros = mariadb.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'12345678',
    database:'apidb'

})

async function obtener_conexion() {
    //obtenemos la instancia de conexion
    const conexion = await parametros.getConnection()
    //entregamos como respuesta dicha instancia
    return  conexion 
}

module.exports = { obtener_conexion }