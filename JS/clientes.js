const clientesContainer = document.getElementById("clientes-container")

fetch("../baseDatos/data.JSON")
.then(respuesta => respuesta.json())

.then(data => {
    try {
        data.forEach(cliente => {
            const card = document.createElement("div")
            card.innerHTML = `
                <h3>Nombre: ${cliente.nombre}</h3>
                <h3>Apellido: ${cliente.apellido}</h3>
                <h3>Monto Adeudado: ${cliente.montoAdeudado}</h3>
                <h3>ID: ${cliente.id}</h3>
                <button class="agregarDeudor" data-id="${cliente.id}">Agregar a LISTA DE DEUDORES</button>
                <br><br>
            `
            clientesContainer.appendChild(card)
        })
        agregarListaDeudores(data)
    } catch (error) {
        console.error('Error al procesar los datos:', error)
    }
})
.catch(error => {
    console.error('Error en la petición fetch:', error)
})


let listaDeudores = []

function agregarListaDeudores(data) {
    const agregarBotones = document.querySelectorAll(".agregarDeudor")
    agregarBotones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const clienteId = e.currentTarget.getAttribute('data-id')
            const clienteSeleccionado = data.find(cliente => cliente.id == clienteId)

            if (clienteSeleccionado) {
                if (!listaDeudores.some(deudor => deudor.id === clienteSeleccionado.id)) {
                    listaDeudores.push(clienteSeleccionado)
                    console.log(listaDeudores)
                    localStorage.setItem("listaD", JSON.stringify(listaDeudores))
                    renderizarDeudores(listaDeudores)
                } else {
                    console.log("El cliente ya está en la lista de deudores.")
                }
            } else {
                console.log("Cliente no encontrado.")
            }
        });
    });
}





