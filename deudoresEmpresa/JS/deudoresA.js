let listaDAStorage = localStorage.getItem("DeudoresA")
listaDAStorage = JSON.parse(listaDAStorage)


let deudoresAContainer = document.getElementById("deudoresA-container")
function filtrarDeudoresA (deudoresAArrays) {
    deudoresAArrays.forEach(deudorA => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${deudorA.nombre}</h3>
                         <h3>${deudorA.apellido}</h3>
                         <h3>${deudorA.montoAdeudado}</h3>`
        deudoresAContainer.appendChild(card)
        
        
    })
} 

filtrarDeudoresA(listaDAStorage)




