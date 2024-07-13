
const clientes = [
    { id: 1, nombre: "Mariano", apellido: "Moreno", montoAdeudado: 25000 },
    { id: 2, nombre: "Sebastian", apellido: "Yatra", montoAdeudado: 0 },
    { id: 3, nombre: "Belen", apellido: "de Luis", montoAdeudado: 10000 },
    { id: 4, nombre: "Pablo", apellido: "Rivas", montoAdeudado: 15000 },
    { id: 5, nombre: "Esteban", apellido: "Chiche", montoAdeudado: 5000 },
    { id: 6, nombre: "Maluma", apellido: "Baby", montoAdeudado: 250000 },
    { id: 7, nombre: "Horacio", apellido: "Larreta", montoAdeudado: 0 },
    { id: 8, nombre: "Roberto", apellido: "Funes", montoAdeudado: 2500 },
    { id: 9, nombre: "Alfredo", apellido: "Casero", montoAdeudado: 0 },
    { id: 10, nombre: "Norberto", apellido: "Mimio", montoAdeudado: 225000 }
];

renderizarClientes(clientes)


function renderizarClientes(clientesArrays) {
    const clientesContainer = document.getElementById("clientes-container")
    clientesContainer.innerHTML = ''

    clientesArrays.forEach(cliente => {
        const card = document.createElement("div");
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
        agregarListaDeudores()
}

let listaDeudores = []

function agregarListaDeudores() {
    const agregarBotones = document.querySelectorAll(".agregarDeudor")
    agregarBotones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const clienteId = e.currentTarget.getAttribute('data-id')
            const clienteSeleccionado = clientes.find(cliente => cliente.id == clienteId)

            if (clienteSeleccionado) {
                if (!listaDeudores.some(deudor => deudor.id === clienteSeleccionado.id)) {
                    listaDeudores.push(clienteSeleccionado)
                    console.log(listaDeudores)
                    localStorage.setItem("listaD", JSON.stringify(listaDeudores))
                    renderizarDeudores(listaDeudores);
                } else {
                    console.log("El cliente ya está en la lista de deudores.")
                }
            } else {
                console.log("Cliente no encontrado.")
            }
        });
    });
}


