
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

    renderizarNuevosDeudores(listaND)

}

agregarNuevoDeudor(13, "Mariano", "Troncoso", 45000)
agregarNuevoDeudor(15, "Nestor", "Martin", 45000)


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

renderizarNuevosDeudores(listaND)
    

 


