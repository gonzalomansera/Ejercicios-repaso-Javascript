/*
Gestion bancaria Revolut

El ejercicio consiste en llevar un sistema bancario con js que permita: 
- Crear cuentas con titular y saldo 
- Depositar dinero en una cuenta 
- Retirar dinero de una cuenta (Siempre que el saldo sea positivo) 
- Consultar el saldo de una cuenta 
- Transferir dinero de una cuenta valorando si tienes saldo para transferir 
- Mantener un listado de cuentas y buscar cuentas con su titular 

Cuando creemos una cuenta, se debe de generar un numero de cuenta con una longitud.

*/
const assert = require('assert');
//--------------------------Declarar las variables---------------------------------
const lenghtAccountNumber = 10;
const accounts = [];
//--------------------------Declarar la funcion------------------------------------
/**
 * 
 * @param {string} titular 
 * @param {number} saldo 
 * @returns {object} 
 */
function createAccount(titular, balance) {
    let accountNumber = "";
    for (let i = 0; i < lenghtAccountNumber; i++) {
        accountNumber += Math.floor(Math.random() * 10);
    }
    const newAccount = {
        titular: titular,
        balance: balance,
        accountNumber: accountNumber,
    };
    accounts.push(newAccount);
    return newAccount;
}

/**
 * 
 * @param {string} titular 
 * @param {number} amount 
 */
function deposit(titular, amount ) {
    accounts.forEach(account => {
        if(account.titular === titular) {
            account.balance += amount;   
        }
    }
    );
}
/**
 * 
 * @param {*} titular 
 * @param {*} amount 
 */
function removeBalance(titular,amount) {
    let accountFound = false;
    accounts.forEach(account => {
        if(account.titular === titular) {
            if(account.balance < 0){
                console.log("No tienes saldo suficiente");
                accountFound = true;
            }else{
                account.balance -= amount;
            }
        }
    }
    );
    return accountFound;  
};
/**
 * 
 * @param {string} titular 
 * @returns {number} --- El saldo de la cuenta
 */
function consultBalance(titular) {
    return accounts.find(account => account.titular === titular).balance;
}
/**
 * 
 * @param {string} titularFrom 
 * @param {string} titularTo 
 * @param {number} amount 
 */
function transfer(titularFrom, titularTo, amount) {
    aux=false;
    if(consultBalance(titularFrom) < amount) {
        console.log("No tienes saldo suficiente");
    } else {
        removeBalance(titularFrom, amount);
        deposit(titularTo, amount);
        aux=true;
    }
    return aux;
}
/**
 * 
 * @param {string} titular 
 * @returns {object} --- La cuenta del titular
 */
function findAccount(titular) {
    return accounts.find(account => account.titular === titular);
}

//-------------------------Inicializar la aplicacion----------------------------------------
console.log("Bienvenido a Revolut");