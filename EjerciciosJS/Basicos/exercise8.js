let numeros = [];
for (let i = 0; i < 5; i++) {
  numeros.push(Math.floor(Math.random() * 50) + 1);
}

document.write("Los 5 números generados son: " + numeros);

let mayorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > mayorNumero) {
    mayorNumero = numeros[i];
    }
}

document.write("<br>El mayor número generado es: " + mayorNumero);