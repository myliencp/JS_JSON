import {Articulo} from "./modelo.js"

async function leer() {
    let elem = "./modelos.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    let objeto = new Articulo();
    JSON.parse(content, function (key, value) {
        if (typeof value == "object" && typeof objeto.codigo != "undefined"){
            modelos.push(objeto);
            objeto = new Articulo();    
        } else {
            objeto[key] = value;
        }
    });
};

function agregaLineas() {
    document.documentElement.style.setProperty("--columnas",7);
    for (let i=0;i<Object.keys(modelos[0]).length;i++){
        listado.innerHTML += `<div class="lineas titulos">${Object.keys(modelos[0])[i]}</div>`
    }
    listado.innerHTML += '<div class="lineas titulos">Subtotal</div>'
    listado.innerHTML += '<div class="lineas titulos">Igic</div>'
    listado.innerHTML += '<div class="lineas titulos">Total</div>'
    for(let j=0;j<modelos.length;j++){
        for(let i=0;i<Object.keys(modelos[0]).length;i++){
            if (Object.keys(modelos[j])[i] == "precio") {
                listado.innerHTML += `<div class="lineas totales">${modelos[j].precioConFormato()}</div>`
            }else {
                listado.innerHTML += `<div class="lineas">${Object.values(modelos[j])[i]}</div>`
            }                    
        }
        listado.innerHTML += `<div class="lineas totales">${modelos[j].subtotalConFormato()}</div>`
        listado.innerHTML += `<div class="lineas totales">${modelos[j].igicConFormato()}</div>`
        listado.innerHTML += `<div class="lineas totales">${modelos[j].totalConFormato()}</div>`
    }
}


window.onload = async function() {
    await leer();
    console.log(modelos);
    agregaLineas();
}

let modelos = [];