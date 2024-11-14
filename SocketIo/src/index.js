//declaro constantes
const express = require('express')
const cors = require('cors')
const socketio = require('socket.io')

//declaro constante
const server = express()

//seteamos el puerto en el que va a correr el server
server.set('port', process.env.PORT || 3002)
server.use(cors())

//estamos corriendo el servidor
const servidor = server.listen( server.get('port'), () => {
    console.log('La conexión fue exitosa!')
});

//le pasamos el servidor a socketio, para habilitar el canal websocket
const io = socketio(servidor)

//declaro variable
var cpu = osu.cpu

//establecemos la apertura del canal, par emitir posteriormente los datos
io.on('connection', (socket) => {

    setInterval( () => {
        socket.emit('dato-socket',
            {
                dato:Math.random(),
                nombre:'Santi'
            }
        )
    }, 1000)

    socket.on('respuesta', (valor) => {
        console.log(valor)
    });
});