import {Articulo} from "./modelo.js"

function cargaDatos(){
    let dato = new Articulo(Codigo.value,Descripcion.value,Cantidad.value,Precio.value,);
    console.log("Contenido:",dato);
    console.log("Subtotal:", dato.subtotal());
    console.log("Igic:",dato.igic());
    console.log("Total sin formato:",dato.total());
    console.log("Total con formato:",dato.totalConFormato());    
}

async function leer() {
    let elem = "./modelos.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    let objeto = new Articulo();
    JSON.parse(content, function (key, value) {
        if (typeof value == "object" && typeof objeto.Codigo != "undefined"){
            modelos.push(objeto);
            objeto = new Articulo();    
        } else {
            objeto[key] = value;
        }
    });
};
window.onload = async function() {
        await leer();
        console.log(modelos);
        console.log(modelos[0].subtotal());
        console.log(Object.getOwnPropertyNames(modelos[0]));
        console.log(Object.getPrototypeOf(modelos[0]));
}

let modelos =[];