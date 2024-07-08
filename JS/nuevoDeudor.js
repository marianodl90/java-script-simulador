
let listaDAStorage = JSON.parse(localStorage.getItem("listaNuevaDA")) || []

const nuevaListaDAContainer = document.getElementById("nuevoDeudor-container")

let listaND = []

function agregarNuevoDeudor (id ,nombre, apellido, montoAdeudado){
    const nuevoDeudor = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    montoAdeudado: montoAdeudado
    }
    
    listaND.push(nuevoDeudor)
    localStorage.setItem("listaNuevaDA", JSON.stringify(listaND))
    

}

agregarNuevoDeudor(18, "Mariano", "Valverde", 45000)
agregarNuevoDeudor(18, "Resilento", "hcobar", 45000)
agregarNuevoDeudor(18, "Pepe", "Pinesco", 45000)



function limpiarLista() {
    listaND = []
    localStorage.setItem("listaNuevaDA", JSON.stringify(listaND))
    nuevaListaDAContainer.innerHTML = ""
}



function renderizarNuevosDeudores (arrayDN){
    
    arrayDN.forEach(deudorN => {
        const card = document.createElement("div")
    card.innerHTML = `
                         <h3>${deudorN.id}</h3>                    
                         <h3>${deudorN.nombre}</h3>
                         <h3>${deudorN.apellido}</h3>
                         <h3>${deudorN.montoAdeudado}</h3><br>
                         `

    nuevaListaDAContainer.appendChild(card)
    });

}

document.addEventListener("DOMContentLoaded", function() {
    if (listaDAStorage.length > 0) {
        listaND = listaDAStorage; 
        renderizarNuevosDeudores(listaND);
    }
});



 


