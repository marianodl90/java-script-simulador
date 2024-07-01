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

/* PRIMERO OBTENEMOS EL ELEMENTO DEL HTML DONDE VAMOS A RENDERIZAR LA LISTA DEUDORES */

let deudoresContainer = document.getElementById("deudores-container")

/* SEGUNDO, CREAMOS LA FUNCION PARA HACER EL RENDERIZADO */

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

renderizarDeudores(deudores)

let listaDeudoresA = []

function agregarAListaDeudoresA () {
    agregarBoton = document.querySelectorAll(".agregarDeudor")
    agregarBoton.forEach (boton =>{
        boton.onclick = (e) =>{
            const deudorID = e.currentTarget.id
            const deudorSeleccionado = deudores.find(deudor => deudor.id == deudorID)

            listaDeudoresA.push(deudorSeleccionado)
            console.log(listaDeudoresA)

                localStorage.setItem("DeudoresA", JSON.stringify(listaDeudoresA))
            }
        })
}        
    

