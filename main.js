$(document).ready(function () {
    // Base de datos simulada de usuarios (email y contraseña)
    let usuarios = {
        "yes300ofusa@gmail.com" : "123456",
        "usuario2@gmail.com": "password2",
        "usuario3@gmail.com": "password3",
    };

    // Ocultar secciones y mensajes de error al inicio
    $(".contenedor-principal-dos").hide();
    $(".contenedor-principal-tres").hide();
    $("#error-datos").hide();

    // Evento click del botón de inicio de sesión
    $("#boton").click(function (e) { 
        e.preventDefault();
        
         // Obtiene los valores de los campos de email y contraseña
        // trim() elimina espacios en blanco al inicio y final
        let email = $("#email").val().trim();   // Obtiene el email
        let password = $("#password").val().trim();   // Obtiene la contraseña

         // Validación de campos vacíos
        if(email === "" || password === "") {
            $("#error-datos")     // Muestra mensaje de error si algún campo está vacío
                .text("Por favor, ingrese correo y contraseña")
                .show();
            return;   // Detiene la ejecución
        }
         // Validación de credenciales
        if(usuarios[email] && usuarios[email] === password) {
             // Si las credenciales son correctas:
            $(".contenedor-principal-dos").fadeIn();  // Muestra la segunda pantalla
            $(".contenedor-principal-uno").fadeOut();  // Oculta la pantalla de login
            $("#error-datos").hide();                  // Oculta mensajes de error
        } else {    // Si las credenciales son incorrectas: muestra texto informativo
            $("#error-datos")
                .text("Email o contraseña incorrectos")
                .show();
        }
            
        $("#perfil1").click(function (e) { 
            e.preventDefault();
            $(".contenedor-principal-tres").fadeIn();   //muestra la tercera pantalla
            $(".contenedor-principal-dos").fadeOut();   //oculta la segunda pantalla
            
        });
    });


   
});
