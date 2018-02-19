<?php
  //Requires
  require_once 'elementos/bd.php';

  //Conectar a la base de datos
  $conexionbd = new yemi_bd();

  $sql = "SELECT * FROM usuario";
  $reg = $conexionbd->sentencia($sql);

 ?>

<tr>
  <td>
    <form id='formulariocrear'>
      <select id="cr_usuario" class="w3-input w3-middle">
        <?php while($listar = $reg->fetch(PDO::FETCH_ASSOC)){ ?>
            <option class="w3-dark-grey w3-large" value="<?=$listar["id_usuario"] ?>"><?=$listar["nombreusuario"] ?></option>
        <?php } ?>
  </select>
  </td>
  <td>
    <input class='w3-input' type="text" id="cr_tarea" name="tarea" placeholder="tarea" maxlength="20" required>
  </td>
<td>
  <input class='w3-input' type="text" id="cr_descr" name="descr" placeholder="descripción" maxlength="100" required>
</td>
<td>
  <input class='date w3-input' type="text" id="cr_caducidad" name="caducidad" placeholder="Caducidad" required>
</td>
<td>
    <button class='w3-btn' type='submit' value="name" onclick="fijar_datos()"> <i class='w3-xlarge fas fa-save'></i> </button>
    <button class='w3-btn' value'enviar' onclick="cancelar_crear()"> <i class='w3-xlarge fas fa-ban'></i> </button>
  </form>
</td>
</tr>
