<?php

$accion = $_POST['accion'];
<<<<<<< HEAD
$evento_id= (int) $_POST['id'];

$nombre_evento= $_POST['nombre_evento'];
$fecha_evento= $_POST['fecha_evento'];
$hora_evento= $_POST['hora_evento'];
$id_cat_evento= (int) $_POST['id_cat_evento'];
$id_inv= (int) $_POST['id_inv'];
$clave= $_POST['clave'];

=======
$id_proyecto = (int) $_POST['id_proyecto'];
$tarea = $_POST['tarea'];
$estado = $_POST['estado'];
$id_tarea = (int) $_POST['id'];
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f


if($accion === 'crear') {
    // importar la conexion
    include '../funciones/bd_conexion.php';
    try {
        // Realizar la consulta a la base de datos
<<<<<<< HEAD
        $stmt = $conn->prepare("INSERT INTO eventos(nombre_evento, fecha_evento, hora_evento, id_cat_evento, id_inv) VALUES (?,?,?,?,?)");
        $stmt->bind_param('sssii', $nombre_evento, $fecha_evento, $hora_evento, $id_cat_evento, $id_inv);
=======
        $stmt = $conn->prepare("INSERT INTO tareas (nombre, id_proyecto) VALUES (?, ?) ");
        $stmt->bind_param('si', $tarea, $id_proyecto);
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
        $stmt->execute();
        if($stmt->affected_rows > 0) {
            $respuesta = array(
                'respuesta' => 'correcto',
                'id_insertado' => $stmt->insert_id,
                'tipo' => $accion,
<<<<<<< HEAD
                'nombre_evento' => $nombre_evento
=======
                'tarea' => $tarea
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
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


<<<<<<< HEAD
=======
if($accion === 'actualizar') {
    // importar la conexion
    include '../funciones/bd_conexion.php';
    try {
        // Realizar la consulta a la base de datos
        $stmt = $conn->prepare("UPDATE tareas set estado = ? WHERE id = ? ");
        $stmt->bind_param('ii', $estado, $id_tarea);
        $stmt->execute();
        if($stmt->affected_rows > 0) {
            $respuesta = array(
                'respuesta' => 'correcto'
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



>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
if($accion === 'eliminar') {
    // importar la conexion
    include '../funciones/bd_conexion.php';
    try {
        // Realizar la consulta a la base de datos
<<<<<<< HEAD
        $stmt = $conn->prepare("DELETE from eventos WHERE evento_id = ? ");
        $stmt->bind_param('i', $evento_id);
=======
        $stmt = $conn->prepare("DELETE from tareas WHERE id = ? ");
        $stmt->bind_param('i', $id_tarea);
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
        $stmt->execute();
        if($stmt->affected_rows > 0) {
            $respuesta = array(
                'respuesta' => 'correcto'
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
<<<<<<< HEAD
}
=======
}






>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
