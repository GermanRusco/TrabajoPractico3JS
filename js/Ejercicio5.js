/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas.*/

//Vamos a ingresar el texto.
let texto=prompt("Ingrese un texto: ");
let resultado = info(texto);
document.write(resultado);

function info(texto){
// Vamos a verificar si tiene mayúsculas o minúsculas.
if(texto == texto.toUpperCase()){
    return  "el texto está formada por mayúsculas.";
}
else if (texto == texto.toLowerCase()){
    return " el texto está formada por minúsculas.";
}
else{
    return " el texto está formada por mayúsculas y minúsculas.";
}
}
