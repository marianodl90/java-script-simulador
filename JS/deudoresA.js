let listaDAStorage = localStorage.getItem("DeudoresA")
listaDAStorage = JSON.parse(listaDAStorage)



let deudoresAContainer = document.getElementById("listaDA-container")


function renderizarDeudoresA (deudoresAArrays) {
    deudoresAArrays.forEach(deudorA => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${deudorA.nombre}</h3>
                         <h3>${deudorA.apellido}</h3>
                         <h3>${deudorA.montoAdeudado}</h3>`
        deudoresAContainer.appendChild(card)  

        localStorage.setItem("DeudoresALista", JSON.stringify(listaDAStorage));

    })
}
renderizarDeudoresA(listaDAStorage)


let eliminarDeudoresContainer = document.getElementById("eliminar-deudores")

    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "ELIMINAR LISTA"
    botonEliminar.classList.add("eliminarLista")

    botonEliminar.addEventListener("click", function() {
        localStorage.removeItem("DeudoresA")
        deudoresAContainer.innerHTML = ''
        localStorage.setItem("listaNuevaDA", JSON.stringify(listaDAStorage))
})
eliminarDeudoresContainer.appendChild(botonEliminar)

