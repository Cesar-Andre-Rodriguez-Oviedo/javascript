'use strict'

alert("Escriba las palabras");


var numeros = new Array(6);
// var numero  = new Array(6);

for(var i = 0; i<= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero: "));
}

console.log(numeros);

// for(var i = 0; i <= 5; i++){
//     numero[i] = parseInt(prompt("Introduce un numero"));
// }

// console.log(numero);


// var diccionario = new Array ([palabra], [numero]);

// console.log(diccionario);

//Para listar los numeros que estan dentro del array

for(let numero in numeros  ){
    document.write(numeros[numero]+"<br>");
    console.log(numeros[numero]);
}

document.write("<br>");

//Para ordenar los elemetos que contiene el array

var ordenado = numeros.sort(ordenar);
document.write("Elemento ordenado de mayor a menor:  "+ordenado);
document.write("<br>");
var ordenado1 = numeros.sort(ordenar1);
document.write("Este es el elemento ordenado de menor a mayor:  "+ordenado1);

//Funcion para ordenar los elementos que estan dentro del array

function ordenar(elemt1, elemet2){
    return elemt1-elemet2;
}

function ordenar1(elemet1, element2){
    return element2-elemet1;
}

document.write("<br>");
document.write("Numeros de elementos que tiene el array:  "+numeros.length);

//Para que el usuario realize la busqueda del elemento o de
//los elementos que se encuentran dentro del array

var buscar = parseInt(prompt("Introduce el numero que quires buscar:  "));

//Nos devuelve el valor que estamos buscando o que ingresamos 
//o ingreso el usuario

var busqueda = numeros.find(function(numero){
    return numero == buscar;
});

//Para buscar en que elemento se encuentra o en que 
//posicion se encuentra el elemento dentro del array

var indice = numeros.indexOf(buscar);

document.write("<br>");
document.write("Este es el indice en el que se encuentra:  "+indice);
console.log(indice);

document.write("<br>");
document.write("Este es el numero de busqueda:  "+busqueda);
