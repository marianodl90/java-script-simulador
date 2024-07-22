let nuevaListaDeudores = localStorage.getItem("listaDN")
nuevaListaDeudores = JSON.parse(nuevaListaDeudores) || []

const nuevosDeudoresContenedor = document.getElementById("nuevosDeudores-contenedor")

function renderizarDeudores(arrayD) {

    arrayD.forEach(deudorN => {
        const card = document.createElement("div")
        card.innerHTML = `
            <h3>Nombre: ${deudorN.nombre}</h3>
            <h3>Apellido: ${deudorN.apellido}</h3>
            <h3>Monto Adeudado: ${deudorN.montoAdeudado}</h3>
            <button class="eliminarDeudorN" id="${deudorN.id}">Eliminar de LISTA DE DEUDORES</button>

            <br><br>
        `
        nuevosDeudoresContenedor.appendChild(card)
    })

    quitardeudor() 
}

function quitardeudor(){
    const agregarBoton = document.querySelectorAll(".eliminarDeudorN")
    agregarBoton.forEach(boton =>{
        boton.onclick = (e) =>{
            const nClienteId = e.currentTarget.id
            const aborrar = nuevaListaDeudores.findIndex(deudorN => deudorN.id == nClienteId) 
            if (aborrar !== -1) {
                nuevaListaDeudores.splice(aborrar, 1)                
                localStorage.setItem("listaD", JSON.stringify(nuevaListaDeudores))
                renderizarDeudores(nuevaListaDeudores) 
            }
        }
    })
}

renderizarDeudores(nuevaListaDeudores)