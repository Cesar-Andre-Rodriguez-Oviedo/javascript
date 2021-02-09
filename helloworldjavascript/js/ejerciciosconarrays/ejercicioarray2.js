'use strict'

function br(lim){
    
    for(var i = 0; i<=lim; i++ ){
        document.write("<br>");
    }
}   

alert("Debera escribir la cantidad de numeros que quieres en la lista...");

//Pida los numeros por pantalla y los meta a un array

var limit = parseInt(prompt("Escriba cuantos numeros quiere que se alamacene en la lista"));


var numeros = new Array(limit);

for(var i = 0 ; i  <= limit-1 ; i++){
    numeros[i] = parseInt(prompt("Escriba cualquier numero:  "));
}
var element = numeros.length;
document.write("<br>");
document.write("Este array tiene "+element+" elememtos");
document.write("<br>");
document.write("<br>");

// Mostrar el array entero
document.write("Estos son los elementos que contiene la lista: <br>");
for(var i = 0; i <= limit - 1 ; i++){
    var p = 1;
    document.write( (i+1) +".-  "+numeros[i]+"<br>");
    console.log(numeros[i]);
}

//Odernar los elementos del array
//Invertir el orden y mustra

var mayoramenor = numeros.sort(ordenar);
function ordenar(element1, element2){
    return element2-element1;
}
document.write("<br>");
document.write("Esta es la lista ordenada de mayor de menor:");
br(1);
document.write("  " + mayoramenor+"  ,");
br(2);


var menoramayor = numeros.sort(ordenar1);
function ordenar1(element2, elemet1){
    return element2-elemet1
}
document.write("<br>");
document.write("Esta es la lista ordenada de mayor de menor: ");
br(1);
document.write("  " + menoramayor+".");
br(2);

//Mostar cuantos elementos tiene el array

br(2);
document.write("EL numero de elementos que estan dentro del array es: ");
br(1);
document.write(numeros.length);
br(3);

//Busqueda de un valor 

var buscar = parseInt(prompt("Introduce el número para la busqueda"));

//Para relaizar la busqueda

var busqueda = numeros.find(function(numero){
    return numero == busqueda;
});

var index = numeros.indexOf(buscar);

br(2);
if(busqueda = true){
    document.write("El elemento se encuentra dentro del array  ")
    br(2);
    document.write("El elemento se encuentra en el indice:  "+index);
    br(2);
    document.write("Y ese elemeto es :  " + buscar + "<br>")
    br(2);
    document.write("Lista ordenado de menor a mayor: ")
    br(1);
    for(let numero in numeros){ 
        document.write(numeros[numero]+"<br>");
    }
    br(2);
}else{
    document.write("El elemento no se encuentra");
}
br(2);
