function calculos(){

    const select = document.getElementById("slt_operacion").value

    let resultado = null

    if(select == 0){
        resultado = 9095000
       
    }

    if(select == 1){
        resultado = 13815000
    }

    if(select == 2){
        resultado = 17575000
    }
    document.getElementById("h_resultado").textContent = "$" +resultado
}

function cambiar_label(){
    const select = document.getElementById("slt_operacion").value
    const label = document.getElementById("lbl_dato")

    if(select == 0){
        label.textContent = "Ford Ka se encuentra en promoción con 15% off"
    }
    if(select == 1){
        label.textContent = "Ford Focus se encuentra en promoción con 10% off"
    }
    if(select == 2){
        label.textContent = "Ford Fiesta se encuentra en promoción con 5% off"
    }
}
document.getElementById("btn_aceptar").addEventListener("click",calculos)
