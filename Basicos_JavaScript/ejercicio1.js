//Primer ejercicio de JavaScrip

//--------------------------Declarar las variables---------------------------------

//--------------------------Declarar la funcion------------------------------------
/*
Descripcion: funcion que suma dos numeros 
Parametros:
    a- numero 1
    b. numero 2
Retorno: La suma de a y b 
*/
/**
 * 
 * @param {number} [a=0] - primer numero a sumar con valor defecto 0
 * @param {number} [b=0] - segundo numero a sumar con valor defecto 0 
 * @returns {number} - la suma de a y b 
 */
function suma(a=0,b=0){
    return a+b;
}


console.log(suma(3,5));
console.log(suma(10,15));
console.log(suma(3));
console.log(suma());

