
function cantidadp() {
    let texto = document.getElementById("texto").value;
    //Reemplazamos los saltos de linea por espacios si hace falta
    texto = texto.replace (/\r?\n/g," ");

    //Reemplazamos los espacios seguidos por uno solo
    texto = texto.replace (/[ ]+/g," ");

    //Quitarmos los espacios del principio y del final si es que hay
    texto = texto.replace (/^ /,"");
    texto = texto.replace (/ $/,"");

    //Troceamos el texto por los espacios
    var textoTroceado = texto.split (" ");

    //Contamos todos los trozos de cadenas que existen
    var numeroPalabras = textoTroceado.length;

    //Mostramos el número de palabras
    document.getElementById("respuesta1").innerHTML = textoTroceado.length;
}

function cantidadl() {
    let texto = document.getElementById("texto").value;

    //Guardamos la letra a buscar
    var letra = document.getElementById("letra").value;

    //Variable contador
    var contador = 0

    //Quitar tildes al texto (de mayusculas y minusculas) para contarlo
    texto = texto.replace(/á/gi,'a');
    texto = texto.replace(/é/gi,'e');
    texto = texto.replace(/í/gi,'i');
    texto = texto.replace(/ó/gi,'o');
    texto = texto.replace(/ú/gi,'u');
    
    //Bucle de busqueda de letra
    for (var i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra) contador++
    }
    document.getElementById("respuesta2").innerHTML = 'la letra "'+ letra + '" aparece ' + contador + ' veces';
}

function cantidadcl() {
    let texto = document.getElementById("texto").value;

    //Quitar tildes al texto (de mayusculas y minusculas) para contarlo
    texto = texto.replace(/á/gi,'a');
    texto = texto.replace(/é/gi,'e');
    texto = texto.replace(/í/gi,'i');
    texto = texto.replace(/ó/gi,'o');
    texto = texto.replace(/ú/gi,'u');

    //Quitar espacios
    texto = texto.replace(/ /gi,"");

    //Convertimos todo el texto en minusculas
    texto = texto.toLowerCase();

    //console.log("a".charCodeAt(0)); da el numero 97
    //console.log("z".charCodeAt(0)); da el numero 122
    
    console.log(texto) //muestra en la consola todo el texto en minusculas y sin tildes

    //Tenemos que tener un vector de 122-97+1 de largo = 26 letras

    //Primero pongo todo el vector en cero
    var cuentaletras = [];
    for (var i = 0; i < 26; i++) {
        cuentaletras[i] = 0;
    }

    //Cargo la cantidad de letras en cada elemento
    for (var i = 0; i < texto.length; i++) {
        cuentaletras[texto.charCodeAt(i)-97]++
    }

    //Muestro por consola la cantidad de letras de cada una y el total acumulado
    var saldo = 0;
    for (var i = 0; i < cuentaletras.length; i++) {
        saldo = saldo + cuentaletras[i];
        console.log(String.fromCharCode(i+97)+" - "+cuentaletras[i]);
    }    
    console.log("Total de letras texto: ",texto.length,"Total contadas:",saldo);

    var mitabla = document.getElementById("tabla")
    var titulo = mitabla.insertRow(0);
    for (var i = 0;i<5;i+=2) {
        titulo.insertCell(i).innerHTML = "Letra";
        titulo.insertCell(i+1).innerHTML = "Cantidad";
        mitabla.rows[0].cells[i].style.width = "10%";
        mitabla.rows[0].cells[i+1].style.width = "20%";
        titulo.style.textAlign = "center";
    }
    
    var z = 0;
    for (var i = 0; i < (cuentaletras.length/3); i++) {
        x = mitabla.insertRow(i+1);
        x.style.textAlign = "center";
        for (var j = 0;j < 5;j+=2) {
            if (z<cuentaletras.length) {
                x.insertCell(j).innerHTML = String.fromCharCode(z+97);
                x.insertCell(j+1).innerHTML = cuentaletras[z];
                z++;}
            else {
                x.insertCell(j).innerHTML = '';
                x.insertCell(j).innerHTML = '';    
            }    
        }
        /*txt=document.createTextNode(String.fromCharCode(i+97));
        tdletra.appendChild(txt);
        txt=document.createTextNode(cuentaletras[i]);
        tdcantidad.appendChild(txt);
        tr.appendChild(tdletra);
        tr.appendChild(tdcantidad);
        mitabla.append(tr);*/
    }
    
    
}

//Estudiar charCodeAt(indice)
//https://www.lawebdelprogramador.com/codigo/JavaScript/4937-Llenar-una-tabla-con-alumnos-y-edades.html