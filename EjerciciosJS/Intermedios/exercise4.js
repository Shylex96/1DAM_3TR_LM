function crearTabla() {
    let tabla = document.getElementById("numeroTabla").value;

    if (tabla < 0 || tabla > 10 ) {
        alert("Ha introducido un número no válido.");
        document.getElementById("numeroTabla").value = "";
    } else {
        document.write("Tabla de multiplicar del: " + tabla);
        document.write("<br><br>");
        for (let i = 0; i <= 10; i++) {
            document.write(tabla + " x " + i + " = " + (tabla * i) + "<br>");
        }
        const button = document.createElement('button'); 

        document.write("<br>")
        button.type = 'button'; 
        button.innerText = 'Reiniciar'; 
        document.body.appendChild(button); 
        
        function recargarPagina() {
            location.reload();
        }
        button.addEventListener("click", recargarPagina);
        
    }
}