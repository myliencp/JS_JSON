function leefichero(){
    const datofiltro = document.getElementById("filtro").value;
    if (datofiltro.length != 0) {
         busqueda = fichero + "?nombre_like=" + datofiltro;
    } else {
         busqueda = fichero;
    }

    fetch(busqueda,{
        method: "get",
    })
        .then(response => response.json())
        .then(contenido => {
            vector = contenido;
            vector.forEach(cargaRegistro);
        })
    .catch(error => console.log("Muestro error"));
};

function filtrar() {
    while (tabla.rows.length >1) {tabla.deleteRow(1)};
    leefichero();
}
function cargaRegistro (item) {
    let i = tabla.rows.length;
    let fila = tabla.insertRow(i);
    fila.insertCell(0).innerHTML = item.id;
    fila.insertCell(1).innerHTML = item.nombre;
    fila.insertCell(2).innerHTML = item.apellidos;
    fila.insertCell(3).innerHTML = item.telefono;
    fila.insertCell(4).innerHTML = item.email;
    fila.addEventListener("click", function(){selFila(this.rowIndex);})
    tabla.getElementsByTagName('tr')[1].style.backgroundColor= 'grey'
}
function selFila(fila) {
    for(let i=1;i<tabla.rows.length;i++) {
        tabla.getElementsByTagName("tr")[i].style.backgroundColor= 'white';    
    }
    tabla.getElementsByTagName("tr")[fila].style.backgroundColor= 'grey';
    filaActual = fila;
}

let objeto;
let busqueda;
let filaActual = 1;
let bandera;


const fichero = "http://localhost:3000/alumnos";
const tabla = document.getElementById("lista-alumnos");
window.onload = function() {
    leefichero();
};

