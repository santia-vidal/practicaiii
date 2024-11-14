<template>
    <div class="container">
        <h4>Recibiendo datos</h4>
        <div class="row">
            <div class="col-3">
                <div class="mb-3">
                    <select @change="capturar_random()" v-model="equipo" class="form-select">
                        <option value="" selected disabled>Seleccione equipo...</option>
                        <option value="http://localhost:3002"> Mi equipo</option>
                        <option value="htt://172.168.XXX.XXX:3000">Equipo Nacho</option>
                        <option value="http://172.168.XXX.XXX:3000">Equipo Roberto</option>
                        <option value="http://172.168.XXX.XXX:3000">Equipo Nico</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="mb-3">
                    <div class="card">
                        <div class="card-reader text-center"><b>{{nombre}}</b></div>
                        <div class="card-body text-center">
                            <h1>{{valor_recibido}}</h1>
                        </div>
                        <div class="card-footer">
                            <h4>{{estado}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import io from 'socket.io-client'
export default{
    name:'Socketindicador',
    data() {
        return{
            valor_recibido:null,
            estado:'',
            equipo:'',
            nombre:''

        }
    },
    methods: {
        capturar_random()
        {
            //tenemos que conectarnos y/o vincular nuestro cliente con el servidor
            const socket = io(this.equipo)

            socket.on('dato-socket', (objeto) => {
                this.valor_recibido = objeto.dato.toFixed(2);
                this.nombre = objeto.nombre;
                if(this.valor_recibido > 0.7)
                {
                    this.estado = 'Exedido'
                }else{
                    this.estado = 'Normal' 
                }
            })
        }
    }
}</script>