<template>
    <div class="container">
        <h4>Recibiendo datos</h4>
        <div class="row">
            <div class="col-3">
                <div class="mb-3">
                    <select v-model="equipo" class="form-select">
                        <option value="-1" selected disabled>Seleccione equipo...</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="mb-3">
                    <div class="card">
                        <div class="card-reader text-center"><b>Cpu</b></div>
                        <div class="card-body text-center">
                            <h1>{{ valor }}</h1>
                        </div>
                        <div class="card-footer">
                            <h4></h4>
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
            valor : null
        }
    },
    methods: {
        capturar_random()
        {
            const socket = io("http://localhost:3002")

            socket.on('cpuPorcentual', (valor) => {
                this.valor = valor
            })
        }
    },
    mounted()
    {
        this.capturar_random()
    }
    
}</script>