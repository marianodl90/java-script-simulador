const deudor1 = {
    nombre: "Mariano", apellido: "Moreno", moroso: true, montoAdeudado: 25000
}
const deudor2 = {
    nombre: "Sebastian ", apellido: "Yatra", moroso: false, montoAdeudado: 30000
}
const deudor3 = {
    nombre: "Belen ", apellido: "De Luis", moroso: false, montoAdeudado: 10000
}
const deudor4 = {
    nombre: "Pablo", apellido: "Rivas", moroso: true, montoAdeudado: 15000
}
const deudor5 = {
    nombre: "Esteban", apellido: "Chiche", moroso: false, montoAdeudado: 5000
}
const deudor6 = {
    nombre: "Maluma", apellido: "Baby", moroso: false, montoAdeudado: 250000
}
const deudor7 = {
    nombre: "Horacio", apellido: "Larreta", moroso: true, montoAdeudado: 125000
}
const deudor8 = {
    nombre: "Roberto", apellido: "Funes", moroso: true, montoAdeudado: 2500
}
const deudor9 = {
    nombre: "Alfredo", apellido: "Casero", moroso: true, montoAdeudado: 40000
}
const deudor10 = {
    nombre: "Norberto", apellido: "Mimio", moroso: true, montoAdeudado: 225000
}

const deudores = [
    deudor1, deudor2, deudor3, deudor4, deudor5, deudor6, deudor7, deudor8, deudor9, deudor10
]

alert("BIENVENIDO AL SIMULADOR DE DEUDORES DE NUESTRA EMPRESA, PARA UNA CORRECTA ATENCION, SIGA LOS PASOS COMO SE INDICAN")
let opcion = prompt("¿Desea ver lista de Deudores? Responder SI/NO")
if (opcion == "SI") {
    console.log("LISTA DE DEUDORES")
    console.table(deudores)
} else {
    alert("CONTINUAR")
}

let opcion2 = prompt("¿Desea buscar un deudor en particular? Responder SI/NO")
if (opcion2 == "SI") {

    let nombreDeudor = prompt("Ingrese nombre del deudor en minusculas con la primer letra en mayusculas")
    let apellidoDeudor = prompt("Ingrese apellido del deudor en minusculas con la primer letra en mayusculas")

    function buscarDeudor() {
        for (deudor of deudores) {
            if (deudor.nombre == nombreDeudor && deudor.apellido == apellidoDeudor) {
                console.warn(deudor.nombre + " " + deudor.apellido + " USTED POSEE UNA DEUDA DE " + deudor.montoAdeudado + " pesos")
                break
            } else {
                console.log(nombreDeudor + " " + apellidoDeudor + " usted no se encuentra en la lista de deudores")
                break
            }
        }
    }
    buscarDeudor()
} else {
    alert("CONTINUAR")
}

let opcion3 = prompt("¿Desea agregar un nuevo deudor al listado? Responder SI/NO")
if (opcion3 == "SI") {

    function agregarDeudor() {
        let nombre = prompt("Ingrese nombre de nuevo deudor")
        let apellido = prompt("Ingrese apellido de nuevo deudor")
        let moroso = prompt("Ingrese si es moroso ingresando true o false")
        let montoAdeudado = prompt("Ingrese monto adeudado")

        const nuevoDeudor = {
            nombre: nombre,
            apellido: apellido,
            moroso: moroso,
            montoAdeudado: montoAdeudado
        }
        deudores.push(nuevoDeudor)
    }
    agregarDeudor()
    console.log("LISTA CON NUEVO DEUDOR AGREGADO")
    console.table(deudores)
} else {
    alert("CONTINUAR")
}

let opcion4 = prompt("¿Desea ver quienes son deudores morosos? RESPONDER SI/NO")

if(opcion4 == "SI"){
    function mostrarDeudoresMorosos(deudores) {
        let i = 0;
        while (i < deudores.length) {
            const deudor = deudores[i];
            if (deudor.moroso) {
                console.log(`Nombre: ${deudor.nombre} ${deudor.apellido}, Monto Adeudado: ${deudor.montoAdeudado}`);
            }
            i++;
        }
    } 
mostrarDeudoresMorosos(deudores)
}else{
    console.log("QUE TENGAS EXCELENTE DIA")
}

               
            
        
     
  



