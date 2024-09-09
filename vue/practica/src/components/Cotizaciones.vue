<template>
    <div class="container-fluid">
        <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Compra</th>
            <th>Venta</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cotizacion in lista_cotizaciones" :key="cotizacion.nombre">
            <td>{{ cotizacion.nombre }}</td>
            <td>{{ cotizacion.compra }}</td>
            <td>{{ cotizacion.venta }}</td>
            <td>{{ cotizacion.fecha }}</td>
          </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
/* eslint-disable */
    import axios from 'axios'
    import { ref } from 'vue';
    export default {
        name: "Cotizaciones",
        setup() {
            const lista_cotizaciones = ref([])
            async function obtener_cotizaciones() {
                axios
                .get("https://dolarapi.com/v1/dolares")
                .then((response) => {
                    lista_cotizaciones.value = response.data;
                })
            }
    return {
      obtener_cotizaciones,  
      lista_cotizaciones,
    };
  },
  created(){
    this.lista_cotizaciones
    this.obtener_cotizaciones()
  }
};
</script>