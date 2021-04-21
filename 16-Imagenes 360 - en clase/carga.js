function enviar(event) {
    event.preventDefault();
    let tabla = document.getElementById("listado");
    let lineamodelos = tabla.insertRow(tabla.rows.length);
    lineamodelos.insertCell(0).innerHTML = document.getElementById("modelo")[document.getElementById("modelo").selectedIndex].text;
    lineamodelos.insertCell(1).innerHTML = formatter.format(document.getElementById("modelo")[document.getElementById("modelo").selectedIndex].value); 
    lineamodelos.insertCell(2).innerHTML = formatter.format(document.getElementById("modelo")[document.getElementById("modelo").selectedIndex].value*0.07)
    lineamodelos.insertCell(3).innerHTML = formatter.format(document.getElementById("modelo")[document.getElementById("modelo").selectedIndex].value*1.07)

    let lineacolores= tabla.insertRow(tabla.rows.length);
    lineacolores.insertCell(0).innerHTML = document.getElementById("color")[document.getElementById("color").selectedIndex].text;
    lineacolores.insertCell(1).innerHTML = formatter.format(document.getElementById("color")[document.getElementById("color").selectedIndex].value);
    lineacolores.insertCell(2).innerHTML = formatter.format(document.getElementById("color")[document.getElementById("color").selectedIndex].value*0.07)
    lineacolores.insertCell(3).innerHTML = formatter.format(document.getElementById("color")[document.getElementById("color").selectedIndex].value*1.07)

    let lineapotencia= tabla.insertRow(tabla.rows.length);
    lineapotencia.insertCell(0).innerHTML = document.getElementById("potencia")[document.getElementById("potencia").selectedIndex].text;
    lineapotencia.insertCell(1).innerHTML = formatter.format(document.getElementById("potencia")[document.getElementById("potencia").selectedIndex].value);
    lineapotencia.insertCell(2).innerHTML = formatter.format(document.getElementById("potencia")[document.getElementById("potencia").selectedIndex].value*0.07)
    lineapotencia.insertCell(3).innerHTML = formatter.format(document.getElementById("potencia")[document.getElementById("potencia").selectedIndex].value*1.07)

    
    let lineaTotal = tabla.insertRow(tabla.rows.length);
    lineaTotal.insertCell(0).innerHTML = "";
    lineaTotal.insertCell(1).innerHTML = "";
    lineaTotal.insertCell(2).innerHTML = "Total : "
    lineaTotal.insertCell(3).innerHTML = formatter.format(total);
}


async function leer() {
    let elem = "./modelo.json";
    let obj = await fetch(elem);
    let content = await obj.text();
    modelos = JSON.parse(content).modelo;
    elem = "./color.json";
    obj = await fetch(elem);
    content = await obj.text();
    colores = JSON.parse(content).pintura;
    elem = "./caballos.json";
    obj = await fetch(elem);
    content = await obj.text();
    caballos = JSON.parse(content).potencia;
};

window.onload = async function() {
    await leer();
    
    let comboColores = document.getElementById('color')
    for (let i = 0; i < colores.length; i++) {      
        option = document.createElement('option');
        option.text = colores[i].Descripcion;
        option.value = colores[i].Precio;
        comboColores.add(option);    
        console.log(option.value = colores[i].Precio);
    }    
    let comboPotencia = document.getElementById('potencia');
    for (let i = 0; i < caballos.length; i++) {
        option = document.createElement('option');
        option.text = caballos[i].Descripcion;
        option.value = caballos[i].Precio;
        comboPotencia.add(option);    
    }    
    let comboModelos = document.getElementById('modelo');
    for (let i = 0; i < modelos.length; i++) {
        option = document.createElement('option');
        option.text = modelos[i].Descripcion;
        option.value = modelos[i].Precio;
        comboModelos.add(option);    
    }
    
    document.getElementById('precio').value = modelo[0].Precio;
   


};

function cambioModelo() {
      document.getElementById('precio').value =modelo[document.getElementById("modelo").selectedIndex].Precio;
   
}
class vehiculo{
  constructor(descripcion,precio){
      this.descripcion=descripcion;
      this.precio=precio;
  }

  igic(){                    
  
      return this.precio*0.07;
  }

  total(){
      
      return this.precio*1.07;
  }
}   

let foto = document.getElementById("foto");
      foto.addEventListener("mousedown", bajaRaton)
      foto.addEventListener("mousemove", mueveRaton);
      foto.addEventListener("mouseup", subeRaton);
      foto.addEventListener("mouseleave", subeRaton);
      function bajaRaton() {
        console.log("bajaRaton")
        clearInterval(id);
        bandera = true;

      }
      function mueveRaton(e) {
        if(bandera){
            posX = e.pageX;
            bandera = false;
        }
        if(e.buttons==1){
            if((e.pageX - posX) < -100){
            if (numCoche == 23) numCoche = 1
            else numCoche++;
            document.getElementById("foto").src = coche+numCoche+".jpg"
            posX = e.pageX;
            }
            if((e.pageX - posX) > 100){
            if (numCoche == 1) numCoche = 23
            else numCoche--;
            document.getElementById("foto").src = coche+numCoche+".jpg"
            posX = e.pageX;
            }
        }   
        //console.log("mueveRaton posicion",posX,",",e.pageX)
      }
      function subeRaton() {
        console.log("subeRaton")
        clearInterval(id);
        id=setInterval('cambiaFoto()',150);
       
      }
      let id=setInterval('cambiaFoto()',150);

      function cambiaFoto(){
        if (numCoche == 23) numCoche = 1
        else numCoche++;
        document.getElementById("foto").src = coche+numCoche+".jpg"
      }
      let caballos = [];
        let colores = [];
        let modelos = [];
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
        });

      let coche = "./imagenes/Arona/coche";
      let numCoche = 1;
      let posX;
      let bandera = false;