const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


//ejecutamos express para acceder a sus funcionalidades
//dicha funcion nos retorn las herramientas necesarias
const server = express()

//especificamos la notacion JSON para el flujo de datos.
server.use(express.json())
//hace posible la comunicacion entre cliente y servidor
server.use(cors())
//esta dependencia hace posible monitorear las solicitudes http
server.use(morgan('dev'))

//seteamos puerto necesario para correr el server
server.set('port', process.env.PORT || 3002)

//estamos corriendo el servidor
server.listen( server.get('port'))

console.log('Servidor corriendo en el puerto: '+server.get('port'))