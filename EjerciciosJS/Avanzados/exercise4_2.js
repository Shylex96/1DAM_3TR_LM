const input = document.getElementById("texto");
const div = document.getElementById("textos");

document.querySelector("button").addEventListener("click", () => {
    const texto = input.value;

    if (texto.trim() !== "") {

    const p = document.createElement("p");

    p.textContent = texto;

    div.appendChild(p);

    input.value = "";
    }
});