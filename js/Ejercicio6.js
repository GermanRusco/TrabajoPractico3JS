/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/

//Solicitamos que ingresen los datos del rectánfulo
let base = parseFloat(prompt("Ingrese base del rectangulo"));
let altura = parseFloat(prompt("Ingrese Altura del rectangulo"));


//Vamos a crear una función para calcular el perimetro de un rectángulo.
function perimetro(a,b){
    let per=2*(a+b)
    return per;
}

if(! isNaN(base) && ! isNaN(altura)){
    let resultado = calcularPerimetro(base,altura);
    document.write(`<h3>Su base es: ${base} y Su Altura es: ${altura}</h3>`);
    document.write(`<h3>Su perímetro es: ${resultado}</h3>`);
}

function calcularPerimetro (ingresoBase, ingresoAltura){
    let resultado = 2*(ingresoBase+ingresoAltura);
    return resultado.toFixed(2);
}