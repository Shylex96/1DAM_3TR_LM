const picture1 = document.getElementById("cuadro1");
const picture2 = document.getElementById("cuadro2");
const picture3 = document.getElementById("cuadro3");
const picture4 = document.getElementById("cuadro4");

const description1 = document.getElementById("descripcion1");
const description2 = document.getElementById("descripcion2");
const description3 = document.getElementById("descripcion3");
const description4 = document.getElementById("descripcion4");

let contador = 0;
const aImages = [picture1, picture2, picture3, picture4];
const aDescripciones = [description1, description2, description3, description4];
const total = aImages.length;

function moverIzq() {
    let anterior;

    if (contador > 0) {
        anterior = (contador-1);
    } else {
        anterior = total-1;
    }   


aImages[contador].style.display = "none";
aImages[anterior].style.display = "block";
aDescripciones[contador].style.display = "none";
aDescripciones[anterior].style.display = "block";
contador = anterior;
}


function moverDer() {
let siguiente = (contador+1)%total;

aImages[contador].style.display = "none";
aImages[siguiente].style.display = "block";
aDescripciones[contador].style.display = "none";
aDescripciones[siguiente].style.display = "block";
contador = siguiente;

}