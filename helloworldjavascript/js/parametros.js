'use strict'

// Parametros de REST y SPREAD
// Parametros de resto

function ListadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1 :  ", fruta1);
    console.log("Fruta 2 :  ", fruta2);
    console.log(resto_frutas);  //Coloca el resto de elementos sobrantes en un array
}


ListadoFrutas("Naranja", "Manzana", "Zandia", "Pera", "Melon", "Coco");


// Parametros de tipos SPREAD
// En esta ocacion para que el listado tome los primeros valores que se le asigno se le tiene que colocar los tres puntos delante de la palabra
// reservada o la variable a la que queremos que cuenten estas

var frutas = ['Naranja','Manzana',];
ListadoFrutas(...frutas,  "Zandia", "Pera", "Melon", "Coco");