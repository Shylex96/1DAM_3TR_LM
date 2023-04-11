let matriz1 = [];
let matriz2 = [];
for (let i = 0; i < 10; i++) {
  matriz1.push(Math.floor(Math.random() * 10) + 1);
  matriz2.push(Math.floor(Math.random() * 10) + 1);
}

let suma = [];
document.write("Contenido de la matriz suma:<br>");
for (let i = 0; i < 10; i++) {
	document.write("<br>")
	document.write(matriz1[i]+matriz2[i]);
}
