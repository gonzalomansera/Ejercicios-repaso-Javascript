//Crear un juego que con una funcion jugarDado permita tirar un dado de 6 caras con valor 1-6.
//Ademas crear una funcion llamada simular que pase como parametro el numero de tiradas y 
// me diga que numero se ha repetido mas veces.


//--------------------------Declarar las variables---------------------------------
const valor = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
};
let numero=1;

//--------------------------Declarar la funcion------------------------------------
/**
 * 
 * @returns {number} - Un valor del 1 al 6
 */
function tirarDado(){
    return Math.floor(Math.random()*6+1);
}

function simular(numTiradas){
    for(let key in valor){
        valor[key]=0;
    }
    for(let i=0;i<numTiradas;i++){
        numero=tirarDado();
        valor[numero]++;
    }
    let masRepetido=0;

    for(let key in valor){
        if(valor[key]>masRepetido){
            masRepetido=valor[key];
            numero=key;
        }
    }
        return "El numero mas repetido es "+numero+" y se ha repetido "+masRepetido+" veces";
}   
//-------------------------Inicializar la aplicacion----------------------------------------
 console.log(tirarDado())

 console.log(simular(4))
