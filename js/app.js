// Variables
const entrada = document.getElementById("input");
const salida = document.querySelector("#output");
const formulario = document.querySelector("#formulario");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");


// RegEx
const pattern = /[^aeiou]|(ai)|(enter)|(imes)|(ober)|(ufat)/gi;


// Listeners
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);

/* tests
//const texto = "penterrrober";
//const texto = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
//let result = texto.match(pattern);
*/

// functions

function encriptar(){
    let resultado = "";
    let encriptada = entrada.value;
    if(encriptada.length != 0){
        encriptada = encriptada.split("");
        console.log(typeof encriptada);
        for(let i=0; i<=encriptada.length; i++){
            if (encriptada[i] == "a"){
                encriptada[i] = "ai";
            }
            if (encriptada[i] == "e"){
                encriptada[i] = "enter";
            }
            if (encriptada[i] == "i"){
                encriptada[i] = "imes";
            }
            if (encriptada[i] == "o"){
                encriptada[i] = "ober";
            }
            if (encriptada[i] == "u"){
                encriptada[i] = "ufat";
            }
        }
        encriptada.forEach(letra => resultado += letra);
        salida.value = resultado;
    }else{
        salida.value = "No hay mensaje para encriptar.";
        return;
    }   
}

function desencriptar(){

    let res = "";
    salida.value = "";
    if(entrada.value.length != 0){
       let resultado = (entrada.value.match(pattern));
       for(let i=0; i<=resultado.length; i++){
        if (resultado[i] == "ai"){
            resultado[i] = "a";
        }
        if (resultado[i] == "enter"){
            resultado[i] = "e";
        }
        if (resultado[i] == "imes"){
            resultado[i] = "i";
        }
        if (resultado[i] == "ober"){
            resultado[i] = "o";
        }
        if (resultado[i] == "ufat"){
            resultado[i] = "u";
        }
    }
    resultado.forEach( elemento => res += elemento);
    salida.value = res;
    }else{
        salida.value = "No hay mensaje para desencriptar.";
        return;
    }
}


function limpiar(){
    formulario.reset();
}

function copiar(){
    if(navigator.clipboard.writeText(salida.value)){
        console.log("copiado");
    }

}


