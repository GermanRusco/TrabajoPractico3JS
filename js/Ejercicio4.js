/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla 
el resultado devuelto por la función.*/

//Solicitamos un número.
let numero = parseInt(prompt("Ingrese un número entero: "));

//Vamos a solicitar si el número es par o impar.
let resultado = Par_o_Impar(numero);
document.write("El número " + numero + " es " + resultado);

//Vamos a realizar la función que consulta si el número es par o impar.
function Par_o_Impar(numero){
    if(numero%2==0){
        return "par";
    }else{
        return "impar";
    }
} 