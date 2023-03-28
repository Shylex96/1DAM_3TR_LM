function mostrarConversion() {
    const euros = document.getElementById("euros").value;
    const bitcoins = document.getElementById("bitcoins").value;
    let resultado = "";

    // 1€ = 0,000040 BTC
    // 1 BTC = 25011,45€

        if (euros && !bitcoins) {

            resultado = euros * 0.000040;
            resultado = resultado.toFixed(2);
            resultado = `El resultado de la conversión es: ${resultado} bitcoins`;

        } else if (!euros && bitcoins) {

            resultado = bitcoins * 25011.45;
            resultado = resultado.toFixed(2);
            resultado = `El resultado de la conversión es: ${resultado} euros`;

        } else {

            alert("Debe ingresar una cantidad a convertir.");
            alert("Rellene únicamente un campo.");

        }

    document.getElementById("resultado").innerHTML = resultado;
    }

        function limpiarConversion() {
            document.getElementById("euros").value = "";
            document.getElementById("bitcoins").value = "";
        }

