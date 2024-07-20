

const obtenerUsuarios = async () => {
    let URL = ("https://jsonplaceholder.typicode.com/users")
    const usuarioError = "<span> No se pueden cargar los usuarios, intente mas tarde"
    let renderizado =``

    try {
        let solicitud = await fetch(URL)
        let respuesta = await solicitud.json()

        respuesta.forEach(usuario => {
          
            renderizado += `<h2>Nombre: ${usuario.name}</h2>
                           <h3>Apellido: ${usuario.username}</h3>
                           <h3>ID: ${usuario.id}</h3><br>`
                           
                           
        })
        renderizado += `<h2>El total de clientes nuevos es: ${respuesta.length}</h2>`
        
    } catch (error) {
        console.log("error detectado")
        renderizado = usuarioError
        
    } finally{
        document.body.innerHTML = renderizado
    }
}

obtenerUsuarios()



