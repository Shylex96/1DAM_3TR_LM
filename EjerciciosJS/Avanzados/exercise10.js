// Sin terminar

const respuesta1 = document.getElementsById("pregunta1").value;
const respuesta2 = document.getElementsById("pregunta2").value;
const respuesta3 = document.getElementsById("pregunta3").value;

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

function obtenerRespuesta1() {

    if (respuesta1 == 4) {
        contador1 = 1;
        window.location.href = "exercise10_2.html";

    } else {
        contador1 = 0;
        window.location.href = "exercise10_2.html";
    }
}

function obtenerRespuesta2() {

    if (respuesta2 == 1) {
        contador2 = 1;
        window.location.href = "exercise10_3.html";
    } else {
        contador2 = 0;
        window.location.href = "exercise10_3.html";
    }
}

function obtenerRespuesta3() {

    if (respuesta3 == 2) {
        contador3 = 1;
        window.location.href = "exercise10_4.html";

    } else {
        contador3 = 0;
        window.location.href = "exercise10_4.html";
    }
}


function revelarResultado() {
    let resultadoTotal = contador1 + contador2 + contador3;

    let reiniciar = document.getElementById("reintentarTest");  
    reiniciar.style.removeProperty = "display";

    if (resultadoTotal == 0) {
        document.getElementById("respuestaTest").innerHTML = `PREGUNTAS ACERTADAS: ` +resultadoTotal+ ` DE 3`;
    } else if (resultadoTotal == 1) {
        document.getElementById("respuestaTest").innerHTML = `PREGUNTAS ACERTADAS: ` +resultadoTotal+ ` DE 3`;
    } else if (resultadoTotal == 2) {
        document.getElementById("respuestaTest").innerHTML = `PREGUNTAS ACERTADAS: ` +resultadoTotal+ ` DE 3`;
    } else if (resultadoTotal == 3) {
        document.getElementById("respuestaTest").innerHTML = `PREGUNTAS ACERTADAS: ` +resultadoTotal+ ` DE 3`;
    }

    
}

function volverIntento() {
    window.location.href = "exercise10_1.html";
}

