import {Persona} from "./modelo.js"

async function leer() {
    let elem = "./personas.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    let objeto = new Persona();
    JSON.parse(content, function (key, value) {
        if (typeof value=="object" && typeof objeto.nombre != "undefined"){
            modelos.push(objeto);
            objeto = new Persona();    
        } else {
            objeto[key] = value;
        }
    });
};

function agregaLineas() {
    document.documentElement.style.setProperty("--columnas",4);
    for (let i=0;i<Object.keys(modelos[0]).length;i++){
        listado.innerHTML += `<div class="linea titulos">${Object.keys(modelos[0])[i]}</div>`
    }

    listado.innerHTML += `<div class="linea titulos">EDAD</div>`
    for (let j= 0;j<modelos.length;j++) {
        for (let i=0;i<Object.keys(modelos[0]).length-1;i++){
            listado.innerHTML += `<div class="linea">${Object.values(modelos[j])[i]}</div>`
        }
        listado.innerHTML += `<div class="linea">${modelos[j].fechaConFormato()}</div>`
        listado.innerHTML += `<div class="linea">${modelos[j].edad()}</div>`
    }

}

window.onload = async function() {
    await leer();
    console.log(modelos);
    agregaLineas();
}

let modelos = [];
