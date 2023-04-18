function generarTabla() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    const tbody = document.createElement("tbody");

    const datos = [];
    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {

            fila.push(Math.floor(Math.random() * 100));
        }
        datos.push(fila);
    }

    for (let i = 0; i < filas; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            
            const td = document.createElement("td");
            td.textContent = datos[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    document.getElementById("tabla-container").appendChild(tabla);
    }


function resetTabla() {
    location.reload();
}