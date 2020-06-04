eventListeners();
// lista de proyectos
var listaProyectos = document.querySelector('ul#proyectos');

function eventListeners() {
    // Boton para una nueva tarea
    if(document.querySelector('.nuevo-evento') !== null ) {
        document.querySelector('.nuevo-evento').addEventListener('click', agregarEvento);
    }
    
    // Botones para las acciones de las tareas
    document.querySelector('.listado-pendientes').addEventListener('click', accionesTareas);
}

function agregarEvento(e) {
    e.preventDefault();
    
    var nombre = document.querySelector('.nombre-evento').value;
    var fecha = document.querySelector('.fecha-evento').value;
    var hora = document.querySelector('.hora-evento').value;
    var categoria = document.querySelector('.cat').value;
    //var nombre = document.querySelector('.').value;
    //var nombre = document.querySelector('.').value;

    // Validar que el campo tenga algo escrito
    
    if(nombre === '') {
        swal({
            title: 'Error',
            text: 'Una tarea no puede ir vacia',
            type:'error'
        })
    } else {
        // la tarea tiene algo, insertar en PHP
        
        // crear llamado a ajax
        var xhr = new XMLHttpRequest();
        
        // crear formdata
        var datos = new FormData();
        datos.append('nombre_evento',nombre );
        datos.append('fecha_evento',fecha );
        datos.append('hora_evento',hora );
        datos.append('id_cat_evento',categoria );
        datos.append('id_inv', document.querySelector('#invitado_id').value);
        datos.append('accion', 'crear');
        
        // Abrir la conexion
        xhr.open('POST', 'includes/modelos/modelo-tareas.php', true);
        
        
        // ejecutarlo y respuesta
        xhr.onload = function() {
            if(this.status === 200) {
                // todo correcto
                var respuesta = JSON.parse(xhr.responseText);
                // asignar valores
                
                var resultado = respuesta.respuesta,
                    tipo = respuesta.tipo;
                
                if(resultado === 'correcto') {
                    // se agregó correctamente
                    if(tipo === 'crear') {
                        // lanzar la alerta
                        swal({
                          type: 'success',
                          title: 'Tarea Creada',
                          text: 'El Evento: ' + nombre + ' se creó correctamente'
                        });
                        
                        // seleccionar el parrafo con la lista vacia
                        /*
                        var parrafoListaVacia = document.querySelectorAll('.lista-vacia');
                        if(parrafoListaVacia.length > 0 ) {
                            document.querySelector('.lista-vacia').remove();
                        }
                        
                        // construir el template
                       var nuevaTarea = document.createElement('li');
                       
                       // agregamos el ID
                       nuevaTarea.id = 'tarea:'+id_insertado;
                       
                       // agregar la clase tarea
                       nuevaTarea.classList.add('tarea');
                       
                       // construir el html
                       nuevaTarea.innerHTML = `
                            <p>${tarea}</p>
                            <div class="acciones">
                                <i class="far fa-check-circle"></i>
                                <i class="fas fa-trash"></i>
                            </div>
                       `;
                       
                       // agregarlo al HTML
                       var listado = document.querySelector('.listado-pendientes ul');
                       listado.appendChild(nuevaTarea);
                       
                       // Limpiar el formulario
                       document.querySelector('.agregar-tarea').reset();
                       */
                    }
                } else {
                    // hubo un error
                    swal({
                      type: 'error',
                      title: 'Error!',
                      text: 'Hubo un error'
                    })
                }
            }
        }
        // Enviar la consulta
        xhr.send(datos);
    }
}

// las elimina

function accionesTareas(e) {
    e.preventDefault();
       
    if(e.target.classList.contains('fa-trash')) {
        swal({
          title: 'Seguro(a)?',
          text: "Esta acción no se puede deshacer",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borrar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
              
             var eventoEliminar = e.target.parentElement.parentElement;
            // Borrar de la BD
            eliminarEventoBD(eventoEliminar);
            
            // Borrar del HTML
            eventoEliminar.remove();
              
            swal(
              'Eliminado!',
              'La tarea fue eliminada!.',
              'success'
            )
          }
        })
    } 
}


// Elimina las tareas de la base de datos
function eliminarEventoBD(evento) {
    var idEvento = evento.id.split(':');

    // crear llamado ajax
    var xhr = new XMLHttpRequest();

    // informacion
    console.log(idEvento);
    var datos = new FormData();
    datos.append('id', idEvento[1]);
    datos.append('accion', 'eliminar');

    // abrir la conexion
    xhr.open('POST', 'includes/modelos/modelo-tareas.php', true);
    
    // on load
    xhr.onload = function() {
        if(this.status === 200) {
            //console.log(JSON.parse(xhr.responseText));

            // Comprobar que haya Eventos restantes
            var listaEventosRestantes = document.querySelectorAll('li.evento');
            if(listaEventosRestantes.length === 0 ) {
                document.querySelector('.listado-pendientes ul').innerHTML = "<p class='lista-vacia'>No hay Eventos en este proyecto</p>";
            }
        }
    }
    // enviar la petición
    xhr.send(datos);
}