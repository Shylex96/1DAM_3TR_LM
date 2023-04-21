function mostrar() {
    let textoEscrito = document.getElementById('texto').value;
    texto.value = "";
    texto.focus();

    let agregarTexto = document.createTextNode(textoEscrito);
    document.getElementById("textos").appendChild(agregarTexto);
    document.getElementById("textos").innerHTML = document.getElementById("textos").innerHTML + `<br/>`;
}
