const paises = document.querySelectorAll(".pais");

const columna1 = document.getElementById("columna1");
const columna2 = document.getElementById("columna2");
const columna3 = document.getElementById("columna3");

let bandera = document.getElementById("bandera");

function cambiarColor(columna1Color, columna2Color, columna3Color) {
	columna1.style.backgroundColor = columna1Color;
	columna2.style.backgroundColor = columna2Color;
	columna3.style.backgroundColor = columna3Color;
	bandera.remove();
	}

function alertaCapital(pais, capital) {
	alert(`La capital de ${pais} es ${capital}.`);
	}

	paises.forEach(function(pais) {

		let capital;

		switch(pais.textContent) {
		case "España":
		capital = "Madrid";
		pais.addEventListener("mouseover", function() {
			cambiarColor("#DA1306", "#E7E427", "#DA1306");

			});
		break;
		case "Portugal":
		capital = "Lisboa";
		pais.addEventListener("mouseover", function() {
			cambiarColor("#1E5A04", "#DA1306", "#DA1306");
			});
		break;
		case "Francia":
		capital = "París";
		pais.addEventListener("mouseover", function() {
			cambiarColor("#040C61 ", "#FFFFFF", "#DA1306");
			});
		break;
		case "Italia":
		capital = "Roma";
		pais.addEventListener("mouseover", function() {
			cambiarColor("#109518 ", "#FFFFFF", "#DA1306");
			});
		break;
		default:
		capital = "Desconocido";
		}

		pais.addEventListener("mouseover", function() {

		alertaCapital(pais.textContent, capital);

		});
	});


/* Funciona pero es ineficiente:

const pais1 = document.getElementById("pais1");
const pais2 = document.getElementById("pais2");
const pais3 = document.getElementById("pais3");
const pais4 = document.getElementById("pais4");

let body = document.querySelector('body');

pais1.addEventListener("mouseover", function() { alertaCapital1() });
pais2.addEventListener("mouseover", function() { alertaCapital2() });
pais3.addEventListener("mouseover", function() { alertaCapital3() });
pais4.addEventListener("mouseover", function() { alertaCapital4() });

function alertaCapital1() {
	alert("La capital de España es Madrid.")
}

function alertaCapital2() {
	alert("La capital de Portugal es Lisboa.")
}

function alertaCapital3() {
	alert("La capital de Francia es París.")
}

function alertaCapital4() {
	alert("La capital de Italia es Roma.")
}

*/