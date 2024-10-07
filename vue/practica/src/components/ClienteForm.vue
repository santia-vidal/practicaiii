<template>
    <div class="row">

        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" type="text" class="form-control" placeholder="Ingrese Nombre">
            </div>

            <div class="mb-3">
                <label class="form-label">Apellido</label>
                <input v-model="apellido" type="text" class="form-control" placeholder="Ingrese Apellido">
            </div>

            <div class="mb-3">
                <label class="form-label">DNI</label>
                <input v-model="dni" type="number" class="form-control" placeholder="Ingrese DNI">
            </div>

            <button @click="guardarCliente()" class="btn btn-success">Guardar Cliente</button>
        </div>

        <div class="col-8">

            <div class="table">
                <thead>

                </thead>
                <tbody>
                    
                </tbody>
            </div>
        </div>


    </div>
</template>

<script>
export default{
    name:'ClienteForm',
    data(){
        return{
            nombre:'',
            apellido:'',
            dni:null,
            lista:[]
        }
    },

    methods:{

        vaciar(){
            this.nombre = '';
            this.apellido = '';
            this.dni = null;
        },

        guardarCliente(){
            const unCliente = {
                nombre:this.nombre,
                apellido:this.apellido,
                dni:this.dni
            }

            this.axios.post("http://localhost:3002/cliente", unCliente).then(result => {

                alert(result.data)
                this.vaciar()
            });
        },

        listarClientes(){
            this.axios.get("http://localhost:3002/clientes").then(result => {
                this.lista = result.data;
            })
        }
    },
    mounted(){
        this.listarClientes()
    }
}
</script>