const square1 = document.getElementById('cuadrado1');
const square2 = document.getElementById('cuadrado2');
const square3 = document.getElementById('cuadrado3');

function verifyNumber() {
    const inputRed = document.getElementById('input1').value;
    const inputGreen = document.getElementById('input2').value;
    const inputBlue = document.getElementById('input3').value;

    if (inputRed == "" || inputGreen == "" || inputBlue == "") {

        // document.getElementById("avisos").innerHTML = "No puede haber campos sin rellenar.";
        alert("No puede haber campos sin rellenar");

    } else if (((inputRed < 0 || inputRed > 255) || (inputGreen < 0 || inputGreen > 255) || (inputBlue < 0 || inputBlue > 255))) {

        // document.getElementById("avisos").innerHTML = "Los campos deben contener números comprendidos entre 0 y 255.";
        alert("Los campos deben contener números comprendidos entre 0 y 255.");

    } else {
        // rgb(62, 37, 37);
        let colorFondo = "rgb(" + inputRed + ", " + inputGreen + ", " + inputBlue + ")";
        document.body.style.backgroundColor = colorFondo;
    }
}