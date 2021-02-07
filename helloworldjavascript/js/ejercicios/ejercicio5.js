'use strict'

// Ejercicio 4
// Muestre todos los numeros divisores de un numero intorduce en promt

var i = 0;
var num1 = parseInt(prompt("Introduce el numero que quieres obtener los divisores"));
document.write("<br>");
document.write("Los divisores de "+num1+ " son:  ");
document.write("<br>");


document.write("<br>");
document.write("Esto es con el ciclo for:  " + "<br>");

for(var i = 1; i <= num1; i++){
    var result = num1 % i;
    if(result == 0){
    document.write("<br>" + i);
    }
}

document.write("<br>");
document.write("<br>"+"Esto es con el ciclo while:  " + "<br>");
document.write("La cosa es que tengo que comentar el ciclo for para que esta se relaize." + "<br>");


while(i <= num1){
    var result = num1 % i;
    if(result == 0){
        document.write("<br>"+ i);
    }
    i++;
}