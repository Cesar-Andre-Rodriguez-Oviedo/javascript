'use strict';

// Funciones y metodos

var numero = 444;
var texto1 = "Bienvenido al curso 1 o el curso 2 o no se";
var texto2 = "curso";

var busqueda = texto1.indexOf("curso"); /* Es para colocar una busqueda de la palabra en mencion tambien esta la palabra search */
console.log("Esta palabra empiesa en el caracter :  "+busqueda);
/* .match nos devuelve una coleccion que tengamos en la variable */
var busqueda = texto1.match("curso");
console.log( busqueda);

/* Si lo colocamos el /palabra/gi el gi es para colocar un busqueda global */
var busqueda = texto1.match(/curso/g);
console.log( busqueda);

/* Subrtr es para sacar carateres desde los paramtros establecios  */
var busqueda = texto1.substr(14,5); //Apartir del caracter 14 saque 5 letras en adelante
console.log( busqueda);

/* .charAt Sirve para sacar una letra en concreto */
var busqueda = texto1.charAt(27);
console.log( busqueda);

/* startsWith() busca una palabra y si la enuentra devuelve true y si  no la encuentra es false solo busca lo que esta al inicio*/
/* Tambien lo puedes cambiar por el endsWith */
var busqueda = texto1.startsWith("Bienvenido");
console.log( busqueda);

/* Luego esta el .includes debes buscar la palabra exacta */
var busqueda = texto1.includes("no");
console.log(busqueda);

/* .replace Para reemplazar un texto entero con otro */
var busqueda = texto1.replace("no", "hi");
console.log(busqueda);

/*.slice nos permite separar el string a partir del caracter dadp */
var busqueda  = texto1.slice(4, 14);
console.log(busqueda);

/*split() sirve para recoratar las palabras y meterlas en un array , si lo separas en espacios tendrias muchos mas elemetos dentro del array ya que 
esta funciona como separador para las demas plabras */
var busqueda  = texto1.split(" ");
console.log(busqueda);

/*Solo quita los espacios al comienzo y al final de la oracion 
Metodo trim quita los espacios dentro de la frase o palabra que este dentro de la variable en cuestion funciona para el mometo de registar
los usuaios ya que casi no nos interesa que los usurios tengan espacios ya que esto puede generar un inconsistencia de archivos*/
var busqueda  = texto1.trim();
console.log(busqueda);

