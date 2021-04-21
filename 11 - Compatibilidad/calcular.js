function mensaje() {
            
    // Primero se evalúan las condiciones eliminatorias 
    
    //Condición 1 : Tienen menos de 10 años de diferencia
    var edad1 = document.getElementById("edad1").value;
    var edad2 = document.getElementById("edad2").value;
    if (edad1 - edad2 > 10  || edad2 - edad1 > 10) {
        document.getElementById("respuesta").innerHTML = 'Atención: solo se pueden evaluar personas con menos de 10 años de diferencia de edad'
        return;
    }
    
    //Condicion 2 : Misma Música
    var musica1 = document.getElementById("musica1").value;
    var musica2 = document.getElementById("musica2").value;
    if (musica1 != musica2) {
        document.getElementById("respuesta").innerHTML = 'Atención: solo se pueden evaluar personas con los mismos gustos musicales'
        return;
    }

    //Condicion 4 : Sexo diferente
    var sexo1 = document.getElementById("sexo1").value;
    var sexo2 = document.getElementById("sexo2").value;
    if (sexo1 == sexo2) {
        document.getElementById("respuesta").innerHTML = 'Atención: solo se pueden evaluar personas de distinto sexo'
        return;
    }
    

    //Aquí accedemos al fichero JSON agregándole un filtro 
    
    let url = 'http://localhost:3000/signos?'; //este funciona con el servidor json-server --watch
    //let url = '/signos.json?'; //funciona en la pagina web

    //let url = 'http://127.0.0.1:5500/Compatibilidad%20(con%20Fetch/signos.json?';
    if (sexo1 == 1) {
        var filtro = "mujer="+document.getElementById("horoscopo1").value+"&hombre="+document.getElementById("horoscopo2").value;
    }else{
        var filtro = "mujer="+document.getElementById("horoscopo2").value+"&hombre="+document.getElementById("horoscopo1").value;
    }
    console.log("la URL es :"+url);
    console.log("el filtro es :"+filtro);
    fetch(url+filtro, {
        method: 'get',
    })
        .then(response => response.json() )
        .then(data => {
            console.log("RESPUESTA :")
            console.log(data);
            if (data.length == 0 ) {
                document.getElementById("respuesta").innerHTML = document.getElementById("nombre1").value + ' y '+document.getElementById("nombre2").value+' no son compatibles'        
                document.getElementById("respuesta").style.color = "red";
            }else {
                document.getElementById("respuesta").innerHTML = document.getElementById("nombre1").value + ' y '+document.getElementById("nombre2").value+' son compatibles'        
                document.getElementById("respuesta").style.color = "green";
            }
            console.log(data.length);
        })
        .catch(showError);

}

function showError(err) { 
    console.log('Muestro error', err);
}

 
  
