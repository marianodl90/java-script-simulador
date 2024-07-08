
let listaDAStorage = JSON.parse(localStorage.getItem("listaNuevaDA")) || []

const nuevaListaDAContainer = document.getElementById("nuevoDeudor-container")

function agregarNuevoDeudor (id ,nombre, apellido, montoAdeudado){
    const nuevoDeudor = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    montoAdeudado: montoAdeudado
    }
    
    listaDAStorage.push(nuevoDeudor)

    // Actualizamos el localStorage
    localStorage.setItem("listaNuevaDA", JSON.stringify(listaDAStorage))

    // Llamamos a la función renderizarDeudorNuevo con toda la lista actualizada
    renderizarDeudorNuevo(listaDAStorage)
}

function renderizarDeudorNuevo (deudores){

    // Limpiamos el contenedor 
    nuevaListaDAContainer.innerHTML = ''

    deudores.forEach((deudorAg, index) => {
       const  card = document.createElement("div")
        card.innerHTML = `
                        <div>
                        <label>Id</label><br>
                        <input type="number" value="${deudorAg.id}" disabled>
                        </div>
                        <div>
                        <label>Nombre</label><br>
                        <input type="text" value="${deudorAg.nombre}" disabled>
                        </div>
                        <div>
                        <label>Apellido</label><br>
                        <input type="text" value="${deudorAg.apellido}" disabled>
                        </div>
                        <div>
                        <label>Monto Adeudado</label><br>
                        <input type="text" value="${deudorAg.montoAdeudado}" disabled>
                        </div>
                        <button class="agregarDeudor" onclick="agregarADeudores(${index})">AGREGAR</button>
                        `
    nuevaListaDAContainer.appendChild(card) 
    })
    agregarEventoEliminarDeudor()
}

function limpiarLista() {
    // Limpiamos visualización en el HTML
    nuevaListaDAContainer.innerHTML = ''

    // Vaciamos el arreglo de deudores nuevos
    listaDAStorage = []

    // Actualizamos el localStorage
    localStorage.setItem("listaNuevaDA", JSON.stringify(listaDAStorage))

    console.log("Lista de deudores nuevos limpiada.")
}

function agregarEventoEliminarDeudor() {
    const botonesEliminar = document.querySelectorAll(".eliminarDeudorNuevo")
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", function() {
            const index = boton.id;
            listaDAStorage.splice(index, 1) 
            localStorage.setItem("listaNuevaDA", JSON.stringify(listaDAStorage)) 
            renderizarDeudorNuevo(listaDAStorage) 
    })
}

renderizarDeudorNuevo(listaDAStorage);








