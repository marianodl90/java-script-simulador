const deudor1 = {
    nombre: "mariano", apellido: "moreno", moroso: true, montoAdeudado: 25000
}
const deudor2 = {
    nombre: "sebastian ", apellido: "yatra", moroso: false, montoAdeudado: 30000
}
const deudor3 = {
    nombre: "belen ", apellido: "de luis", moroso: false, montoAdeudado: 10000
}
const deudor4 = {
    nombre: "pablo", apellido: "rivas", moroso: true, montoAdeudado: 15000
}
const deudor5 = {
    nombre: "esteban", apellido: "chiche", moroso: false, montoAdeudado: 5000
}
const deudor6 = {
    nombre: "maluma", apellido: "baby", moroso: false, montoAdeudado: 250000
}
const deudor7 = {
    nombre: "horacio", apellido: "larreta", moroso: true, montoAdeudado: 125000
}
const deudor8 = {
    nombre: "roberto", apellido: "funes", moroso: true, montoAdeudado: 2500
}
const deudor9 = {
    nombre: "alfredo", apellido: "casero", moroso: true, montoAdeudado: 40000
}
const deudor10 = {
    nombre: "norberto", apellido: "mimio", moroso: true, montoAdeudado: 225000
}

const deudores = [
    deudor1, deudor2, deudor3, deudor4, deudor5, deudor6, deudor7, deudor8, deudor9, deudor10
]

alert("BIENVENIDO AL SIMULADOR DE DEUDORES DE NUESTRA EMPRESA")

let menu = parseInt(prompt("ELIJA LA OPCION DESEADA: 1: VER la lista de deudores 2: BUSCAR un deudor especifico 3: AGREGAR un nuevo deudor al listado 4: VER quienes son deudores incobrables 5: SALIR"))

while (menu !== 5){
    switch(menu){

        case 1:
            console.log("LISTA DE DEUDORES")
            console.table(deudores)
            break

        case 2:
            let nombreDeudor = prompt("Ingrese nombre del deudor").toLowerCase
            let apellidoDeudor = prompt("Ingrese apellido del deudor").toLowerCase

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
            break
            
        case 3:
            function agregarDeudor() {
                let nombre = prompt("Ingrese nombre de nuevo deudor").toLowerCase
                let apellido = prompt("Ingrese apellido de nuevo deudor").toLowerCase
                let moroso = prompt("Ingrese si es deudor incobrable ingresando true o false").toLowerCase
                let montoAdeudado = prompt("Ingrese monto adeudado").toLowerCase
        
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
            break 

        case 4:
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
            break 

        case 5:
            alert ("QUE TENGA UN EXCELENTE DIA")
            break

        default:
            alert("OPCION INCORRECTA")
           break
    }   
    menu = parseInt(prompt("ELIJA LA OPCION DESEADA: 1: VER la lista de deudores 2: BUSCAR un deudor especifico 3: AGREGAR un nuevo deudor al listado 4: VER quienes son deudores incobrables 5: SALIR"))
}


               
            
        
     
  



