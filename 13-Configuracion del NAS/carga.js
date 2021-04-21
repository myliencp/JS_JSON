function enviar(event) {
    event.preventDefault();
    let tabla = document.getElementById("listado");
    let fila = tabla.insertRow(tabla.rows.length);
    fila.insertCell(0).innerHTML = document.getElementById("modelo").value;
    fila.insertCell(1).innerHTML = document.getElementById("nombre").value;
    fila.insertCell(2).innerHTML = formatter.format(document.getElementById("precio").value);
    let total = parseFloat(document.getElementById("precio").value);
    fila.insertCell(3).innerHTML = formatter.format(total);
    let subtotal = 0;
    console.log(document.getElementById("cat1").checked);
    if (document.getElementById("cat1").checked){
        console.log("Elemento:",document.getElementById("tipoDisco1").selectedIndex);
        let fila = tabla.insertRow(tabla.rows.length);
        fila.insertCell(0).innerHTML = document.getElementById("discos1").value;
        fila.insertCell(1).innerHTML = document.getElementById("tipoDisco1")[document.getElementById("tipoDisco1").selectedIndex].text;
        fila.insertCell(2).innerHTML = formatter.format(document.getElementById("tipoDisco1")[document.getElementById("tipoDisco1").selectedIndex].value)
        subtotal = parseFloat(document.getElementById("tipoDisco1")[document.getElementById("tipoDisco1").selectedIndex].value)*parseFloat(document.getElementById("discos1").value);
        total +=subtotal;
        fila.insertCell(3).innerHTML = formatter.format(subtotal);
        console.log("Valor Total:",total);
    } if (document.getElementById("cat2").checked){
        console.log("Elemento:",document.getElementById("tipoDisco2").selectedIndex);
        let fila = tabla.insertRow(tabla.rows.length);
        fila.insertCell(0).innerHTML = document.getElementById("discos2").value;
        fila.insertCell(1).innerHTML = document.getElementById("tipoDisco2")[document.getElementById("tipoDisco2").selectedIndex].text;
        fila.insertCell(2).innerHTML = formatter.format(document.getElementById("tipoDisco2")[document.getElementById("tipoDisco2").selectedIndex].value)
        subtotal = parseFloat(document.getElementById("tipoDisco2")[document.getElementById("tipoDisco2").selectedIndex].value)*parseFloat(document.getElementById("discos2").value);
        total +=subtotal;
        fila.insertCell(3).innerHTML = formatter.format(subtotal);
        console.log("Valor Total:",total);
    }
    let lineaAmpliaciones = tabla.insertRow(tabla.rows.length);
    lineaAmpliaciones.insertCell(0).innerHTML = "1";
    lineaAmpliaciones.insertCell(1).innerHTML = document.getElementById("ampliacion")[document.getElementById("ampliacion").selectedIndex].text;
    lineaAmpliaciones.insertCell(2).innerHTML = formatter.format(document.getElementById("ampliacion")[document.getElementById("ampliacion").selectedIndex].value);
    total += parseFloat(ampliaciones[document.getElementById("ampliacion").selectedIndex].Precio)
    lineaAmpliaciones.insertCell(3).innerHTML = formatter.format(ampliaciones[document.getElementById("ampliacion").selectedIndex].value);
    let lineaTotal = tabla.insertRow(tabla.rows.length);
    lineaTotal.insertCell(0).innerHTML = "";
    lineaTotal.insertCell(1).innerHTML = "";
    lineaTotal.insertCell(2).innerHTML = "Total : "
    lineaTotal.insertCell(3).innerHTML = formatter.format(total);
}


async function leer() {
    let elem = "./ampliacion.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    ampliaciones = JSON.parse(content).memoria;
    elem = "./discos.json";
    obj = await fetch(elem);
    content = await obj.text();
    discos = JSON.parse(content).unidades;
    elem = "./modelos.json";
    obj = await fetch(elem);
    content = await obj.text();
    modelos = JSON.parse(content).modelos;
};

window.onload = async function() {
    await leer();
    console.log(discos);
    let porDefectoDisco1 = document.createElement('option');
    porDefectoDisco1.text = 'Sin Discos';
    let porDefectoDisco2 = document.createElement('option');
    porDefectoDisco2.text = 'Sin Discos';   
    let comboDisco1 = document.getElementById('tipoDisco1');
    let comboDisco2 = document.getElementById('tipoDisco2');
    comboDisco1.length = 0;
    comboDisco2.length = 0;
 
    comboDisco1.add(porDefectoDisco1);
    comboDisco1.selectedIndex = 0;
    comboDisco2.add(porDefectoDisco2);
    comboDisco2.selectedIndex = 0;
    for (let i = 0; i < discos.length; i++) {
      
        if (discos[i].Categoria ==1) {
            option = document.createElement('option');
            option.text = discos[i].Descripcion;
            option.value = discos[i].Precio;
            comboDisco1.add(option);    
            console.log(option.value = discos[i].Precio);
        }
        if (discos[i].Categoria ==2) {
            option = document.createElement('option');
            option.text = discos[i].Descripcion;
            option.value = discos[i].Precio;
            comboDisco2.add(option);
        }
    };
    let porDefectoAmpliacion = document.createElement('option');
    porDefectoAmpliacion.text = 'Sin Ampliación';
    let comboAmpliacion = document.getElementById('ampliacion');
    comboAmpliacion.add(porDefectoAmpliacion);
    comboAmpliacion.selectedIndex = 0;
    for (let i = 0; i < ampliaciones.length; i++) {
        option = document.createElement('option');
        option.text = ampliaciones[i].Descripcion;
        option.value = ampliaciones[i].Precio;
        comboAmpliacion.add(option);    
    }    
    let comboModelos = document.getElementById('modelo');
    for (let i = 0; i < modelos.length; i++) {
        option = document.createElement('option');
        option.text = modelos[i].codigo;
        option.value = modelos[i].codigo;
        comboModelos.add(option);    
    }    
    document.getElementById('nombre').value = modelos[0].Descripcion;
    console.log(modelos[0].Descripcion);
    document.getElementById('precio').value = modelos[0].Precio;
    document.getElementById('foto').src = "./imagenes/"+modelos[document.getElementById("modelo").selectedIndex].codigo+".jpg";
    document.getElementById('discos1').max = modelos[0].Discos;
    document.getElementById('discos2').max = modelos[0].Discos;

};

function cambioModelo() {
    document.getElementById('nombre').value = modelos[document.getElementById("modelo").selectedIndex].Descripcion;
    document.getElementById('precio').value =modelos[document.getElementById("modelo").selectedIndex].Precio;
    document.getElementById('foto').src = "./imagenes/"+modelos[document.getElementById("modelo").selectedIndex].codigo+".jpg";
    document.getElementById('discos1').max = modelos[document.getElementById("modelo").selectedIndex].Discos;
    document.getElementById('discos2').max = modelos[document.getElementById("modelo").selectedIndex].Discos;
}


function cambiaCat() {
    document.getElementById("tipoDisco1").toggleAttribute("disabled");
    document.getElementById("tipoDisco2").toggleAttribute("disabled");
    document.getElementById("discos1").toggleAttribute("disabled");
    document.getElementById("discos2").toggleAttribute("disabled");
    document.getElementById("discos1").innerText = 0;
    document.getElementById("discos2").innerText = 0;
}

let ampliaciones = [];
let discos = [];
let modelos = [];
const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
        });