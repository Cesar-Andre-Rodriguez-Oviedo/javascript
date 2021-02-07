'use strict'

// Ejercicio 2
var suma = 0;
var num = [];
num = parseInt(prompt("Ingresa numero:   "));

while(num >= 0){
    num = parseInt(prompt("Ingresa numero:  "));
    
    suma += num;
    console.log("El numero es :  " + typeof(num));
    console.log("Y el numero es:  " + num);
    console.log("La suma es :  " + suma);
}
