<?php

 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>submain</title>
    <link rel="stylesheet" href="../estilo/w3.css">
    <link rel="stylesheet" href="../estilo/jquery-ui.css">
    <link rel="stylesheet" href="../estilo/color_flower.css">
    <link rel="stylesheet" href="../estilo/fontawesome-all.css">

    <meta name="viewport" content="width=device-width, user-scalable=no">
  </head>
  <body>

    <div id="contenido">
      <div class="w3-display-container w3-padding-64">
        <div class="w3-display-middle opciones">
          <div class="w3-panel w3-blue w3-center">
            <h2>Editor de tareas </h2>
          </div>
          <div class="w3-center">
            <select id="selectortipo">
              <option value="u.nombreusuario">usuario</option>
              <option value="t.nombre">tarea</option>
              <option value="t.descr">descripción</option>
              <option value="t.caducidad">caducidad</option>
            </select>
            <select id="selectororden" >
              <option value="ASC">ascendente</option>
              <option value="DESC">descendente</option>
            </select>
            <button type="button" onclick="ordenar()" name="button">ORDENAR</button>
          </div>
        </div>
      </div>
        <div class="w3-quarter  w3-container"></div>
       <div class="w3-responsive w3-half">

       <div id="contenedorTabla">
         <?php include "tareas.php"; ?>
     </div>
   </div> <!-- DIV w3-responsive -->

   <!-- DIALOGS -->

   <!-- "Dialog" de Editar -->
  <div class="oculto">
    <?php include "editar_formulario.php"; ?>
   </div>


   <!-- "Dialog" de Eliminar -->
  <div id="dialog_eliminar" class="oculto" title="Confirmar eliminar">
    <p> ¿Estás seguro de que quieres eliminarlo? </p>
   </div>


    </div>
    <script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="../js/jquery-ui.js"></script>
    <script type="text/javascript" src="../js/jquery.validate.js"></script>
    <script type="text/javascript" src="../js/tareas.js"></script>
  </body>
</html>
