

// Callback

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2,2, sum));

// Callback --> Date
// 2do Ejercicio

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


// Practicando y Creando Calculadora
// Parametro 1= Numero
// Parametro 2= Numero
// Parametro 3= La Segunda Funcion que es la que crea el CALLBACK

var a = 5;
var b = 8;

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}

console.log("Sumar estos dos Numeros: " + a +" + "+ b + " es: " + calculadora(2,5, sumar));
console.log("Restar estos dos Numeros: " + a +" - "+ b + " es: " + calculadora(2,5, restar));
console.log("Multiplicar estos dos Numeros: " + a +" * "+ b + " es: " + calculadora(2,5, multiplicar));
console.log("Dividir estos dos Numeros: "+ a +" / "+ b + " es: " + calculadora(2,5, dividir));