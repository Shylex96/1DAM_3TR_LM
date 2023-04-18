// function mostrar() {
//     let textoEscrito = document.getElementById('texto').value;
//     texto.value = "";
//     texto.focus();

//     let agregarTexto = document.createTextNode(textoEscrito);
//     document.getElementById("textos").appendChild(agregarTexto);
//     //document.getElementById("textos").innerHTML = document.getElementById("textos").innerHTML + textoEscrito + `<br/>`;
//     //document.getElementById("textos").innerHTML + textoEscrito + `<br/>`
//     //document.getElementById("textos").innerHTML = textoEscrito + document.getElementById("textos").innerHTML + `<br/>`;
//     document.getElementById("textos").innerHTML
// }

const input = document.getElementById("texto");
const div = document.getElementById("textos");

document.querySelector("button").addEventListener("click", () => {
    const texto = input.value;

    if (texto.trim() !== "") {

    const br = document.createElement("br");

    br.textContent = texto;

    div.appendChild(br);

    input.value = "";
    }
});