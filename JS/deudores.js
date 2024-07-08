const deudor1 = {
    id: 1, nombre: "mariano", apellido: "moreno", montoAdeudado: 25000
}
const deudor2 = {
    id: 2,nombre: "sebastian ", apellido: "yatra", montoAdeudado: 30000
}
const deudor3 = {
    id: 3,nombre: "belen ", apellido: "de luis", montoAdeudado: 10000
}
const deudor4 = {
    id: 4,nombre: "pablo", apellido: "rivas", montoAdeudado: 15000
}
const deudor5 = {
    id: 5,nombre: "esteban", apellido: "chiche", montoAdeudado: 5000
}
const deudor6 = {
    id: 6,nombre: "maluma", apellido: "baby", montoAdeudado: 250000
}
const deudor7 = {
    id: 7,nombre: "horacio", apellido: "larreta", montoAdeudado: 125000
}
const deudor8 = {
    id: 8,nombre: "roberto", apellido: "funes", montoAdeudado: 2500
}
const deudor9 = {
    id: 9,nombre: "alfredo", apellido: "casero", montoAdeudado: 40000
}
const deudor10 = {
    id: 10,nombre: "norberto", apellido: "mimio", montoAdeudado: 225000
}

const deudores = [
    deudor1, deudor2, deudor3, deudor4, deudor5, deudor6, deudor7, deudor8, deudor9, deudor10
]

let deudoresContainer = document.getElementById("deudoresA-container")


function renderizarDeudores (deudoresArrays) {
    deudoresArrays.forEach(deudor => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${deudor.nombre}</h3>
                         <h3>${deudor.apellido}</h3>
                         <h3>${deudor.montoAdeudado}</h3>
                         <button class="agregarDeudor"  id="${deudor.id}"> AGREGAR </button>`
        deudoresContainer.appendChild(card)
    })

    agregarAListaDeudoresA()
} 

function agregarAListaDeudoresA () {
   const agregarBoton = document.querySelectorAll(".agregarDeudor")
    agregarBoton.forEach (boton =>{
        boton.onclick = (e) =>{
            const deudorID = e.currentTarget.id
            const deudorSeleccionado = deudores.find(deudor => deudor.id == deudorID)

            let listaDeudoresA = JSON.parse(localStorage.getItem("DeudoresA")) || []
            const existeDeudor = listaDeudoresA.some(deudor => deudor.id == deudorSeleccionado.id);

            if (!existeDeudor) {
                listaDeudoresA.push(deudorSeleccionado)
                console.log("Deudor agregado:", deudorSeleccionado)
                console.log("Lista de deudores actual:", listaDeudoresA)

                localStorage.setItem("DeudoresA", JSON.stringify(listaDeudoresA))

                renderizarDeudoresA(listaDeudoresA);
            } else {
                console.log("El deudor ya está en la lista.")
            }
            }
        })
}
renderizarDeudores(deudores)

