const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/cliente.route')

const socketio = require('socket.io')
const osu = require('node-os-utils')

//ejecutamos express para acceder a sus funcionalidades
//dicha funcion nos retorn las herramientas necesarias
const server = express()

//especificamos la notacion JSON para el flujo de datos.
server.use(express.json())
//hace posible la comunicacion entre cliente y servidor
server.use(cors())
//esta dependencia hace posible monitorear las solicitudes http
server.use(morgan('dev'))

//pongo en funcionamiento las rutas existentes en cliente.router
server.use(require('./routes/cliente.route'))

//seteamos puerto necesario para correr el server
server.set('port', process.env.PORT || 3002)

//estamos corriendo el servidor
const servidor = server.listen( server.get('port'))

console.log('Servidor corriendo en el puerto: '+server.get('port'))

const io = socketio(servidor)
const cpu = osu.cpu

io.on('connection', () => {

    setInterval( () => {
        cpu.usage().then( (cpuPorcentual) => {
            io.sockets.emit('cpuPorcentual',cpuPorcentual)
            console.log(cpuPorcentual)
        })
    },2000)
})