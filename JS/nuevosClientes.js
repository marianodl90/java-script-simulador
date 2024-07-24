
const clientesNContainer = document.getElementById("nuevosClientes-container")

const obtenerUsuarios = async () => {
    let URL = "https://jsonplaceholder.typicode.com/users"

    try {
        let solicitud = await fetch(URL)
        let respuesta = await solicitud.json()

        clientesNContainer.innerHTML = ""

        respuesta.forEach(usuario => {
            const card = document.createElement("div")
            card.innerHTML = `
            <div>
            <h2>Nombre: ${usuario.name}</h2>
            </div>
            <div>
            <h2>Apellido: ${usuario.username}</h2>
            </div>
                <br>`
            clientesNContainer.appendChild(card)
        });

        const totalClientes = document.createElement("div")
        totalClientes.innerHTML = `
        <div id="tres">
        <h2>TOTAL DE CLIENTES NUEVOS: ${respuesta.length}</h2>
        </div>`
        clientesNContainer.appendChild(totalClientes)

    } catch (error) {
        console.error("Error al obtener usuarios:", error)


        Swal.fire({
            title: 'Error!',
            text: 'No se puede leer la lista de clientes nuevos',
            icon: 'error',
            confirmButtonText: 'Entendido'
        })
    }
}

obtenerUsuarios()
