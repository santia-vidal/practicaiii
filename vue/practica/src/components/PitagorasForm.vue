<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Teorema de Pitágoras</span>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="mb-3">
          <form @submit.prevent="calcularHipotenusa">
            <div class="form-group">
              <label for="ladoA">Cateto opuesto:</label>
              <input v-model.number="ladoA" type="number" id="ladoA" class="form-control" placeholder="Ingrese cateto" required />
            </div>
            <div class="form-group">
              <label for="ladoB">Cateto adyacente:</label>
              <input v-model.number="ladoB" type="number" id="ladoB" class="form-control" placeholder="Ingrese cateto" required />
            </div>
            <div class="button">
              <button type="sumbit" class="btn btn-primary btn-lg">Calcular Hipotenusa</button>
            </div>
          </form>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="mb-3">
        <div v-if="hipotenusa">
      <h4 class="mt-3">La hipotenusa es: {{ hipotenusa }}</h4>
    </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      ladoA: 0,
      ladoB: 0,
      hipotenusa: null
    };
  },
  methods: {
    calcularHipotenusa() {
      this.hipotenusa = Math.sqrt(this.ladoA ** 2 + this.ladoB ** 2).toFixed(2);
    }
  }
};
</script>

<style scoped>
  
</style>
