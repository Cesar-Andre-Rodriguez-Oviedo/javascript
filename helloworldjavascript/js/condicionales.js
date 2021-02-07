'use strict'

// condicional if   
// Nos permite realizar comparaciones 

var num = 5;
var num2 = 6;

if(num > num2){
    console.log("El numero " + num + " es menor que: " + num2);
}else{
    console.log("El numero " + num2 + " es mayor que: " + num);
}


var hola = prompt("Ingrese primer numero:  ");
var hoal1 = prompt("Ingresa segundo numero:  ")

if(hola>0){
    
    var suma = hola + hola1;        
    console.log(Suma);

}else{
    console.log("No se pude realizar la suma si el primer valor es 0");
}



console,log(hola1);
console.log(hola);

// Operadores Logicos
/* 
AND(Y): && 
OR(O): ||
NEGACION: !
TAMBIEN SE PUEDE COLOCAR (MAS DENTRO DE ESTO)
*/

// Switch

var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 30:
        imprime = "Ya eres un adulto de 30 años"
    break;
}

console.log(imprime);