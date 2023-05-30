$(document).ready(function () {

    $("#boton").on("click", function () {
        alertify.alert('Aviso', 'Mensaje!').set('movable', false);
        alertify.alert('Confirmado').set({ transition: 'flipy' }).show();
        alertify.alert('Etiquetas personalizadas').set('labels', {ok:'Sí', cancel:'No'});
    });

    /*
    // existen success, error, warning y notify

    $("#boton").on("click", function () {
        alertify.error('Fatal').set({ transition: 'flipy' }).show();
    });
    */

    /*
    let nombre = alertify.prompt("Solicitud de datos", "Dime tu nombre", "",
    function(){alertify.alert("Has aceptado");}, 
    function(){alertify.alert("Has rechazado");});

    // Tambien se le puede pasar una función personalizada
    EJ 1:

    let nombre = alertify.prompt("Solicitud de datos", "Dime tu nombre", "",
    function(){alertify.success("Has aceptado");}, 
    function(){alertify.error("Has rechazado");});
    
    EJ 2:

    let nombre = alertify.prompt("Solicitud de datos", "Dime tu nombre", "",
    function(){},
    function(){});
    
    */
});

