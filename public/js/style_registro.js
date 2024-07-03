function mostrarMenu() {
  const menuOpciones = document.querySelector('.opciones-menu');
  if (menuOpciones.style.display === 'none') {
    menuOpciones.style.display = 'block'; // Mostrar el menú
  } else {
    menuOpciones.style.display = 'none'; // Ocultar el menú
  }
}
  
 // Función para validar el nombre
function validaNombre() {
    const nombreInput = document.getElementById('name'); // Obtiene el elemento input
    const nombre = nombreInput.value.trim(); // Accede al valor y elimina espacios
  
    if (nombre === '' || nombre === null) {
      Swal.fire({
        text: "Debe completar el Nombre",
        icon: "warning"
      });
      nombreInput.focus(); // Coloca el cursor en el campo
      return false;
    } else {
      return true;
    }
  }
  
  
  // Función para validar el email
  function validaEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const arrobaInput = email.indexOf('@');
    const patronEmail = email.toLowerCase().slice(-4);
   
    if (email.indexOf('@@') !== -1 || email.match(/@.*@/)) { /*@: Coincide con un símbolo "@" literal.
    .*: Coincide con cualquier secuencia de caracteres (cero o más veces). Esto captura el contenido entre los símbolos "@".
    @: Coincide con otro símbolo "@" literal.*/
        Swal.fire({
          text: "El email no puede contener caracteres duplicados '@'.",
          icon: "warning"
        });
        emailInput.focus();
        return false;
  } else if (email.includes(' ')){
    Swal.fire({
        text: "El email no puede tener espacios.",
        icon: "warning"
      });
      emailInput.focus();
      return false;
  } else if (email === '') {
      Swal.fire({
        text: "Debe completar el Email",
        icon: "warning"
      });
      emailInput.focus();
      return false;
    } else if (arrobaInput === -1 || arrobaInput === 0) {
      Swal.fire({
        text: "El email debe contener un @",
        icon: "warning"
      });
      emailInput.focus();
      return false;
    } else if (patronEmail !== ".com") {
      Swal.fire({
        text: "El email debe terminar en .com",
        icon: "warning"
      });
      emailInput.focus();
      return false;
    } else {
      return true;
    }
  }

  function validaContrasena() {
    const contrasena1Input = document.getElementById('password1'); // Obtiene el elemento input
    const contrasena2Input = document.getElementById('password2'); // Obtiene el elemento input
    const contrasena1 = contrasena1Input.value.trim(); // Accede al valor y elimina espacios
    const contrasena2 = contrasena2Input.value.trim(); // Accede al valor y elimina espacios
  
    if (contrasena1 === '' || contrasena1 === null) {
      Swal.fire({
        text: "Debe completar la Contraseña",
        icon: "warning"
      });
      contrasena1Input.focus(); // Coloca el cursor en el campo
      return false;
    } else if (contrasena1.length < 8 || contrasena1.length > 8) {
      Swal.fire({
        text: "La contraseña debe tener 8 caracteres",
        icon: "warning",
      });
      contrasena1Input.focus(); // Coloca el cursor en el campo
      return false;
    } else if (contrasena1 !== contrasena2) {
            Swal.fire({
              text: "Las contraseñas deben ser iguales",
              icon: "warning"
            });
            contrasena2Input.focus(); // Coloca el cursor en el campo
            return false;
        } else {
          return true;
        }
      }

  // Función para validar y enviar el formulario
  function validaciones() {
    const nombreInput = document.getElementById('name'); // Obtiene el elemento input
    const nombre = nombreInput.value; // Accede al valor y elimina espacios
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const contrasena1Input = document.getElementById('password1'); // Obtiene el elemento input
    const contrasena1 = contrasena1Input.value.trim(); // Accede al valor y elimina espacios
    const direccion = "";
    const apellido = "";
    const telefono = "";
    const recordatorio_contraseña = "";
  
  
    if (validaNombre() && validaEmail() && validaContrasena()){
      // Todos los campos están llenos, se procede con el envío del formulario
      guardarDatos(nombre, email, contrasena1);
      //llamar JWT
      postPersona = async () => {
        //const location = window.location.hostname;
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre,apellido,direccion,telefono,email})
         };
        try {
            const fetchResponse = await fetch(`/personas`, settings);
            const persona = await fetchResponse.json();
            const id = persona.id_persona;
            ///////////////////////////////////////////////
            postUsuario = async () => {
                const settings = {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id, email, contrasena1, recordatorio_contraseña})
                };
                try {
                    const fetchResponse = await fetch(`/usuarios`, settings);
                    const usuario = await fetchResponse.json();
                    console.log(usuario);
                    return usuario;
                } catch (ec) {
                    console.log("catch: " + ec) ;
                    return ec;
                }    
              };
              try{
                    let contacto = postUsuario();
                    Swal.fire({
                      title: "¡Gracias!",
                      text: "Ya estás registrado.",
                      icon: "success",
                      iconColor: '#7B68EE',
                      confirmButtonText: '<a href="index.html">OK</a>',
                      confirmButtonColor: '#7FFFD4'
                    });
                    formulario.reset(); // Limpia el formulario después del envío
                  } catch (ef) {
                      console.log("catch: " + ef) ;
                      return ef;
                  };
             ///////////////////////////////////////////////          
            return persona;
        } catch (e) {
            console.log("catch: " + e) ;
            return e;
        } ;   
      };
  
      let persona = postPersona();
  
      /*Swal.fire({
        title: "¡Gracias!",
        text: "Ya estás registrado.",
        icon: "success",
        iconColor: '#7B68EE',
        confirmButtonText: '<a href="index.html">OK</a>',
        confirmButtonColor: '#7FFFD4'
      });
      formulario.reset(); // Limpia el formulario después del envío*/
    } else {
      return false; // Si hay un error de validación, evita el envío del formulario
    }
  }
  
  // Función para guardar los datos del formulario
  function guardarDatos(nombre, email, contrasena1) {
    const datos = [
      nombre,
      email,
      contrasena1,
    ];
    console.log(datos); // Imprime los datos en la consola
  }
  
  // Detector de eventos para el botón de envío del formulario
  const botonEnviar = formulario.querySelector('button[type="submit"]');
  botonEnviar.addEventListener('click', (evento) => {
  evento.preventDefault(); // Evita el envío predeterminado del formulario
});

function irAInicio() {
  window.location.href = "index.html";
} 
