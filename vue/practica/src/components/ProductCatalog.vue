<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4" v-for="(productos,index) of lista_productos.products" v-bind:key="index">
          <div class="card mb-4">
              <img :src="productos.thumbnail" class="card-img-top" :alt="productos.title">
              <div class="card-body">
                <h5 class="card-title">{{ productos.title }}</h5>
                <p class="card-text">{{productos.description}}</p>
                <p class="card-text"><strong>Precio: ${{ productos.price }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
/* eslint-disable */
import { ref } from "vue";
export default {
  name:"ProductCatalog",
  setup() {

    //sector de variables
    let lista_productos = ref([])

    //sector de funciones
    async function consumir_api() {
      const productos = await fetch('https://dummyjson.com/products')
      lista_productos.value = await productos.json()
    }

    return{
      consumir_api,
      lista_productos
    }
  },
  created(){
    this.lista_productos
    this.consumir_api()
  }

}
  </script>
  
 
  