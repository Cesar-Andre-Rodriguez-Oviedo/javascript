'use strict'

// Imprimir valores entre los rangos que se establecen en las operaciones o en los cuadros de dialogos que en usuario entra en el programa

var min = parseInt(prompt("Ingrese el primer numero para el rango a tratar"));
var max = parseInt(prompt("Ingrese el seguno numero para el rango a tratar"));

while(min < max){
    document.write(" "+ min++ +" ");
}

