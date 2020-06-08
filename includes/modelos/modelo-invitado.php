<?php

$accion = $_POST['accion'];
$proyecto = $_POST['proyecto'];

$nombre_invitado= $_POST['nombre_invitado'];
$apellido_invitado= $_POST['apellido_invitado'];
$descripcion= $_POST['descripcion'];
$url_imagen= $_POST['url_imagen'];

if($accion === 'crear') {
    // importar la conexion
    include '../funciones/bd_conexion.php';
    
    try {
        // Realizar la consulta a la base de datos
<<<<<<< HEAD
        $stmt = $conn->prepare("INSERT INTO invitados (nombre_invitado) VALUES (?) ");
=======
<<<<<<< HEAD
        $stmt = $conn->prepare("INSERT INTO invitados (nombre_invitado) VALUES (?) ");
=======
        $stmt = $conn->prepare("INSERT INTO proyectos (nombre) VALUES (?) ");
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
        $stmt->bind_param('s', $proyecto);
        $stmt->execute();
        if($stmt->affected_rows > 0) {
            $respuesta = array(
                'respuesta' => 'correcto',
                'id_insertado' => $stmt->insert_id,
                'tipo' => $accion,
                'nombre_proyecto' => $proyecto
            );
        }  else {
            $respuesta = array(
                'respuesta' => 'error'
            );
        }
        $stmt->close();
        $conn->close();
    } catch(Exception $e) {
        // En caso de un error, tomar la exepcion
        $respuesta = array(
            'error' => $e->getMessage()
        );
    }
    
    echo json_encode($respuesta);
}