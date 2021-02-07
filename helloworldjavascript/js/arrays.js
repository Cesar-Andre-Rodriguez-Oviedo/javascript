'use strict'

// Arrays, arreglos y Matrices


// var nombre = "Cesar Andre";

// var nombres = ["kla", "sdas", 192, "sadasd"];

// console.log(nombres);

var lenguajes = new Array("php", "js", "go", "java", "js","s","sda");
// console.log(lenguajes);


// // var elemeto = parseInt(prompt("Introduce un numero de la ilista"),0/* por defecto se le debe colocar 0 */);
// // if(elemeto < lenguajes.length){
// //     alert(" El lenguje que elegiste es "+lenguajes[elemeto])
// // }else{
// //     alert("El elemeto que selecionaste no se encuentra en la lista")
// // };


// // for(var i = 0; i<lenguajes.length; i++){
// //     document.write("Lenguaje "+lenguajes[i]+" "+i + "<br>")
// // }

// //Arrays complejos
// lenguajes.forEach((elemeto, index, data)=>{console.log(data);document.write("<li>" + index+".- " +elemeto+"</li>");});

//arrays multidimensionales

//Son arrays dentro de otros array
//Seria mas como los diccionaris de Python

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['1', '2','3'];


peliculas.sort();//Para ordenaralas 
peliculas.reverse(); //Para ordenarlas de mayor a menor
console.log(peliculas);


// var cine = [categorias, peliculas];

// console.log(cine[0][1]);
//EL .push es para añadir un elemto al array


var elemeto = prompt("Introduce unn nombre de laguna pelicula");

peliculas.push(elemeto);
console.log(peliculas);

//Para buscar un elemento dentro del array se tiene que usar el .indexof(nombredelavariable que buscas)

var indice = peliculas.indexOf('2');

if(indice > -1){
    peliculas.splice(indice, 1);//para borrar cuantos indices tengas adelante 
}

//Para conveertir un arry a texto   

var peliculasstring = peliculas.join(peliculas);


//Para convertir de cadena a array

var cadena = "text1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(peliculasstring);
console.log(cadena_array);

//Ordenar arreglos esta en la linea 40 y 41


//para recorrer arreglos con el for if


for(let lenguaje in lenguajes){
    document.write( "<li>"+lenguajes[lenguaje]+"</li>");
}


//busquedas dentro de un array

//Si colocanos el .finindex(); nos muestra en que posicion esta el elemento

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == 'php';
});


if(busqueda = true){
    document.write("Este elemento si existe");
}else{
    document.write("Este elemento no existe");
}

/*
Otra forma de escribirlo var busqueda = lenguajes.find(lenguaje=> lenguaje == 'php';);
*/

console.log(busqueda);

//Para ver que tipos de valores hay dentro de un array

var numeros = new Array('10', '80', '50', '12');
var busqueda = numeros.some(numeros => numeros >=20);
console.log(busqueda);
console.log(numeros);