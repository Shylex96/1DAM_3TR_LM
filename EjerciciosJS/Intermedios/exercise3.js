const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
'K', 'E', 'T'];

let avisoDNI = alert("Rellene el DNI.");


function limpiarDNI() {
    document.getElementById("numerosDNI").value = "";
    document.getElementById("letraDNI").value = "";
    window.event.preventDefault();
}

function calcularDNI() {
    document.getElementById(numerosDNI);
    
    if (numerosDNI < 0 || numerosDNI > 99999999 && letraDNI === letras) {

        document.write("Funciona");
    }
    window.event.preventDefault();
    
    }
    





/*
if ((numeroDNI == null) || (letraDNI == null)) {
    alert("Debe escribir un número de DNI.");
    window.location.reload();
}
else if (numeroDNI != null && numeroDNI.length < 0) {

    alert("El número del DNI introducido no es válido.");
    window.location.reload();

} else if (numeroDNI != null && numeroDNI.length < 99999999) {
    alert("El número del DNI introducido no es válido.");
    window.location.reload();
}
else if (letraDNI != null && letraDNI != letras) {

    alert("La letra del DNI introducida no es válida.");
    window.location.reload();

    } else {
        alert("DNI correcto");
        document.write("El DNI escrito es: " + numeroDNI+letraDNI);
    }
*/
    




