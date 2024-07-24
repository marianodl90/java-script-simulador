
const clientesContainer = document.getElementById("clientes-container")




fetch("../baseDatos/data.JSON")
    .then(respuesta => respuesta.json())


    .then(data => {
        try {
            data.forEach(cliente => {
                const card = document.createElement("div")
                card.innerHTML = `
                
                <div>
                <h3>Nombre: ${cliente.nombre}</h3>
                </div>
                <div>
                <h3>Apellido: ${cliente.apellido}</h3>
                </div>
                <div>
                <h3>Monto Adeudado: $${cliente.montoAdeudado}</h3>
                </div>
                <div>
                <button class="agregarDeudor" data-id="${cliente.id}">Agregar a LISTA DE DEUDORES</button>
                </div>
                <br><br>
            `
                clientesContainer.appendChild(card)
            })
            agregarListaDeudores(data)


            totalClientes(data)


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
                    Toastify({
                        text: "El Cliente Ya esta agregado a lista de Deudores",
                        duration: 1500,
                        close: false,
                        gravity: "top",
                        position: "left",
                        stopOnFocus: true,
                        style: {
                            background: "linear-gradient(to right, #af6b36, grey)",
                        },
                        onClick: function () { }
                    })
                        .showToast()
                }
            } else {
                console.log("Cliente no encontrado.")

            }
        })
    })
}


function totalClientes(arrayClientes) {
    let total = arrayClientes.length

    console.log("El total de clientes es de " + total)
    const card2 = document.createElement("div")
    card2.innerHTML = `
                    <div id="uno">
                    <h2>Total de clientes: ${total}</h2>
                    </div>`
    clientesContainer.appendChild(card2)

}






