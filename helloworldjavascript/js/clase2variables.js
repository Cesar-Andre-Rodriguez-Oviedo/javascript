//Para usar el modo stricto de java script 
'use strict' //Esto es para que use un modo estricto y se puedan aplicar buenas practicas declarando todo lo que debemos usar


//Variables
//Una variable es un contenedor de informacion
// las variables se puden definir de dos formas  que es con  la palabra reservada var y la otra palabra reservada es let
// La palabra reservada var se utiliza para todo el documeto y esa palabra se podra utilizar en todo el documento 

var Pais = "Peru";
var Continente = "Latam";
var Mundo = "Tierra";
var Nun1 = 2;
var Nun = 3;
var resul = Nun1 + Nun; 
var Año = 2021;


//Palabra reservada let
//La palabra reservada let se utiliza solo en bloque 
let prueba = "prueba";
let numberone = 123;
let numbertwo = 123;
let result = numberone + numbertwo +" esto es el resultante de la suma";

/*Para concatenar */
var Pais_continente = Pais + " " + Continente;
var Pais_continente_año = Pais + " " + Continente + " " + Año; 

console.log(Pais);
console.log(Continente);
console.log(Mundo);
console.log(resul);
console.log(Año);
console.log(Pais_continente);
console.log(Pais_continente_año);


console.log(result);
/* Las alertas con las varaibles */

alert("Hola estamos en "+Pais_continente_año+" :)");
alert("Esto es una variable declarada con "+prueba);