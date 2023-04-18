let cadena = prompt("Ingrese una cadena:");
let vocales = ["a", "e", "i", "o", "u"];
document.write("Analizando la cadena: " + cadena + "<br><br>");

for (i = 0; i < vocales.length; i++) {
    let vocal = vocales[i];

    for (j = 0; j < cadena.length; j++) {
        let letra = cadena.charAt(j);

        if (letra === vocal) {
            document.write("La vocal " +vocal + " aparece en la posición: " + (j+1) + "<br>");
        }
    }
}
