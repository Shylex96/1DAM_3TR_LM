mostrar();

function mostrar() {
    let textoEscrito = document.getElementById('texto').value;
    texto.value = "";
    texto.focus();

    document.getElementById("textos").innerHTML = textoEscrito;
    
}