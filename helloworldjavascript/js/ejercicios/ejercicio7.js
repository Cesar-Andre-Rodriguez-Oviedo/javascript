'use strict'

// Ejercicio 7

var num = parseInt(prompt("Ingresa el numero de la que quieres multiplicar"));
var lim = parseInt(prompt("Ingresa la cantidad de valores que desee que tenga la tabla"));
var i = 0 ;
for(i; i<= lim; i++){
    var resul = num * i;
    document.write("<br>"  + num +" x " + i + " =  "+resul + "<br>");
}