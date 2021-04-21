//Declaración de variables
"use strict";
let anterior = ["","","",""];
let posicion =0;
let dato;
let largo = [12,80,12,12];
let tipo = ["text","text","number","number"];
let tablita = document.getElementById("tabla");
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
    
    document.getElementById("tabla").addEventListener("click",clickTabla);
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

  function clickTabla(e) {
      if (document.getElementById("prueba").classList.contains("invisible")) {
        posicion = e.path[1].rowIndex;
        if (e.path[1].rowIndex > 0) {
          e.path[1].children[4].appendChild(document.getElementById("prueba"));  
          botones(true);
        };
        for (let i=0;i<tablita.rows[0].cells.length-1;i++)
        anterior[i] =  tablita.rows[posicion].cells[i].innerHTML; 
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
    for (let i=0;i<tablita.rows[0].cells.length-1;i++){
        if (tablita.rows[posicion].cells[i].innerHTML == undefined)
            dato = ""
        else
            dato = tablita.rows[posicion].cells[i].innerHTML;
        anterior[i] =  tablita.rows[posicion].cells[i].innerHTML;   
        tablita.rows[posicion].cells[i].innerHTML = `<input type='${tipo[i]}' id='col${i}' value = '${dato}' onclick='event.stopPropagation()' height='95%' maxlength='${largo[i]}' >`;
    }
    document.getElementById("col0").focus();
    aceptarCancelar();
  }

  function grabaFila(e) {
    e.stopPropagation();
    console.log("Valor de posicion",posicion);  
    for (let i=0;i<tablita.rows[0].cells.length-1;i++){
        tablita.rows[posicion].cells[i].innerHTML = document.getElementById("col"+i).value;
    }; 
    botones(false);
    aceptarCancelar();
  }

  function borraFila(e) {
    e.stopPropagation();
    console.log(tablita.rows.length);
    for (let i=posicion;i<tablita.rows.length-1;i++){
      for(let j=0;j<tablita.rows[0].cells.length-1;j++)
        tablita.rows[i].cells[j].innerText = tablita.rows[i+1].cells[j].innerText;
    }
    for(let j=0;j<tablita.rows[0].cells.length-1;j++)
        tablita.rows[tablita.rows.length-1].cells[j].innerText = "";
    botones(false);
    
  }

  function cancelaFila(e) {
    e.stopPropagation();
    for (let j=0;j<tablita.rows[0].cells.length-1;j++)
      tablita.rows[posicion].cells[j].innerText = anterior[j];
    // borraInput();
    botones(false);
    document.getElementById("editar").disabled = false;
    document.getElementById("eliminar").disabled=false;
    document.getElementById("guardar").disabled = true;
    anterior = ["","","",""];
  }

  function borraInput() {
    for (let i=0;i<tablita.rows[0].cells.length-1;i++)
      document.getElementById("col"+i).outerHTML="";
  }

  function aceptarCancelar() {
    document.getElementById("editar").toggleAttribute("disabled");
    document.getElementById("guardar").toggleAttribute("disabled");
    document.getElementById("eliminar").toggleAttribute("disabled");
  }

