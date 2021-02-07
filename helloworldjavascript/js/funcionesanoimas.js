'use strict'

// Funciones anonimas
// Funcion que no tiene nombre y se puede guardar en una variables mayormente se puede utilizar en callback(averiguar que es esto)
// callback es una funcion que se ejecuta dentro de otra 

// var pelicula = function(nombre){
//     return "La pelicula es: " + nombre;
// }


// function sumame(numero1, numero){
//     var sumar = numero1 + numero;
//     return sumar;
// }

// console.log(sumame( 4,5 ));


//Funcion callback

function sumame(valor1,valor2,muestra,muestra1){
    var resul = valor1 + valor2;
    muestra(resul);
    muestra1(resul);

}


// Las funciones dentro de la funcion son las funciones anonimas asi como en el ejemplo de abajo
sumame(4,5,function(datos){
    console.log("la suma es por :  "+datos)
}, function(datos){
    console.log("La suma por dos es:  "+datos*2);
});

// Funciones flechas 
// En estas funciones reemplazas las palabras reservadas function por esta flechita => 

sumame(5,8, dato =>{
    console.log("El resultado es :  " + dato);
}, dato => {
    console.log("El segundo resultado es:  " + dato*2);
});