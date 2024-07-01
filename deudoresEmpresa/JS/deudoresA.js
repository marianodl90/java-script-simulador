let listaDAStorage = localStorage.getItem("DeudoresA")
listaDAStorage = JSON.parse(listaDAStorage)

// metodo filtrar para generar un nuevo array que no repita mas de una vez a deudores categoria A 

// funcion "filtrarDeudoresUnicos" retorna una funcion

const nuevaLista = []

function filtrarDeudoresUnicos(Arrays){
    deudores.forEach(deudorA=>{
        const deudorSeleccionado = deudoresA.find(deudorA => deudorA.id == deudoresA.nombre)
        
        nuevaLista.push(deudorSeleccionado)
        return console.log(nuevaLista)
    })  
}

filtrarDeudoresUnicos(listaDAStorage)

// Renderizamos en nueva lista en HTML la lista nueva

let deudoresAContainer = document.getElementById("deudoresA-container")

function renderizarDeudoresA (deudoresAArrays) {
    deudoresAArrays.forEach(deudorA => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${deudor.nombre}</h3>
                         <h3>${deudor.apellido}</h3>
                         <h3>${deudorA.montoAdeudado}</h3>`
        deudoresAContainer.appendChild(card)  
    })
}

renderizarDeudoresA(nuevaLista)







