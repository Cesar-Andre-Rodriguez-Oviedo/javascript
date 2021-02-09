'use strict'

//BOM - Browser Object Model

//window.innerNamefuntion es pra ver los valores de las ventanas
//sreen accede a las propiedades que estan dentro del navegador

function getbom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);  
    console.log(window.location); //Objecto location ves las propiedades y imprimen las url que 
                                    // en estas estan
}

//nos redirije hacia otra direccion url
function redirect(url){
    window.location.href  = url;
}

//Open Nos abra una ventana nueva en el navegador

function abrirventana(url){
    window.open(url);
    //Para abrir una nueva ventana pero con dimensiones determinadas como la altura y anchura
    //window.open(url,"","width = 400, heigth=400");
}

getbom();