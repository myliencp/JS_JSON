  //window.alert("Esto usa una \t tabulación ")
  //window.alert("Esto usa un \n cambio de línea")
  //window.alert("Esto es la barra invertida \\ ")
  //window.alert("Esto usa un \r retorno de carro")
  

  function cambiacolorfondo() {
    document.body.style.backgroundColor = document.getElementById("cambiacolB").value;
    
    console.log("Codigo del color de fondo elegido: "+document.getElementById("cambiacolB").value);
  }

  function cambiacolortitulos() {
    var elementosH2 = document.getElementsByTagName('h2');
    console.log(typeof elementosH2)

    for (var i = 0; i < elementosH2.length; i++) {
      // elementosH2[i].style.background = 'green'; cambia el color de fondo
      elementosH2[i].style.color = document.getElementById("cambiacolH").value;
      console.log("Codigo del color de fondo elegido: "+document.getElementById("cambiacolH").value);
    }
  }

    function cambiatitulos() {
      document.getElementById("titulo").innerHTML = document.getElementById("cambiatit").value;
      console.log("Nuevo Titulo : "+document.getElementById("cambiatit").value);
    }

    function cambiafoto() {
      if (document.body.style.backgroundImage != 'none') 
      {
            document.body.style.backgroundImage = 'none';
      } else {
            document.body.style.backgroundImage = 'url("playa.jpg")';
            document.body.style.backgroundRepeat = 'no-repeat';
      }
    }

    function buscafoto() {
      var lector = new FileReader();
      lector.readAsDataURL(document.getElementById("buscar").files[0]);
      lector.onload = function () {
        var fichero = lector.result;
        console.log("Stream del fichero :"+fichero);
        document.body.style.backgroundImage = 'url('+fichero+')';
      }  

      console.log("Comprobando nombre de archivo");
      console.log(document.getElementById("buscar").value);
      console.log(document.getElementById("buscar").files[0].name);

    }
    

    /*window.addEventListener("load", function() {
      document.getElementById("buscar").onchange = function(event) {
        var reader = new FileReader();
        //console.log(event.srcElement.files[0]);
        reader.readAsDataURL(document.getElementById("buscar").files[0]);
        reader.onload = function () {
        var fileContent = reader.result;
          document.body.style.backgroundImage = 'url('+fileContent+')';
        }
    }});*/
  
/* Cargar fichero de disco
https://www.quora.com/How-can-I-get-Absolute-path-of-a-file-using-javascript
https://stackoverflow.com/questions/6669228/setting-backgroundimage-style-from-a-filereader
*/