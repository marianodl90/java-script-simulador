let listaDAStorage = localStorage.getItem("DeudoresA")
listaDAStorage = JSON.parse(listaDAStorage)

// metodo filtrar para generar un nuevo array que no repita mas de una vez a deudores categoria A 
const nuevaLista = []
function filtrarDeudoresUnicos(deudores){
    deudores.forEach(deudor=>{
        const deudorSeleccionado = deudores.find(deudor => deudor.id == deudores.id)
        nuevaLista.push(deudorSeleccionado)
        console.log(nuevaLista)
    })  
}
    


let deudoresAContainer = document.getElementById("deudoresA-container")

function renderizarDeudoresA (deudoresAArrays) {
    deudoresAArrays.forEach(deudorA => {
        const card = document.createElement("div")
        card.innerHTML = `
                         <h3>${deudorA.montoAdeudado}</h3>`
        deudoresAContainer.appendChild(card)  
    })

filtrarDeudores()

}

renderizarDeudoresA(nuevaLista)







