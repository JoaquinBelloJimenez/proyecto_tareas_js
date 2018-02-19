//Encargado de mandar datos a crud.php

//Escoger entre Editar, eliminar, crear
$(document).ready(function() {
  var tipoForm = "crear";

}); //--document ready

//Añadir línea crear
function dialog_crear(){
  //Añado la línea si el botón está seleccionable
  if (!$( "#btn_nuevo" ).hasClass( "w3-disabled" )) {
    $("#btn_nuevo").addClass("w3-disabled");
  $.post("nuevo_formulario.php",
    function(formulario){
      $('#tabla > tbody').append(formulario);
      $( ".date" ).datepicker({
        dateFormat: "yy-mm-dd",
      });
    });
    //Usar validate
    $("#formulariocrear").validate({
      rules: {
        tarea: {required: true,minlength: 4, maxlength: 20},
        descr:{required:true, minlength: 4, maxlength: 100},
        caducidad:{required:true}
      },
      messages:{
        tarea: "Longitud errónea",
        descr: "Longitud errónea",
        caducidad: "Fecha obligatoria"
      },
      submitHandler: function(formulario) {
        fijar_datos();
        $(formulario).dialog("close");
        $(".error").empty();
      }
    })
  }

} //--Dialog crear

//Contenido dialog editar
function dialog_editar(elemento){

    $( ".date" ).datepicker({
      dateFormat: "yy-mm-dd",
    });

    ideditar = elemento.name;

  $("#ed_usuario").val($(elemento).parent().siblings("td.usuario").attr('id'));
  $("#ed_tarea").val($(elemento).parent().siblings("td.nombre").html());
  $("#ed_descr").val($(elemento).parent().siblings("td.descr").html());
  $("#ed_caducidad").val($(elemento).parent().siblings("td.caducidad").html());

    //Mostrar el formulario
  $( "#formularioeditar" ).dialog({
    modal: true,
    width: 350,
    close: $(".error").empty(),
    open: function() {
      $("#formularioeditar").validate({
        rules: {
          tarea: {required: true,minlength: 4, maxlength: 20},
          descr:{required:true, minlength: 4, maxlength: 100},
          caducidad:{required:true}
        },
        messages:{
          tarea: "Longitud errónea",
          descr: "Longitud errónea",
          caducidad: "Fecha obligatoria"
        },
        submitHandler: function(formulario) {
          //obtener los datos del formulario
          usuario = $("#ed_usuario").val();
          nombreusuario = $("#ed_usuario option:selected").text();
          tarea = $("#ed_tarea").val();
          descr = $("#ed_descr").val();
          caducidad = $("#ed_caducidad").val();

         //Llamar la función crear enviando los datos obtenidos
         enviar_editar(ideditar,usuario,nombreusuario, tarea, descr, caducidad);
          $(formulario).dialog("close");
          $(".error").empty();
        }
      })
    },
    buttons: [
   {
     text: "Editar",
     click: function() {
       $("#formularioeditar").submit();
    }
  }] //--buttons
});
}



//Contenido dialog eliminar
function dialog_eliminar(elemento){
  $( "#dialog_eliminar" ).dialog({
    modal: true,
    width: 350,
    buttons: [
   {
     text: "Eliminar",
     click: function() {
       eliminar(elemento);
       $( this ).dialog( "close" );
     }
   }]
  });
}


//Enviar datos a php
  //Para crear
  function crear(nombre, desc, reco){
    //Sistema ajax para crear elemento
    $.post("crud.php",
      {
        nombre: nombre,
        desc: desc,
        reco: reco,
        tipo: "tareas",
        funcion: "crear",
      },
      function(){
        location.reload();
        //$("#contenido")load('../codigo/listas.php');
      });
  }

  function cancelar_crear(){
    $("#formulariocrear").parents("tr").fadeOut("slow", function(){
      $("#formulariocrear").parents("tr").remove();
      $("#btn_nuevo").removeClass("w3-disabled");
    });
  }

//Para enviar los datos editados
function enviar_editar(id,usuario,nombreusuario, tarea, descr, caducidad){
  //Sistema ajax para crear elemento
  $.post("funciones.php",
    {
      datos : {
        id:id,
        usuario: usuario,
        tarea: tarea,
        descr: descr,
        caducidad: caducidad
      },
      funcion: "editar",
    }, function(){
      $("#idlista_" + id + "> td.usuario").text(nombreusuario);
      $("#idlista_" + id + "> td.nombre").text(tarea);
      $("#idlista_" + id + "> td.descr").text(descr);
      $("#idlista_" + id + "> td.caducidad").text(caducidad);
    });
};


 //Para eliminar
function eliminar(elemento){
  //Sistema ajax para eliminar elemento
  $.post("funciones.php",
    {
      id: elemento.name,
      tipo: "tareas",
      funcion: "eliminar",
    },
    function(){
      $("#idlista_" + elemento.name).fadeOut("slow", function(){
        $("#idlista_" + elemento.name).remove();
      });
    });
}


function fijar_datos(){
  //obtener los datos del formulario
   var datos = {
     usuario : $("#cr_usuario").val(),
     tarea : $("#cr_tarea").val(),
     descr : $("#cr_descr").val(),
     caducidad : $("#cr_caducidad").val()
   };
     console.log(datos);
   //Llamar la función crear enviando los datos obtenidos
     console.log("ENVIADO");
     $.post("funciones.php",
       {
         datos: datos,
         funcion: "crear"
       },
       function(html){
         $("#contenedorTabla").empty();
         $("#contenedorTabla").html(html);
       });
} //-- Fijar datos


//Ordenar los datos
function ordenar(){
  $.post("tareas.php",
    {
      tipo : $("#selectortipo").val(),
      orden : $("#selectororden").val()
    },
    function(html){
      $("#contenedorTabla").empty();
      $("#contenedorTabla").html(html);
    });
}
