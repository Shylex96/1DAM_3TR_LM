sustituirVocales();

let searchTimeout;
document.getElementById("cadenatxt").onkeyup = function () {
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(sustituirVocales, 50);
};

function sustituirVocales() {

	let cadenaOriginal = document.getElementById("cadenatxt").value;
    cadenaMinuscula = cadenaOriginal.toLowerCase();

    cadenaSinVocalesA = cadenaMinuscula.replaceAll('a', '*');
    cadenaSinVocalesE = cadenaSinVocalesA.replaceAll('e', '*');
    cadenaSinVocalesI = cadenaSinVocalesE.replaceAll('i', '*');
    cadenaSinVocalesO = cadenaSinVocalesI.replaceAll('o', '*');
    cadenaSinVocalesU = cadenaSinVocalesO.replaceAll('u', '*');
    cadenaSinVocales = cadenaSinVocalesU;

    cadenatxt.value = cadenaSinVocales;
}