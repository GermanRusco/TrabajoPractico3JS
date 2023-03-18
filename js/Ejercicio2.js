/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

//Primero vamos a crear las variables ciudad y el array donde lo vamos a guardar. 

let ciudad;
let ciudades = [];

//Utilizando do-while vamos a solicitar que ingresen las ciudades que queremos guardar en el array.
do{
    ciudad=prompt("Ingrese una ciudad: ");
    if(ciudad!=null){
        ciudades.push(ciudad);
    }
} while(ciudad!=null);
if(ciudad===null){
    document.write("<h3>Array Ciudades</h3>");
    document.write('<ol>');
    document.write(`<label>[${ciudades}]</label>`);
    document.write('</ol>');
    document.write("<hr>");
    document.write("<h3>Longitud del Array Ciudades</h3>");
    document.write('<ol>');
    document.write(`"<label>${ciudades.length}</label>"`);
    document.write('</ol>');
    document.write("<hr>");
    document.write("<h3>Primer, Tercero y Ultimo elemento del array Ciudades</h3>");
    document.write('<ol>');
    for (let i = 0; i < ciudades.length; i++) {
        if(i==0){
            document.write(`La primera ciudad es ${ciudades[0]}`);
            document.write("<br>");
        }
        if (i==2){
            document.write(`La tercera ciudad es ${ciudades[2]}`);
            document.write("<br>");
        }
        if(i==(ciudades.length-1)){
            document.write(`La última ciudad es ${ciudades[(ciudades.length-1)]}`);
            document.write("<br>"); 
        }
    }
    document.write('</ol>');
    document.write("<hr>");
    document.write("<h3>Agregamos París al final del Array de Ciudades </h3>");
    ciudades.push("París");
    document.write('<ol>');
    document.write(`Se agrego como última ciudad a ${ciudades[ciudades.length-1]}`);
    document.write('</ol>');
    document.write("<h4>Nuevo array Ciudades</h4>");
    document.write('<ol>');
    document.write(`<label>[${ciudades}] </label>`);
    document.write('</ol>');
    document.write("<hr>");
    document.write("<h3>Segundo elemento del array Ciudades</h3>");
    document.write('<ol>');
    document.write(`El segundo elemento es ${ciudades[1]}`);
    document.write('</ol>');
    document.write("<h3>Se sustituye el segundo elemento del Array de Ciudades </h3>");
    document.write('<ol>');
    let elemento = ciudades[1];
    document.write(` <label>${elemento}  </label>`);
    document.write(`<h5>Cambiamos ${elemento} por Barcelona</h5>`);
    document.write('</ol>');
    ciudades[1]="Barcelona";
    document.write("<h4>Nuevo array Ciudades</h4>");
    document.write('<ol>');
    document.write(`<label>[${ciudades}] </label>`);
    document.write('</ol>');
}
