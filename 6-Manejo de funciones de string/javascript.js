function comprobarPalindromo(){
    let texto = document.getElementById("frase").value
    texto = texto.toLowerCase();
    texto = texto.replace(/ /g,"");
    texto = texto.replace(',','');
    texto = texto.replace('.','');
    texto = texto.replace(/á/gi,'a');
    texto = texto.replace(/é/gi,'e');
    texto = texto.replace(/í/gi,'i');
    texto = texto.replace(/ó/gi,'o');
    texto = texto.replace(/ú/gi,'u');
    let reverso = texto.split('').reverse().join('');
    if(texto == reverso){
        document.getElementById("respuesta").innerHTML = "El texto es un palindromo"
    }else{
        document.getElementById("respuesta").innerHTML = "El texto no es un palindromo"
    }
    // console.log(texto,reverso);

}