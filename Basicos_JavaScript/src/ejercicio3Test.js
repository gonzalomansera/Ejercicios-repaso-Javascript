const assert = require('assert');

//--------------------------Declarar las variables---------------------------------
const lengthAccountNumber = 10;
const accounts = [];

//--------------------------Funciones principales------------------------------------
function createAccount(titular, balance) {
    let accountNumber = "";
    for (let i = 0; i < lengthAccountNumber; i++) {
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

function deposit(titular, amount) {
    const account = accounts.find(acc => acc.titular === titular);
    if (!account) return false;
    account.balance += amount;
    return true;
}

function removeBalance(titular, amount) {
    const account = accounts.find(acc => acc.titular === titular);
    if (!account) return false;
    if (account.balance < amount) {
        console.log("No tienes saldo suficiente");
        return false;
    }
    account.balance -= amount;
    return true;
}

function consultBalance(titular) {
    const account = accounts.find(acc => acc.titular === titular);
    return account ? account.balance : null;
}

function transfer(titularFrom, titularTo, amount) {
    if (consultBalance(titularFrom) < amount) {
        console.log("No tienes saldo suficiente");
        return false;
    }
    const withdrawn = removeBalance(titularFrom, amount);
    if (!withdrawn) return false;
    deposit(titularTo, amount);
    return true;
}

function findAccount(titular) {
    return accounts.find(acc => acc.titular === titular) || null;
}

// -------------------------- TESTS ---------------------------------
console.log("Iniciando tests...");

// 1. Crear cuentas
const cuenta1 = createAccount("Gonzalo", 1000);
const cuenta2 = createAccount("Paco", 500);

assert.strictEqual(accounts.length, 2, "Debe haber 2 cuentas creadas");
assert.strictEqual(cuenta1.titular, "Gonzalo");
assert.strictEqual(cuenta2.balance, 500);
assert.strictEqual(cuenta1.accountNumber.length, 10, "El número de cuenta debe tener 10 dígitos");

// 2. Depositar dinero
deposit("Gonzalo", 200);
assert.strictEqual(consultBalance("Gonzalo"), 1200, "Gonzalo debería tener 1200 después de depositar");

// 3. Retirar dinero
removeBalance("Gonzalo", 300);
assert.strictEqual(consultBalance("Gonzalo"), 900, "Gonzalo debería tener 900 después de retirar 300");

// 4. Retirar más dinero del disponible (debe fallar)
const retiroFallido = removeBalance("Gonzalo", 2000);
assert.strictEqual(retiroFallido, false, "No debería permitir retirar más saldo del disponible");
assert.strictEqual(consultBalance("Gonzalo"), 900, "El saldo no debería cambiar tras un intento fallido");

// 5. Consultar saldo
assert.strictEqual(consultBalance("Paco"), 500, "Paco debería tener 500 inicialmente");

// 6. Transferencia exitosa
const transferenciaExitosa = transfer("Gonzalo", "Paco", 400);
assert.strictEqual(transferenciaExitosa, true, "La transferencia debería ser exitosa");
assert.strictEqual(consultBalance("Gonzalo"), 500, "Gonzalo debería tener 500 después de transferir 400");
assert.strictEqual(consultBalance("Paco"), 900, "Paco debería tener 900 después de recibir 400");

// 7. Transferencia fallida por saldo insuficiente
const transferenciaFallida = transfer("Gonzalo", "Paco", 1000);
assert.strictEqual(transferenciaFallida, false, "La transferencia debería fallar por saldo insuficiente");

// 8. Buscar cuenta por titular
const cuentaEncontrada = findAccount("Gonzalo");
assert.strictEqual(cuentaEncontrada.titular, "Gonzalo", "Debe encontrar la cuenta de Gonzalo");

console.log("Todos los tests pasaron correctamente.");








// Author: Gonzalo Mansera Ruiz