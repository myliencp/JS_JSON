//Declaración de variables
let posicion =0;
let tabla = document.getElementById("tabla");
let cp= [];

async function leer() {
    let elem = "./cp.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    cp = JSON.parse(content);
};

window.onload = async function() {
    await leer();
    // Hace invisibles los botones
    document.getElementById("prueba").className = "invisible";

    //Asociación de eventos onclick
    document.getElementById("editar").addEventListener("click", editaFila);
    document.getElementById("guardar").addEventListener("click", grabaFila);
    document.getElementById("eliminar").addEventListener("click", borraFila);
    document.getElementById("cancelar").addEventListener("click", cancelaFila);
   
  }
  function cargaPoblacion() {
      let respuesta = "No existe el codigo";
      for (let i=0;i<cp.length;i++)
        if (cp[i].codigo_postal == document.getElementById("cp").value)
            respuesta = cp[i].municipio_nombre;
      document.getElementById("poblacion").innerHTML = respuesta;
  }

  function clickTabla(e) {
      posicion = e.path[1].rowIndex;
      if (e.path[1].rowIndex > 0) {
        e.path[1].children[4].appendChild(document.getElementById("prueba"));  
        botones(true);
      }else {
        botones(false);
      };
  }
  function botones(ver) {
      console.log("Entrando a botones",ver);
      if (ver) {
        document.getElementById("prueba").className = "";
      } else {
        document.getElementById("prueba").className = "invisible";
        console.log(document.getElementById("prueba").className);                
      }
        
  }
  function editaFila(){
    let dato = tabla.rows[posicion].cells[0].value;
    tabla.rows[posicion].cells[0].innerHTML = `<input type='text' id='codigo' value = "${dato}">´
  }
  function grabaFila() {

  }
  function borraFila() {

  }
  function cancelaFila() {
    botones(false);
  }