function cantidadp() {
    let dato = document.getElementById("texto").value;
    dato = dato.trim();
    dato = dato.replace(/\s+/g," ");
    if (dato.length ==0) {
        document.getElementById("respuesta1").innerHTML = 0;    
    } else {
        let palabras = dato.split(" ");
        document.getElementById("respuesta1").innerHTML = palabras.length;
    }
}

function cantidadl() {
    let dato = document.getElementById("texto").value;
    dato = dato.toLowerCase();//Convierte en minusculas todo el texto.
    dato = dato.replace(/á/g,'a');
    dato = dato.replace(/é/g,'e');
    dato = dato.replace(/í/g,'i');
    dato = dato.replace(/ó/g,'o');
    dato = dato.replace(/ú/g,'u');
    let letra = document.getElementById("letra").value;
    letra = letra.toLowerCase();
    let contador = 0;
    for (var i = 0 ; i < dato.length;i++) {
        if (dato[i] == letra) {
            contador++
        }
    }
    document.getElementById("respuesta2").innerHTML = contador;
}

function cantidadtotal(){
    let dato = document.getElementById("texto").value;
    dato = dato.toLowerCase();

    dato = dato.replace(/á/g,'a');
    dato = dato.replace(/é/g,'e');
    dato = dato.replace(/í/g,'i');
    dato = dato.replace(/ó/g,'o');
    dato = dato.replace(/ú/g,'u');

    let vector = [];
    for (let i=0 ; i<26 ; i++){
        vector[i] = 0 ;

    }
    for (let j=0 ; j<dato.length ; j++){
        vector[dato.charCodeAt(j)-97]++;
    }

    // for (let j=0 ; j<26 ; j++){
    //     console.log(String.fromCharCode(j+97),"-",vector[j]);
    // }

    let tabla = document.getElementById("tabla")
    
    //table.innerHTML ="";

    while (tabla.rows.length>0){
        tabla.deleteRow(0); // Vaciamos la tabla para que no se duplique
    }

    let fila = tabla.insertRow(0);
    for (let columna = 0; columna < 5 ; columna+=2){
        fila.insertCell(0).innerHTML = 'Letra';
        fila.insertCell(1).innerHTML = 'Cantidad';
    }
    
    for (let j=0 ; j<10 ; j++){        
         fila = tabla.insertRow(j+1); //Crea una fila del 1 para delante.
         for(let columna = 0; columna < 5 ; columna+=2){
            if(j+(columna*5) < 26){
                fila.insertCell(0+columna).innerHTML = String.fromCharCode(j+(columna*5)+97);
                fila.insertCell(1+columna).innerHTML = vector[j+(columna*5)];
            }            
         }            
    
    }

    




}
    
