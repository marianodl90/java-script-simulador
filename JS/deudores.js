let listaDeudores = localStorage.getItem("listaD")
listaDeudores = JSON.parse(listaDeudores) || []

const deudoresContenedor = document.getElementById("deudores-contenedor")

function renderizarDeudores(arrayD) {
    deudoresContenedor.innerHTML = ''

    arrayD.forEach(deudor => {
        const card = document.createElement("div")
        card.innerHTML = `
            <h3>Nombre: ${deudor.nombre}</h3>
            <h3>Apellido: ${deudor.apellido}</h3>
            <h3>Monto Adeudado: ${deudor.montoAdeudado}</h3>
            <button class="eliminarDeudor" id="${deudor.id}">Eliminar de LISTA DE DEUDORES</button>

            <br><br>
        `
        deudoresContenedor.appendChild(card)
    })

    quitardeudor() 
}

function quitardeudor(){
    const agregarBoton = document.querySelectorAll(".eliminarDeudor")
    agregarBoton.forEach(boton =>{
        boton.onclick = (e) =>{
            const clienteId = e.currentTarget.id
            const aborrar = listaDeudores.findIndex(deudor => deudor.id == clienteId) 
            if (aborrar !== -1) {
                listaDeudores.splice(aborrar, 1)
                localStorage.setItem("listaD", JSON.stringify(listaDeudores))
                renderizarDeudores(listaDeudores) 
            }
        }
    })
}

renderizarDeudores(listaDeudores)

function montoTotalDeuda (arrayDeudores){
    let total = arrayDeudores.reduce((contador, deudor) => contador + deudor.montoAdeudado, 0)
    
    console.log("El monto total de la deuda asciende a $" + total)
    const card2 = document.createElement("div")
    card2.innerHTML = `
                    <h2>El monto total de la deuda asciende a ${total} pesos</h2>`

                    deudoresContenedor.appendChild(card2)

}
montoTotalDeuda(listaDeudores)

