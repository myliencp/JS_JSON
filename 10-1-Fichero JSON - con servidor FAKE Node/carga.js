function leefichero(){
    const datofiltro = document.getElementById("filtro").value;
    if (datofiltro.length != 0) {
        fichero = fichero.substring(0,fichero.indexOf("?")==-1?fichero.length:fichero.indexOf("?")) + "?descripcion_like=" + datofiltro;
        
    }
    console.log(fichero);
    fetch(fichero,{
        method: "get",
    })
        .then(response => response.json())
        .then(contenido => {
            vector = contenido;
            vector.forEach(cargaRegistro);
        })
    // .catch(error => console.log("Muestro error"));
};

function filtrar() {
    while (tabla.rows.length >1) {tabla.deleteRow(1)};
    leefichero();
}

function cargaRegistro (item) {
    let i = tabla.rows.length;
    let fila = tabla.insertRow(i);
    fila.insertCell(0).innerHTML = item.id;
    fila.insertCell(1).innerHTML = item.codigo;
    fila.insertCell(2).innerHTML = item.descripcion;
    fila.insertCell(3).innerHTML = item.stock;
    fila.insertCell(4).innerHTML = item.precio;
    fila.addEventListener("click", function(){selFoto(this.rowIndex);})
    tabla.getElementsByTagName('tr')[1].style.backgroundColor= 'grey'
    document.getElementById("imagen").src = "./imagenes/"+vector[0].foto;
    console.log(item.foto);
}

function selFoto(fila) {
    for(let i=1;i<tabla.rows.length;i++) {
        tabla.getElementsByTagName("tr")[i].style.backgroundColor= 'white';    
    }
    tabla.getElementsByTagName("tr")[fila].style.backgroundColor= 'grey';
    document.getElementById("imagen").src = "./imagenes/"+vector[fila-1].foto;
    filaActual = fila;
}
function modRegistro() {
    bandera = 0;
    document.getElementById("id").value = vector[filaActual-1].id;
    document.getElementById("foto").value = vector[filaActual-1].foto;
    document.getElementById("fotografia").src = "./imagenes/"+vector[filaActual-1].foto;
    document.getElementById("codigo").disabled = true;
    document.getElementById("codigo").value = vector[filaActual-1].codigo;
    document.getElementById("descripcion").value = vector[filaActual-1].descripcion;
    document.getElementById("stock").value = vector[filaActual-1].stock;
    document.getElementById("precio").value = vector[filaActual-1].precio;
}
function aceptar(e) {
    e.preventDefault();
    let todosLosDatos = document.getElementById("formulario").elements;
    console.log(todosLosDatos.foto.value);
    const elemento = new articulo(todosLosDatos.codigo.value,todosLosDatos.descripcion.value,todosLosDatos.stock.value,todosLosDatos.precio.value,todosLosDatos.foto.value);
    console.log(fichero+"/"+todosLosDatos.id.value);
    switch (bandera) {
        case 0:
            objeto = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body:JSON.stringify(elemento)
            }
            fetch(fichero+"/"+todosLosDatos.id.value,objeto)
                .then(response => response.json())
                .then(contenido => {
                    console.log(contenido);
                })
            .catch(error => console.log("Muestro error"));
            break;
        case 1:
            objeto = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body:JSON.stringify(elemento)
            }
            fetch(fichero,objeto)
                .then(response => response.json())
                .then(contenido => {
                    console.log(contenido);
                })
            .catch(error => console.log("Muestro error"));
            break;
    }
    // while (tabla.rows.length >1) {tabla.deleteRow(1)};
    // vectorpatron = vector;
    // vector.forEach(cargaRegistro);
}
function nuevo() {
    bandera = 1;
    document.getElementById("codigo").disabled = false;
    document.getElementById("formulario").reset();
    document.getElementById("codigo").focus();
}
function guardaArchivo() {
    let jsonse = '{ "productos": '+JSON.stringify(vector)+"}";
    let blob = new Blob([jsonse], {type: "application/json"});
    let url  = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href        = url;
    a.download    = "articulos.json";
    a.click();        
};

function eliRegistro() {
    document.getElementById('id01').style.display='block';
}

function auxElimina() {
    const elemento = tabla.rows[filaActual].cells[0].innerHTML;
    objeto = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }
        fetch(fichero+"/"+elemento,objeto)
            .then(response => response.json())
            .then(contenido => {
                console.log(contenido);
            })
        .catch(error => console.log("Muestro error"));
}
function cambiaFoto(buscafoto) {
    const fotoNueva = URL.createObjectURL(buscafoto.files[0]);
    console.log(fotoNueva);
    document.getElementById('fotografia').src =  fotoNueva;
}

// Get the modal
const modal = document.getElementById('id01');

let objeto;
let vector = [];
let vectorpatron = [];
let filaActual = 1;
let bandera;
class articulo {
    constructor(codigo,descripcion,stock,precio,foto){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        this.foto = foto;
    }
}
let fichero = "http://localhost:3000/productos";
const tabla = document.getElementById("lista-articulos");
window.onload = function() {
    leefichero();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log(event.target);
  if (event.target == modal ) {
    modal.style.display = "none";
  }
}