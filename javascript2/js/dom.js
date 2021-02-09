'use strict'

//conseguir elemetos con un id unico
//Para pedirle al ususario que color quiere de fondont
var color = prompt("Eliga el color para el fondo");
var texto = prompt("Color texto");


function colores(color){
    caja1.style.background = color;
}
function textos(texto){
    caja1.style.color = texto;
}


// Para manipular los elementos dentro del html
//DOM - Document Object Model
//Esta se selecciona con el document.getElementhayvariuosenestepunto();
//y con el .innerHTML demuestra lo que contiene la caja o elemento 

var caja = document.getElementById("caja").innerHTML;
var caja1 = document.getElementById("caja");
// caja.innerHTML = "!hola!"; Para sobreescribir elementos dentro del arhcivo HTML desde JS
console.log(caja);
//Para modificar elemetos HTML dentro de javascript 
//namevariable.style.elementooproipiedad = "Valor que le das";
//SE le pueden modificar los elemtos que quieras
//Ejemplo:   
colores(color);
textos(texto);
caja1.style.padding = "20px";
caja1.style.display = "block";

//Query selector
//Propiedades iguales a las de css para modificar algunos elementos
//Se le puden seleecionar etiquetas clases id y mas 
var caja2  = document.querySelector("#caja");

// COnseguir elementos por su etiqueta

var alldiv = document.getElementsByTagName('div');
//var alldivm = document.getElementsByTagName('div').innerHTML;
var conten = alldiv[2].textContent; //text content es para mostar el contenido de  las lo que se
                                    //encuentre dentro de esto
console.log(conten);
console.log(alldiv);
//Para cambiar el texto se tiene que utiliar el innerHMTL = "Nuevo nombre"

//to show for arrays in
//Para mostrar los arrays dentro de la lista
//typeoff devuelve una cadena que indica el tipo del evalueando sin evaluarlo
var valor;
var seccion = document.querySelector("#seccion");
var hr = document.createElement("hr"); 

for(valor in alldiv){
    if(typeof alldiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(alldiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }

}

seccion.append(hr);


//Conseguir elementos por su clase  

var divrojo = document.getElementsByClassName("rojo");
var amarillo = document.getElementsByClassName('amarillo')
amarillo[0].style.background = "yellow";

var div;
for(div in divrojo){
    if(divrojo[div].className == "rojo" ){
        divrojo[div].style.background = "red"
    }
}

console.log(divrojo);

//  Query selector 
var i = document.querySelector("#Enca");
document.write(i);

var classred = document.querySelector("rojo");
console.log(classred);