'use strict'

// Ejercicio 8
document.write("<h1> NUMEROS </h1>")


var num1 = parseInt(prompt("Ingresa un primer numero:  "));
var num2 = parseInt(prompt("Ingresa un segundo numero"));


while(isNaN(num1) || isNaN(num2)){
    if(isNaN(num1)){
        num1 = parseInt(prompt("Ingresa un primer numero:  "));
    }else{
        num2 = parseInt(prompt("Ingresa un segundo numero"));
    }
}

var suma = num1 + num2;
var resta1 = num1 - num2;
var sum ="La suma es :  " + "<br>" + suma;
var res ="La resta es :  " + "<br>" + resta1;
var mul ="La multiplicacion es :  " + "<br>" + num1 * num2;
var div ="La division es :  " + "<br>" + num1 / num2;

var lista = [sum , res , mul , div];
var element = lista.length;
console.log(element);


for(var i = 0; i<element; i++){
    console.log(lista[i]);
    document.write(lista[i]+"<br>");
    alert(lista[i]);
}