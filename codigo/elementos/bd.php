<?php
  //Tomar datos inicio en base de datos
  require_once "datos_bd.php";

  class yemi_bd
  {
    private $basedatos;

    function __construct(){
      try{
      $this->basedatos = new PDO(BD_DSN,BD_USUARIO,BD_CONTRASENIA,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
      }catch(PDOException $e){
        die("**Error: ". $e->getMessage());
      }
    }

    public function sentencia($sql){
      $reg = $this->basedatos->query($sql); //Ejecuta la sentencia
      return $reg; //Devuelve el resultado de la sentencia
    }
  }

 ?>
