<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
eventListeners();
// lista de proyectos
var listaProyectos = document.querySelector('ul#proyectos');

function eventListeners() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
    // Boton para una nueva tarea
    if(document.querySelector('.nuevo-evento') !== null ) {
        document.querySelector('.nuevo-evento').addEventListener('click', agregarEvento);
    }
    
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
    // boton para crear proyecto
    document.querySelector('.crear-proyecto a').addEventListener('click', nuevoProyecto);
    
    
    // Boton para una nueva tarea
    if(document.querySelector('.nueva-tarea') !== null ) {
        document.querySelector('.nueva-tarea').addEventListener('click', agregarTarea);
    }
    
    
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
    // Botones para las acciones de las tareas
    document.querySelector('.listado-pendientes').addEventListener('click', accionesTareas);
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
function agregarEvento(e) {
    e.preventDefault();
    
    var nombre = document.querySelector('.nombre-evento').value;
    var fecha = document.querySelector('.fecha-evento').value;
    var hora = document.querySelector('.hora-evento').value;
    var categoria = document.querySelector('.cat').value;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c

    // Validar que el campo tenga algo escrito
    
    if(nombre === ''||fecha === ''||hora === '') {
        swal({
            title: 'Error',
            text: 'Todos los campos son OBLIGATORIOS',
<<<<<<< HEAD
=======
=======
    //var nombre = document.querySelector('.').value;
    //var nombre = document.querySelector('.').value;

    // Validar que el campo tenga algo escrito
    
    if(nombre === '') {
=======
function nuevoProyecto(e) {
    e.preventDefault();

var listaProyectos = document.querySelector('ul#proyectos');
    // Crea un <input> para el nombre del nuevo proyecto
    var nuevoProyecto = document.createElement('li');
    nuevoProyecto.innerHTML = '<input type="text" id="nuevo-proyecto">';
    listaProyectos.appendChild(nuevoProyecto);
    
    // seleccionar el ID con el nuevoProyecto
    var inputNuevoProyecto = document.querySelector('#nuevo-proyecto');
    
    // al presionar enter crear el proyecto
    
    inputNuevoProyecto.addEventListener('keypress', function(e) {
        var tecla = e.which || e.keyCode;
        
        if(tecla === 13) {
            guardarProyectoDB(inputNuevoProyecto.value);
            listaProyectos.removeChild(nuevoProyecto);
        }
    });
}



function guardarProyectoDB(nombreProyecto) {
    // Crear llamado ajax
    var xhr = new XMLHttpRequest();
    
    // enviar datos por formdata
    var datos = new FormData();
    datos.append('proyecto', nombreProyecto);
    datos.append('accion', 'crear');
    
    // Abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-proyecto.php', true);
    
    // En la carga
    xhr.onload = function() {
        if(this.status === 200) {
            // obtener datos de la respuesta
            var respuesta = JSON.parse(xhr.responseText);
            var proyecto = respuesta.nombre_proyecto,
                id_proyecto = respuesta.id_insertado,
                tipo = respuesta.tipo,
                resultado = respuesta.respuesta;
                
            // Comprobar la inserción
            if(resultado === 'correcto') {
                // fue exitoso
                if(tipo === 'crear') {
                    // Se creo un nuevo proyecto
                    // inyectar en el HTML
                    var nuevoProyecto = document.createElement('li');
                    nuevoProyecto.innerHTML = `
                        <a href="index.php?id_proyecto=${id_proyecto}" id="proyecto:${id_proyecto}">
                            ${proyecto}
                        </a>
                    `;
                    // agregar al html
                    listaProyectos.appendChild(nuevoProyecto);
                    
                    // enviar alerta
                    swal({
                        title: 'Proyecto Creado',
                        text: 'El proyecto: ' + proyecto + ' se creó correctamente',
                        type: 'success'
                    })
                    .then(resultado => {
                        // redireccionar a la nueva URL
                        if(resultado.value) {
                            window.location.href = 'index.php?id_proyecto=' + id_proyecto;
                        }
                    })
                    
                    
                } else {
                    // Se actualizo o se elimino
                }
            } else {
                // hubo un error
                swal({
                  type: 'error',
                  title: 'Error!',
                  text: 'Hubo un error!'
                })
            }
        }
    }
    
    // Enviar el Request
    xhr.send(datos);
    
}


// agregar una nueva tarea al proyecto actual

function agregarTarea(e) {
    e.preventDefault();
    
    var nombreTarea = document.querySelector('.nombre-tarea').value;
    // Validar que el campo tenga algo escrito
    
    if(nombreTarea === '') {
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
        swal({
            title: 'Error',
            text: 'Una tarea no puede ir vacia',
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
            type:'error'
        })
    } else {
        // la tarea tiene algo, insertar en PHP
        
<<<<<<< HEAD
        // crear formdata
        var datos = new FormData();
=======
<<<<<<< HEAD
        // crear formdata
        var datos = new FormData();
=======
        // crear llamado a ajax
        var xhr = new XMLHttpRequest();
        
        // crear formdata
        var datos = new FormData();
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
        datos.append('nombre_evento',nombre );
        datos.append('fecha_evento',fecha );
        datos.append('hora_evento',hora );
        datos.append('id_cat_evento',categoria );
        datos.append('id_inv', document.querySelector('#invitado_id').value);
        datos.append('accion', 'crear');
        
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
        // crear llamado a ajax
        var xhr = new XMLHttpRequest();
        
        // Abrir la conexion
        xhr.open('POST', 'includes/modelos/modelo-tareas.php', true);
<<<<<<< HEAD
=======
=======
        // Abrir la conexion
        xhr.open('POST', 'includes/modelos/modelo-tareas.php', true);
=======
        datos.append('tarea',nombreTarea );
        datos.append('accion', 'crear');
        datos.append('id_proyecto', document.querySelector('#id_proyecto').value );
        
        // Abrir la conexion
        xhr.open('POST', 'inc/modelos/modelo-tareas.php', true);
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
        
        
        // ejecutarlo y respuesta
        xhr.onload = function() {
            if(this.status === 200) {
                // todo correcto
                var respuesta = JSON.parse(xhr.responseText);
                // asignar valores
                
                var resultado = respuesta.respuesta,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                    tarea = respuesta.tarea,
                    id_insertado = respuesta.id_insertado,
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
                    tipo = respuesta.tipo;
                
                if(resultado === 'correcto') {
                    // se agregó correctamente
                    if(tipo === 'crear') {
                        // lanzar la alerta
                        swal({
                          type: 'success',
                          title: 'Tarea Creada',
<<<<<<< HEAD
                          text: 'El Evento: ' + nombre + ' se creó correctamente'
                        });
=======
<<<<<<< HEAD
                          text: 'El Evento: ' + nombre + ' se creó correctamente'
                        });
=======
<<<<<<< HEAD
                          text: 'El Evento: ' + nombre + ' se creó correctamente'
                        });
                        
                        // seleccionar el parrafo con la lista vacia
                        /*
=======
                          text: 'La tarea: ' + tarea + ' se creó correctamente'
                        });
                        
                        // seleccionar el parrafo con la lista vacia
                        
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
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
<<<<<<< HEAD
                       */
=======
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
// las elimina

function accionesTareas(e) {
    e.preventDefault();
       
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
// Cambia el estado de las tareas o las elimina

function accionesTareas(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('fa-check-circle')) {
        if(e.target.classList.contains('completo')) {
            e.target.classList.remove('completo');
            cambiarEstadoTarea(e.target, 0);
        } else {
            e.target.classList.add('completo');
            cambiarEstadoTarea(e.target, 1);
        }
    }
    
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
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
              
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
             var eventoEliminar = e.target.parentElement.parentElement;
            // Borrar de la BD
            eliminarEventoBD(eventoEliminar);
            
            // Borrar del HTML
            eventoEliminar.remove();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
             var tareaEliminar = e.target.parentElement.parentElement;
            // Borrar de la BD
            eliminarTareaBD(tareaEliminar);
            
            // Borrar del HTML
            tareaEliminar.remove();
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
              
            swal(
              'Eliminado!',
              'La tarea fue eliminada!.',
              'success'
            )
          }
        })
    } 
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c

// Elimina las tareas de la base de datos
function eliminarEventoBD(evento) {
    var idEvento = evento.id.split(':');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
// Completa o descompleta una tarea
function cambiarEstadoTarea(tarea, estado) {
    var idTarea = tarea.parentElement.parentElement.id.split(':');
    
    // crear llamado ajax
    var xhr = new XMLHttpRequest();
    
    // informacion
    var datos = new FormData();
    datos.append('id', idTarea[1]);
    datos.append('accion', 'actualizar');
    datos.append('estado', estado);
    
    // abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-tareas.php', true);
    
    // on load
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            

        }
    }
    // enviar la petición
    xhr.send(datos);
}

// Elimina las tareas de la base de datos
function eliminarTareaBD(tarea) {
    var idTarea = tarea.id.split(':');
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c

    // crear llamado ajax
    var xhr = new XMLHttpRequest();

    // informacion
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    console.log(idEvento);
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
    var datos = new FormData();
    datos.append('id', idTarea[1]);
    datos.append('accion', 'eliminar');

    // abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-tareas.php', true);

    // on load
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            
            // Comprobar que haya tareas restantes
            var listaTareasRestantes = document.querySelectorAll('li.tarea');
            if(listaTareasRestantes.length === 0 ) {
                document.querySelector('.listado-pendientes ul').innerHTML = "<p class='lista-vacia'>No hay tareas en este proyecto</p>";
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
            }
        }
    }
    // enviar la petición
    xhr.send(datos);
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}














>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
