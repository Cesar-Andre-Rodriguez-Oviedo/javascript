'use strict'

// Operadores

var numero1 = 7;
var numero2 = 12;
var oper = numero1 + numero2;
var resta = numero2 - numero1;
var multi = numero1 * numero2;
var divi = numero2/numero1;
var porcentaje  = numero2 % numero1;

console.log("El porcentaje de esto es:  " + porcentaje)
console.log("resta:  "+resta);
console.log("multiplicacion:  "+multi);
console.log("division:  " + divi);
console.log("Resultado de la operacion es:  "+oper);



// Tipos de datos 
// Son los tipicos tipos de datos de todos los lenguajes 
// int string double float 

var numero_entero = 4444;
var cadena_texto = "hola como estas ?????";
var verdadero_falso = true;
var falso_verdadero = false;
var menor = 5<4;
var menor1 = 5>4;
var decimal = 12.321;

console.log("La comparaicon de 5 > 4 es:  " + menor1);
console.log("La comparaicon de 5 < 4 es:  " + menor);
console.log("Este elemento es falso:  " + falso_verdadero);
console.log("Este elemento es verdadero:  " + verdadero_falso);
console.log("El numero entero es:  "+numero_entero);
console.log("La cadena de texot es:  " + cadena_texto);

// La funcion number 

var nunero_falso = "33";
console.log(Number(nunero_falso) + 7 );


var numero_text = "251";
console.log(Number(numero_text) + 10 );

// Tambien esta la funcion parseInt y parseFloat y funcionan de la misma manera de Number 
// Tmabien esta la funcion String Que seria para cambiar un elemento a String o cadena

// Para saber el tipo de dato que es una variable 

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof falso_verdadero);
console.log(typeof decimal);