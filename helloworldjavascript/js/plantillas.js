'use strict'

//Plantillas de texto

var nombre =   prompt("mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

//var tex = "mi nombre es " + nombre + " </br> " + "mis apellidos son " + apellidos;

var texto = `
    <h2> Hola que tal </h2>
    <h3>mi nombre es ${nombre}</h3>
    <h3>mi apellidos es ${apellidos}</h3>
`;

//estas `` son comillas multilingues 

document.write(texto);