<?php
  //Requires
  require_once 'elementos/bd.php';

  //Conectar a la base de datos
  $conexionbd = new yemi_bd();

  $sql = "SELECT * FROM usuario";
  $reg = $conexionbd->sentencia($sql);

 ?>

    <form id='formularioeditar'  title="editar elemento">
      <select id="ed_usuario" class="w3-input w3-middle">
        <?php while($listar = $reg->fetch(PDO::FETCH_ASSOC)){ ?>
            <option class="w3-dark-grey w3-large" value="<?=$listar["id_usuario"] ?>"><?=$listar["nombreusuario"] ?></option>
        <?php } ?>
  </select>
    <input class='w3-input' type="text" id="ed_tarea" name="tarea" placeholder="tarea" required>

  <input class='w3-input' type="text" id="ed_descr" name="descr" placeholder="descripción" required>

  <input class='date w3-input' type="text" id="ed_caducidad" name="caducidad" placeholder="Caducidad" required>
  </form>
