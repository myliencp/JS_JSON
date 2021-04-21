function rellenarTabla(){
    let dni = document.getElementById("dni").value + document.getElementById("dniL").innerText;
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let tel = document.getElementById("telefono").value;
    let fila="<tr><td>"+dni+"<tr><td>"+nom+"</td><td>"+ape +"</td><td>"+tel +"</td></tr>";

    let btn = document.createElement("tr");
   	btn.innerHTML=fila;
    document.getElementById("datos").appendChild(btn);
    
}

function letraDNI(){
     
        if(document.getElementById("dni") != null){

            let dni = document.getElementById("dni").value;
            let cadena="TRWAGMYFPDXBNJZSQVHLCKET";
            let posicion = dni%23;
            let letra = cadena.substring(posicion,posicion+1);
            letra = letra.toUpperCase();
            document.getElementById("dniL").innerHTML = letra;
        }
        
}



function validacion() {

        varDNI=document.getElementById("dni").value + document.getElementById("dniL").innerText;
        if (varDNI == null || varDNI.length == 0 || /(^([0-9]{8,8}\-[A-Z])|^)$/.test(varDNI) ) {
        alert('[ERROR] El contenido del DNI no es válido.');
        return false;  }

        varNombre = document.getElementById("nombre").value;
        if (varNombre == null || varNombre.length == 0 || /^\s+$/.test(varNombre)) {
          // Si no se cumple la condicion...
          alert('[ERROR] Por favor indica el nombre.');
          return false;
        }else
            varApellidos = document.getElementById("apellidos").value;        
            if (varApellidos == null || varApellidos.length == 0 || /^\s+$/.test(varApellidos)) {
            // Si no se cumple la condicion...
            alert('[ERROR] Por favor, indica los apellidos');
            return false;
        }else 
            varTelefono = document.getElementById("telefono").value;        
            if ( !(/^\d{9}$/.test(varTelefono)) ) {
          // Si no se cumple la condicion...
          alert('[ERROR] El teléfono debe tener un valor de 9 digitos');
          return false;
        }
      
        // Si el script ha llegado a este punto, todas las condiciones
        // se han cumplido, por lo que introducimos los datos en la tabla.
        rellenarTabla();
}

function resetea(){       
        document.getElementById("formulario").reset();
        document.getElementById("dniL").innerText = null        
      
}

