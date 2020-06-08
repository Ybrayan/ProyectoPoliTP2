<?php
    include 'includes/funciones/sesiones.php';
    include 'includes/funciones/funciones.php';
    include 'includes/templates/headerAdmin.php';
    include 'includes/templates/barra.php';
    
    // Obtener el ID de la URL
    if(isset($_GET['invitado_id'])) {
        $invitado_id = $_GET['invitado_id'];
    }
?>

<div class="contenedor">
    <?php
        include 'includes/templates/sidebar.php';
    ?>

    <main class="contenido-principal">
        
    <?php 
        $Invitado = obtenerNombreInvitado($invitado_id);
        
        if($Invitado): ?>
        
        <h1>Invitado: 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
            <?php foreach($Invitado as $nombre): ?>
                <span><?php echo $nombre['nombre_invitado']; ?></span>
            <?php endforeach;?>
        </h1>

        <form action="#" class="agregar-evento" id="prueba" method="POST">
            <div class="campo">
                <label for="nombre">Nombre Evento:</label>
                <input type="text" placeholder="Nombre Evento" class="nombre-evento"> 
            </div>

            <div class="campo">
                <label for="fecha">Fecha:</label>
                <input type="date" class="fecha-evento">

                <label for="tipo">Hora:</label>
                <input type="time" class="hora-evento"> 
            </div>

            <div class="campo">
                <label for="categoria">Categoria:</label>
                <select name="cat" id="cat" class="cat">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
                    <?php foreach($Invitado as $nombre): ?>
                        <span><?php echo $nombre['nombre_invitado']; ?></span>
                   <?php endforeach;?>
        </h1>

        <form action="#" class="agregar-tarea">
            <div class="campo">
                <label for="nombre">Nombre Evento:</label>
                <input type="text" placeholder="Nombre Evento" class="nombre-tarea"> 
            </div>
            <div class="campo">
                <label >Fecha:</label>
                <input type="date">     
                <label >Tarea:</label>
                <input type="time"> 
            </div>
            <div class="campo">
                <label >Tarea:</label>
                <select name="cat" id="cat">
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c

                <?php
                    $Categorias = obtenerCategorias();
                    foreach($Categorias as $Categoria): 
                    ?>
                        <option value="<?php echo $Categoria['id_categoria'] ?>">
                        <?php echo $Categoria['cat_evento'] ?></option>                        
                    <?php 
                    endforeach;
                ?>
                </select>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
            
            <div class="campo enviar">
                <input type="hidden" id="invitado_id" value="<?php echo $invitado_id; ?>">
                <input type="submit" class="boton nuevo-evento" value="Agregar">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
            <div class="campo enviar">
                <input type="hidden" id="invitado_id" value="<?php echo $invitado_id; ?>">
                <input type="submit" class="boton nueva-tarea" value="Agregar">
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
            </div>
        </form>
        
        <?php
            else:
                // Si no hay proyectos seleccionados
                echo "<p>Selecciona un Proyecto a la izquierda</p>";
            endif;
        
        ?>


        <h2>Listado de Eventos:</h2>

        <div class="listado-pendientes">
            <ul>
                <?php 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
                    // obtiene las eventos del proyecto actual
                    $Eventos = obtenerEventosInvitado($invitado_id);
                    if($Eventos->num_rows > 0) {
                        // si hay eventos
                        foreach($Eventos as $Evento): ?>
                            <li id="evento:<?php echo $Evento['evento_id'] ?>" class="evento">
                            <p><?php
                                echo $Evento['nombre_evento'];
                                ?> - <?php
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
                    // obtiene las tareas del proyecto actual
                    $Eventos = obtenerEventosInvitado($invitado_id);
                    if($Eventos->num_rows > 0) {
                        // si hay tareas
                        foreach($Eventos as $Evento): ?>
                            <li id="tarea:<?php echo $Evento['evento_id'] ?>" class="tarea">
                            <p><?php
                                echo $Evento['nombre_evento'];
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
                                echo $Evento['fecha_evento'];
                            ?></p>
                                <div class="acciones">
                                    <i class="fas fa-trash"></i>
                                </div>
                            </li>  
                            
                    <?php endforeach;
                    }  else {
<<<<<<< HEAD
                        // no hay eventos
                        echo "<p class='lista-vacia'>No hay eventos en este proyecto</p>";
=======
<<<<<<< HEAD
                        // no hay eventos
                        echo "<p class='lista-vacia'>No hay eventos en este proyecto</p>";
=======
<<<<<<< HEAD
                        // no hay eventos
                        echo "<p class='lista-vacia'>No hay eventos en este proyecto</p>";
=======
                        // no hay tareas
                        echo "<p class='lista-vacia'>No hay tareas en este proyecto</p>";
>>>>>>> 5ce4d5aa8cd2c524401d61afb4e5dff931e1ab1f
>>>>>>> c3933025ea8a6d93d1f8b9a9bdbbcdfedcc57cfb
>>>>>>> 9d7a40a142bd4270b61deba7156602cff7dabb9c
                    }
                ?>

            </ul>
        </div>
    </main>
</div><!--.contenedor-->

<?php
    include 'includes/templates/footerAdmin.php';
?>