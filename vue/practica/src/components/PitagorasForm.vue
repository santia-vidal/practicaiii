<template>
    <div>
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-3">
              <div>
                <label class="form-label">Cateto Opuesto:</label>
                <input  v-model="ladoA" class="form-control" type="number" placeholder="Ingresar valor"/>
              </div>    
              <div>
                <label class="form-label">Cateto adyacente:</label>
                <input v-model="ladoB" class="form-control" type="number"  placeholder="Ingresar valor"/>
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-access">Calcular hipotenusa</button>
     
      <div v-if="hipotenusa">
        <p>La hipotenusa es: {{ hipotenusa }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ladoA: 0,
        ladoB: 0,
        hipotenusa: null,
      };
    },
    methods: {
      calcularHipotenusa() {
        this.hipotenusa = Math.sqrt(Math.pow(this.ladoA, 2) + Math.pow(this.ladoB, 2)).toFixed(2);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  