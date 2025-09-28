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

function saludar(nombreUsuario){
    return "Bienvenido a la clase de JavaScript" +$(nombreUsuario ?? "Usuario");
}


//Crear una funcion que pase como parametro un numero, si el numeero es mayor que 9 es SB si esta entre 5 y 9 estas aprobado y menor que 5 es suspenso

// const aprobados = (nota=0) => {
//     return nota > 9 ? "Sobresaliente" : nota >= 5 ? "Aprobado" : "Suspenso";
// }

const aprobados =(nota=0) => (nota >= 9 ? "Sobresaliente" : nota >= 5 ? "Aprobado" : "Suspenso");


let nombre= "Gonzalo";     
console.log(aprobados(9));













// Author: Gonzalo Mansera Ruiz