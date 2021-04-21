// function leefichero() {
//     fetch('articulos.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("HTTP error " + response.status);
//             }
//             return response.json();
//             })
//         .then(articulos => {
//             console.log(document.getElementById("f"));
//             if (!(document.getElementById("f") ==null)) {
//                 console.log(document.getElementById("f").value);
//                 var dato = document.getElementById("f").value;
//                           filtrado = articulos.productos.filter(function(elemento) {
//                     return elemento.descripcion.indexOf(dato)!=-1;
//                 });
//             } else
//             filtrado = articulos.productos;
//     });
//     console.log(articulos);
//     filtrado.forEach(cargaRegistro);
// }



async function leefichero(){
    const fichero = "./articulos.json";
    let objeto = await fetch (fichero);
    let contenido = await objeto.text();
    vector = JSON.parse(contenido).productos;
    vectorpatron = vector;
    vector.forEach(cargaRegistro);
};

function cargaRegistro (item) {
    let i = tabla.rows.length;
    let fila = tabla.insertRow(i);
    fila.insertCell(0).innerHTML = item.codigo;
    fila.insertCell(1).innerHTML = item.descripcion;
    fila.insertCell(2).innerHTML = item.stock;
    fila.insertCell(3).innerHTML = item.precio;
    fila.addEventListener("click", function(){selFoto(this.rowIndex);})
    tabla.getElementsByTagName('tr')[1].style.backgroundColor= 'chartreuse'
    document.getElementById("imagen").src = "./imagenes/"+vector[0].foto;
    console.log(item.foto);
}

function selFoto(fila) {
    for(let i=1;i<tabla.rows.length;i++) {
        tabla.getElementsByTagName("tr")[i].style.backgroundColor= 'white';    
    }
    tabla.getElementsByTagName("tr")[fila].style.backgroundColor= 'chartreuse';
    document.getElementById("imagen").src = "./imagenes/"+vector[fila-1].foto;
    filaActual = fila;
}
function modRegistro() {
    bandera = 0;
    document.getElementById("codigo").value = vector[filaActual-1].codigo;
    document.getElementById("descripcion").value = vector[filaActual-1].descripcion;
    document.getElementById("stock").value = vector[filaActual-1].stock;
    document.getElementById("precio").value = vector[filaActual-1].precio;
}
function aceptar() {
    switch (bandera) {
        case 0:
            vector[filaActual-1].descripcion = document.getElementById("descripcion").value;
            vector[filaActual-1].stock = document.getElementById("stock").value;
            vector[filaActual-1].precio = document.getElementById("precio").value;
            break;
        case 1:
            let dato = new articulo();
            dato.codigo = document.getElementById("codigo").value;
            dato.descripcion = document.getElementById("descripcion").value;
            dato.stock = document.getElementById("stock").value;
            dato.precio = document.getElementById("precio").value;
            vector.push(dato);
            break;
    }
    while (tabla.rows.length >1) {tabla.deleteRow(1)};
    vectorpatron = vector;
    vector.forEach(cargaRegistro);
}
function nuevo() {
    bandera = 1;
    document.getElementById("formulario").reset();
    document.getElementById("codigo").focus();
}
function filtrar() {
    let i = 0;
    console.log(vectorpatron.length);
    vector = vectorpatron;
    while (i < vector.length) {
        if (vector[i].descripcion != "*"+document.getElementById("filtro").value+"*") {
            vector.splice(i,1);
        }
        i++;
    }
    while (tabla.rows.length >1) {tabla.deleteRow(1)};
    vector.forEach(cargaRegistro);
}

let vector = [];
let vectorpatron = [];
let filaActual = 1;
let bandera;
class articulo {
    constructor(codigo,descripcion,stock,precio){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
    }
}
let filtrado;
const tabla = document.getElementById("lista-articulos");
window.onload = function() {
    leefichero();
};