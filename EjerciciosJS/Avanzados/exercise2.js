const nombreCurrentUser = prompt("Dime tu nombre:");

const fechaActual = new Date();
const hora = fechaActual.toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'});

if (hora > "06:00" && hora < "12:00") {
    mensaje = "por la mañana."
} else if (hora > "12:00" && hora < "21:00") {
    mensaje = "por la tarde."
} else {
    mensaje = "por la noche."
}

document.getElementById("nameContainer").innerHTML = "¡Hola " +  nombreCurrentUser + "!, te has logeado en la página " + mensaje;