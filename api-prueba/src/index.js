const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/cliente.route')

const socketio = require('socket.io')
const osu = require('node-os-utils')

//ejecutamos express para acceder a sus funcionalidades
//dicha funcion nos retorn las herramientas necesarias
const SERVER_MONITOREO = express()

//especificamos la notacion JSON para el flujo de datos.
SERVER_MONITOREO.use(express.json())
//hace posible la comunicacion entre cliente y servidor
SERVER_MONITOREO.use(cors())
//esta dependencia hace posible monitorear las solicitudes http
SERVER_MONITOREO.use(morgan('dev'))

//pongo en funcionamiento las rutas existentes en cliente.router
SERVER_MONITOREO.use(require('./routes/cliente.route'))

//seteamos puerto necesario para correr el server
SERVER_MONITOREO.set('port', process.env.PORT || 3002)

//estamos corriendo el servidor
const SERVER_MONITOREO = SERVER_MONITOREO.listen( SERVER_MONITOREO.get('port'))

console.log('Servidor corriendo en el puerto: '+SERVER_MONITOREO.get('port'))

//le pasamos el servidor a socketio, para habilitar el canal websocket
const io = socketio(SERVER_MONITOREO)
const cpu = osu.cpu

io.on('connection', (socket) => {

    setInterval( () => {
        cpu.usage().then( (cpuPorcentual) => {
            io.sockets.emit('cpuPorcentual',cpuPorcentual)
            console.log(cpuPorcentual)
        })
})