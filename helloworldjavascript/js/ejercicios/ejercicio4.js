'use strict'

// 4 ejercicio
// numeros impares 


var min = parseInt(prompt("Ingrese el primer numero que se va a tener en cuenta para el primer rango"));
var max = parseInt(prompt("Ingrese el segundo numero que se va a tener en cuenta para el segundo rango"));
var res = min % 2;
document.write("los numeros impares son:  ")
document.write("<br>");
document.write("<br>");

for(min; min<=max;min++){
    if(res != 0){
        document.write(min++ + "<br>");
    }
}

document.write("<br> Fin");