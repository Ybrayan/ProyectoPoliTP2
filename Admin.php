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
            <div class="campo enviar">
                <input type="hidden" id="invitado_id" value="<?php echo $invitado_id; ?>">
                <input type="submit" class="boton nueva-tarea" value="Agregar">
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
                    // obtiene las tareas del proyecto actual
                    $Eventos = obtenerEventosInvitado($invitado_id);
                    if($Eventos->num_rows > 0) {
                        // si hay tareas
                        foreach($Eventos as $Evento): ?>
                            <li id="tarea:<?php echo $Evento['evento_id'] ?>" class="tarea">
                            <p><?php
                                echo $Evento['nombre_evento'];
                                echo $Evento['fecha_evento'];
                            ?></p>
                                <div class="acciones">
                                    <i class="fas fa-trash"></i>
                                </div>
                            </li>  
                            
                    <?php endforeach;
                    }  else {
                        // no hay tareas
                        echo "<p class='lista-vacia'>No hay tareas en este proyecto</p>";
                    }
                ?>

            </ul>
        </div>
    </main>
</div><!--.contenedor-->

<?php
    include 'includes/templates/footerAdmin.php';
?>