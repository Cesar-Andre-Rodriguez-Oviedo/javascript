'use strict'

// Ejercicio 6

var lim =  parseInt(prompt("Escriba el rango de los numeros pares e imapres que deseas saber"));

while(isNaN(lim)){
    lim = parseInt(prompt("Escriba un valor entero"));
}

for(var  i = 0 ; i <= lim; i++){
    if(i % 2 == 0){
        document.write("<br>"+"Pares");
        document.write(i);
    }else{
        document.write("<br>"+"Impares");
        document.write(i);
    }
}   