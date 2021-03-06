
eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validarRegistro);
}


function validarRegistro(e) {
    e.preventDefault();
    
    var usuario = document.querySelector('#usuario').value,
        password = document.querySelector('#password').value,
        tipo = document.querySelector('#tipo').value;
        
        if(usuario === '' || password === ''){
            // la validación falló
            swal({
              type: 'error',
              title: 'Error!',
              text: 'Ambos campos son obligatorios!'
            })
        } else {
            
            // Ambos campos son correctos, mandar ejecutar Ajax
            
            // datos que se envian al servidor
            var datos = new FormData();
            datos.append('usuario', usuario);
            datos.append('password', password);
            datos.append('accion', tipo);
            
            // crear el llamado a ajax
            var xhr = new XMLHttpRequest();
            
            // abrir la conexión.
            xhr.open('POST', 'includes/modelos/modelo-admin.php', true);
            
            // retorno de datos
            xhr.onload = function(){
                if(this.status === 200) {
                    var respuesta = JSON.parse(xhr.responseText);
                    
                    console.log(respuesta);
                    // Si la respuesta es correcta
                    if(respuesta.respuesta === 'correcto') {
                        // si es un nuevo usuario
                        if(respuesta.tipo === 'crear') {
                            swal({
                                title: 'Usuario Creado',
                                text: 'El usuario se creó correctamente',
                                type: 'success'
                            });
                        } else if(respuesta.tipo === 'login'){
<<<<<<< HEAD
                            console.log('SSS');
                            
=======
<<<<<<< HEAD
                            console.log('SSS');
                            
=======
<<<<<<< HEAD
                            console.log('SSS');
                            
=======
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
                            swal({
                                title: 'Login Correcto',
                                text: 'Presiona OK para abrir el dashboard',
                                type: 'success'
                            })
                            .then(resultado => {
                                if(resultado.value) {
                                    window.location.href = 'Admin.php';
                                }
                            })
                        }
                    } else {
                        // Hubo un error
                        swal({
                            title: 'Error',
                            text: 'Hubo un error',
                            type: 'error'
                        })
                    }
                }
            }
            
            // Enviar la petición
            xhr.send(datos);
            
        }
}