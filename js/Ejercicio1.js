//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

//Primero vamos a crear el array con los meses.
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

//Ahora vamos a mostrarlos en forma de lista.
document.write("<h1>Meses del año</h1>");
document.write('<ul>');
for(i=0;i<meses.length;i++){
    let elementos = meses[i];
    document.write(`<li>${elementos}</li>`);
}
document.write('<ul>');
