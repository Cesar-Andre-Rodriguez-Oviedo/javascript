'use strict'

// alerta

alert("Esta es una alerta");
alert("Esta es otra alerta");

// alertas de confirmacion
// se hace realizando la funcion confirm

confirm("¿Estas seguro de querer continuar?");

// Como hacer para ver cual marco -- se coloca la confirmacion dentro de una variable

var resul = confirm("verdad o falso");
console.log(resul);

// Si es true por que marco confirmar y si aparece false es porque marco cancelar


// Ventana de ingreso de datos 
var edad = prompt("¿Que edad tienes?");
console.log(typeof(edad));