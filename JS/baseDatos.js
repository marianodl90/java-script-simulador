fetch("../baseDatos/data.JSON")
.then(respuestas => respuestas.json())
.then(data => console.log(data))