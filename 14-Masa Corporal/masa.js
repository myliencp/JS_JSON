function calcularIMC(){
    peso = document.getElementById("peso");
	altura = document.getElementById("altura");
	imc = document.getElementById("respuesta1");
	lectura = document.getElementById("respuesta2");
    let edad = document.getElementById("edad");
    let ejercicio =document.getElementById("ejercicio").value;
    let calorias=0;
    let factor = [1.2, 1.375, 1.55, 1.72, 1.9];
  

    /*CALCULO IMC*/

    if(peso.value!="" && altura.value!="" && edad.value!=""){
			imcx = (peso.value / (altura.value* altura.value)).toFixed(2);
			imc.innerHTML = imcx
			console.log(imcx);		
        /*CALCULO DESCRIPCION IMC*/
        if(imcx<16){
            lectura.innerHTML="Delgadez Severa";    
        }
        else if(imcx<17){
            lectura.innerHTML="Delgadez Moderada";    
        }
        else if(imcx<18.5){
            lectura.innerHTML="Delgadez Aceptable";   
        }
        else if(imcx<25){
            lectura.innerHTML="Peso Normal";    
        }
        else if(imcx<30){
            lectura.innerHTML="Sobrepeso";    
        }
        else if(imcx<35){
            lectura.innerHTML="Obeso: Tipo I";    
        }
        else if(imcx<40){
            lectura.innerHTML="Obeso: Tipo II";   
        }
        else if(imcx>=40){
            lectura.innerHTML="Obeso: Tipo III";    
        }

        }else{
            alert("Debes ingresar peso, altura y edad.")
	}
	
      /* 
    web: https://computerhoy.com/noticias/life/esta-formula-te-dice-cuantas-calorias-debes-comer-dia-adelgazar-286837
    Hombres: TMB = 66 + (13,7 x peso en kg) + (5 x altura en cm) - (6,75 x edad en años)
    Mujeres: TMB = 655 + (9,6 x peso en kg) + (1.8 x altura en cm) - (4,7 x edad en años) 
    */

    //CALCULO CALORIAS
  
    if (document.getElementById("sexo").value==1)  {
        calorias = ((66 + (13.7 * peso.value) + (5 * altura.value * 100) - (6.75 * edad.value)) * factor[ejercicio]).toFixed(0);
        console.log(calorias);
        
    } else {
        calorias = ((655 + (9.6 * peso.value) + (1.8 * altura.value * 100) - (4.7 * edad.value)) * factor[ejercicio]).toFixed(0); 
    }


    document.getElementById("respuesta3").innerHTML = calorias;    
    document.getElementById("respuesta4").innerHTML = calorias - 1000;        
    console.log(calorias);
}



