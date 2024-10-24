<template>
    <h4>Recibiendo datos</h4>

    <div class="col-4">
        <div class="card">
            <div class="card-reader text-center"><b>Cpu</b></div>
            <div class="card-body text-center">
                <h1>{{ valor_recibido }}</h1>
            </div>
            <div class="card-footer">
                <h4>{{ estado }}</h4>
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

        }
    },
    methods: {
        capturar_random()
        {
            const socket = io("htttp://localhost:3002")

            socket.on('cpuPorcentual', (valor) => {
                console.log(valor)
            })
        }
    },
    mounted()
    {
        this.capturar_random()
    }
    
}</script>