'use strict'

// Ejercicio 1  

var num = parseInt(prompt(" Escriba el primer numero:  "));
var num2 = parseInt(prompt(" Escriba el segundo numero:  "));

document.write("El primer numero ingresado fue:  " + num + "  ");

document.write("El segundo numero ingresado fue:  " + num2 + "  ");

if(num < num2){
    document.write("El "+num2+"  es el numero mayor  " );
    document.write("El "+num+"  es el numero menor  ");
}else if(num > num2){
    document.write("El "+num2+" es el numero menor");
    document.write("El" + num + " es el numero mayor" );
}else{
    document.write("Ambos numeros son iguales");
}



