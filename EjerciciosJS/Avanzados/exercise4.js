function mostrar() {
    let textoEscrito = document.getElementById('texto').value;
    texto.value = "";
    texto.focus();

    let agregarTexto = document.createTextNode(textoEscrito);
    document.getElementById("textos").appendChild(agregarTexto);
    document.getElementById("textos").innerHTML = document.getElementById("textos").innerHTML + `<br/>`;
}

// const input = document.getElementById("texto");
// const div = document.getElementById("textos");

// document.querySelector("button").addEventListener("click", () => {
//     const texto = input.value;

//     if (texto.trim() !== "") {

//     const p = document.createElement("p");

//     p.textContent = texto;

//     div.appendChild(p);

//     input.value = "";
//     }
// });