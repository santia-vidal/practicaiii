function calculos(){
    const d1 = document.getElementById('inp_valoruno').value
    const d2 = document.getElementById('inp_valordos').value

    const select = document.getElementById("slt_operacion").value

    let resultado = null

    if(select == 0){
        resultado = Number(d1) / Number(d2)
       
    }

    if(select == 1){
        resultado = d1 / d2
    }

    if(select == 2){
        resultado = d1 * d2
    }
    document.getElementById("h_resultado").textContent = +resultado
}

function cambiar_label(){
    const select = document.getElementById("slt_operacion").value
    const label = document.getElementById("lbl_dato")

    if(select == 0){
        label.textContent = "Resistencia = Tensión / Intensidad  "
    }
    if(select == 1){
        label.textContent = "Intensidad = Tensión / Resistencia "
    }
    if(select == 2){
        label.textContent = "Tensión = Intensidad * Resistencia "
    }
}
document.getElementById("btn_aceptar").addEventListener("click",calculos)
