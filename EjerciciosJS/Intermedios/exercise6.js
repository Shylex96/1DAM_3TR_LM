let matrizPrincipal = [];
calculoTiradas();


function calculoTiradas() {

    for (i = 1; i <= 36000; i++) {

        let numero1 = (Math.floor(Math.random() * 6 + 1));
        let numero2 = (Math.floor(Math.random() * 6 + 1));
    
        let sumaTirada = (numero1 + numero2);
    
        matrizPrincipal.push(sumaTirada);
        console.log(matrizPrincipal);
    }

}