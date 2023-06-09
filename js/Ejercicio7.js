/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del
1 al 10 del número elegido por el usuario.*/

//Vamos a ingresar el número que deseamos su tabla de multiplicar.
let numero = parseInt(prompt("Ingrese un número entero: "));

if (!isNaN(numero)) {
    Tabla_Multiplicar(numero);
  }

//Vamos a crear la función.
function Tabla_Multiplicar(numero){
    document.write("<table border>");
    document.write("<thead>");
    document.write("<tr>");
    document.write("<th>Tabla</th>");
    document.write("<th>Resultado</th>");
    document.write("</tr>");
    document.write("</thead>");
    document.write("<tbody>");
    for(let i=1;i<=10;i++){
        document.write("<tr>");
        document.write(`<td>${numero}X${i}</td>`);
        document.write(`<td>${numero * i}</td>`);
        document.write("</tr>");
    }
    document.write("</tbody>");
    document.write("</table>");
}