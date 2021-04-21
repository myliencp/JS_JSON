//Declaración de variables
"use strict";
let posicion =0;
let dato;
let largo = [12,80,12,12];
let tipo = ["text","text","number","number"];
let tablita = document.getElementById("tablita");
let cp= [];

async function leer() {
    let elem = "./cp.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    cp = JSON.parse(content);
};

window.onload = async function() {
    
    // Hace invisibles los botones
    document.getElementById("prueba").classList.remove("visible");
    document.getElementById("prueba").classList.add("invisible");

    //Asociación de eventos onclick
    
    document.getElementById("tablita").addEventListener("click", clicktablita);
    document.getElementById("editar").addEventListener("click", editaFila);
    document.getElementById("guardar").addEventListener("click", grabaFila);
    document.getElementById("eliminar").addEventListener("click", borraFila);
    document.getElementById("cancelar").addEventListener("click", cancelaFila);
    await leer();
  }
  function cargaPoblacion() {
      let respuesta = "No existe el codigo";
      for (let i=0;i<cp.length;i++)
        if (cp[i].codigo_postal == document.getElementById("cp").value)
            respuesta = cp[i].municipio_nombre;
      document.getElementById("poblacion").innerHTML = respuesta;
  }

  function clicktablita(e) {
      posicion = e.path[1].rowIndex;
      if (e.path[1].rowIndex > 0) {
        e.path[1].children[4].appendChild(document.getElementById("prueba"));  
        botones(true);
      };
  }

  function botones(ver) {
      if (ver) {
        document.getElementById("prueba").classList.remove("invisible");
        document.getElementById("prueba").classList.add("visible");
      } else {
        document.getElementById("prueba").classList.add("invisible");
        document.getElementById("prueba").classList.remove("visible");
        ;                
      }
        
  }
  function editaFila(e){
    e.stopPropagation();
    console.log("En editar",nif,tablita,posicion,poblacion);
    for (let i=0;i<tablita.rows[0].cells.length-1;i++){
        if (tablita.rows[posicion].cells[i].value == undefined)
            dato = ""
        else
            dato = tablita.rows[posicion].cells[i].value;
        tablita.rows[posicion].cells[i].innerHTML = `<input type='${tipo[i]}' id='col${i}' value = '${dato}' onclick='event.stopPropagation()' height='95%' maxlength='${largo[i]}' >`;
        console.log(tablita.rows[posicion].cells[i].innerHTML);
    }
    document.getElementById("col0").focus();
  }

  function grabaFila(e) {
    e.stopPropagation();
    console.log("Valor de posicion",posicion);  
    for (let i=0;i<tablita.rows[0].cells.length-1;i++){
        tablita.rows[posicion].cells[i].innerHTML = document.getElementById("col"+i).value;
    }; 
  }

  function borraFila() {

  }

  function cancelaFila(e) {
    e.stopPropagation();
    borraInput();
    botones(false);
  }

  function borraInput() {
    for (let i=0;i<tablita.rows[0].cells.length-1;i++)
      document.getElementById("col"+i).outerHTML="";
  }

