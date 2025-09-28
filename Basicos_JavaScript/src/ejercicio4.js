// Usos de los arrays 


//declaracion del array
const edades = [];
const frutas = ["Manzana","Pera","Naranja","Platanos"];

//Constructor Array 

const cp = new Array();
const cc = new Array("hola","adios","bye");

//Acceder a los elementos del array
frutas[0]; //Manzana

//Añadir elementos al array
edades.push(12); //Añade al final del array
edades.unshift(5); //Añade al principio del array

//Eliminar elementos del array
edades.pop(); //Elimina el ultimo elemento del array y retorna el valor eliminado
edades.shift(); //Elimina el primer elemento del array y retorna el valor eliminado
edades.splice(1,1); //Elimina el elemento en la posicion 1 y elimina 1 elemento

//**** slice extrae partes de un array 
edades.slice(0,2); //Extrae desde la posicion 0 hasta la 2 (sin incluir la 2)
edades.slice(-1); //Extrae el ultimo elemento del array
edades.slice(-5); //Extrae los ultimos 5 elementos del array
edades.slice(1,-1); //Extrae desde la posicion 1 hasta el penultimo elemento del array


//***** MUY BUENO  map hay que pasarle una funcion como parametro (se llama callback)
edades.map((edad)=>{edad*2});

//***** MUY BUENO filter hay que pasarle tambien un callback 
edades.filter((edad)=>{edad>18});


//--------------------------Ejercicio 4---------------------------------

//1ºDado un array de nombres, crear una funcion llamada mayusculas que ponga en mayusculas
// todos los elementos del array que le pase como parametro

const nameTest = ["gonzalo","paco","ana","maria","luisa"];

/**
 * 
 * @param {string[]} names 
 * @returns {string[]}
 */
function nameToUpperCase(names){
    return names.map(name => name.toUpperCase());
}

console.log(nameToUpperCase(nameTest));

// 2º Crear una funcion llamada preciosConIva que al pasarle un array de precios, me los 
// devuelva con el IVA incluido (21%)

const pricesTest = [100,200,300,400,500];

/**
 * 
 * @param {number[]} prices 
 * @returns {number[]}
 */
function pricesWithIva(prices){
    return prices.map(price => price * 1.21);
}

console.log(pricesWithIva(pricesTest));
// 3º Crear una funcion llamada imparesCuadrados que al pasarle un array de numeros
// me devuelva un array con los numeros impares elevados al cuadrado

const numbersTest = [1,2,3,4,5,6,7,8,9,10];

function oddNumbersSquared(numbers){
    return numbers.filter(number => number % 2 !== 0).map(oddNumber => oddNumber ** 2);
}

console.log(oddNumbersSquared(numbersTest));

// 4º Crear una funcion llamada normalizarEmail que le pase un array de emails que 
// pueden llevar espacios al principio y final y devolverlos sin espacios

const emailsTest = ["gonzalohlanz@gmail.com "," gonzalomansera@gmail.com"," gonzalo@gmail.com "];

/**
 * 
 * @param {string[]} emails 
 * @returns {string[]}
 */
function normalizeEmail(emails){
    return emails.map(email => email.trim());
}

console.log(normalizeEmail(emailsTest));

// 5º Crear una funcion llamada filtrarLongitud que le pase como parametro nombres
// tamaño y me devuelva solo los nombres que tengan esa longitud o mayor 

const namesLengthTest = ["gonzalo","supercalifragilistico","juan alberto","letizia","pepe"];
/**
 * 
 * @param {string[]} names 
 * @param {number} length 
 * @returns {string[]}
 */

function filterByLength(names, length){
    return names.filter(name => name.length >= length);
}

console.log(filterByLength(namesLengthTest,5));

// 6º Crear funcion Normalizar nombres propios que le pase como parametro un array de 
// nombres y me los devuelva con la letra capital en mayuscula

const properNamesTest = ["gonzalo","ana","maria","pepe","juan"];

/**
 * 
 * @param {string[]} names 
 * @returns {string[]}
 */
function normalizeProperNames(names){
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(normalizeProperNames(properNamesTest));












// Author: Gonzalo Mansera Ruiz