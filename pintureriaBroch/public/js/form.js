window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation")
    

    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombre = document.querySelector("input.name");
        if (campoNombre.value == "") {
            errores.push("El campo 'Nombre' tiene que estar completo");
        } else if (campoNombre.value.length < 3) {
            errores.push("El Nombre tiene que tener mínimamente 3 caracteres");

        }
 
        let campoUserName = document.querySelector("input.username");
        if (campoUserName.value == "") {
            errores.push("El campo 'Nombre de Usuario' tiene que estar completo");
        } else if (campoUserName.value.length < 3) {
            errores.push("El Nombre de Usuario tiene que tener mínimamente 3 caracteres");

        }
 
        let campoEmail = document.querySelector("input.email");
        if (campoEmail.value == "") {
            errores.push("El campo 'Mail' tiene que estar completo");
        }

        let campoPassword = document.querySelector("input.password");
        if (campoPassword.value == "") {
            errores.push("El campo 'Contraseña' tiene que estar completo");
        } else if (campoPassword.value.length < 8) {
            errores.push("La Contraseña tiene que tener mínimamente 8 caracteres");

        }


        if (errores.length > 0) {
            e.preventDefault();
            
        let ulErrores = document.querySelector("div.errores ul");

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+ errores[i] + "</li>"
            }
        

    }
})
});