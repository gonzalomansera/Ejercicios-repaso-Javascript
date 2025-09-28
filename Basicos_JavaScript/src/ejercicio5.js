// .at <--- acceso con índices negativos.
const fruits= ["Pera","Fresa","Manzana","Melocoton"];
console.log(fruit.at(-2)); // Me cogería la manzana. 
console.log(fruit.slice(-2)); // Me cogería la manzana y el melocotón. 


//splice <--- Se utiliza para modificar un array.  ‼️‼️‼️‼️ MUTA EL ARRAY ‼️‼️‼️‼️
/* frutas.splice(1,2,"pera") <---   Elimina dos elemenentos desde la posición 1, es decir, elimina la fresa y la manzana.
                                    Al poner pera, sustituye lo eliminado por "pera"
*/

//concat <--- Se utiliza para concatenar dos o más arrays.
const vegetables = ["lechuga","pimiento","espinacas"];

fruits.concat(vegetables);
fruits.concat(...vegetables); // ESTA ES LA QUE HAY QUE USAR. ES MÁS FLEXIBLE.


// SET <--- Otro tipo de dato formado por datos únicos sin orden.

const pounds = [4,3,2,5,6,33,6,7,32,7,7,7,77,7,7,7,7,7,7];
const poundsNoDuplicates = [... new Set(pounds)]; //‼️‼️‼️‼️‼️ SI NO SE PONEN LOS PUNTOS NO SE CREA EL ARRAY 


// reduce <--- Reduce un array a un único valor.
/* array.reduce(
    acumulador, -- No es opcional
    elemento, -- No es opcional
    indice, -- Opcional
    array) ==> aquí va la lógica, el valor inicial
*/
pounds.reduce((suma,pound)=>suma+pound    , 0  /* valor inicial, es la antesala del resultado final*/    );



// Realizar la multiplicación de todo el array
pounds.reduce((multiplicar,pound)=>multiplicar*pound, 1);

// Encontrar el máximo de un array, y el mínimo
pound.reduce((max,pound)=> pound >  max ? pound : max, pounds[0]);  /*  ‼️‼️EL VALOR INCIAL DE MAX ES EL PRIMER VALOR DEL ARRAY ‼️‼️*/ 
pound.reduce((min,pound)=> pound <  min ? pound : min, pounds[0]);  


// Dado un array que sea [manzana, platano, naranja, manzana, manzana, platano, pera, pera], devolverme un objeto clave - valor que me diga nombre de la fruta: número de repeticiones
const fruits2 = ["manzana", "platano", "naranja", "manzana", "manzana", "platano", "pera", "pera"];

 fruits2.reduce((acc,fruit) =>{
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
 }        , {} );



// Dado el siguiente array bidimensional, se pide aplanar dicho array en un array.
const aliments = [
    ["Mango", "Platano", "Mandarina", "Cereza", "Fresa"],      
    ["Tomate", "Lechuga", "Remolacha", "Pepino", "Pimiento"] 
]

aliments.reduce((acc,aliment)=> acc.concat(aliment),[]);


 // array de objetos

 const users = [
    {id: 1, name: "Gonzalo", age:20, data:{books: 100}},
    {id: 2, name: "Gisela", age:45, data: {books: 50}},
    {id: 3, name: "Letizia", age:22, data:{books: 20}},
    {id: 4, name: "Carlos", age:28, data:{books: 20}},
    {id: 5, name: "Roberto", age:44, data:{books: 0}},


 ];

 // Dame la información del usuario cuyo nombre es Gonzalo.
 // Utilizamos el método .find()
 users.find(user=>users.name.toLowerCase() === "gonzalo");

 // Dame todos los usuarios cuya edad es superior o igual a 28.
let result = users.find(user=>Number(user.age)>=28) ?? {} ;

// Dado el siguiente array de usuarios, devolver un array con solo el nombre de los usuarios que tienen en su bibliteca más de 20 libros.
users.reduce((acc,user)=>Number(user.data.books)>20 ?  [...acc, user.name] : acc, []);

// Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28€. 
users.reduce((acc,user)=> acc + (user.data.books)*28,0);

// Dado del siguiente array, decir que usuarios no tienen libros.
users.reduce((acc,user)=>Number(user.data.books)==0 ?  [...acc, user.name] : acc, []);






const products = [
  { id: 1, name: 'Laptop', price: 1200, stock: 5, category: 'Tecnología' },
  { id: 2, name: 'Camiseta', price: 35, stock: 15, category: 'Ropa' },
  { id: 3, name: 'Monitor', price: 300, stock: 0, category: 'Tecnología' },
  { id: 4, name: 'Libro', price: 20, stock: 50, category: 'Literatura' },
  { id: 5, name: 'Móvil', price: 800, stock: 10, category: 'Tecnología' },
  { id: 6, name: 'Pantalón', price: 60, stock: 5, category: 'Ropa' },
];

// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados.
products.reduce((acc,product)=> product.stock===0 ? [...acc,product.name] : acc , []);
// 2.- Calcular el valor total del inventario (precio * stock) de todos los productos.
products.reduce((total,product)=> total+ (product.price*product.stock),0);
// 3.- Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500.
products.reduce((acc,product)=> product.categoria === "Tecnología" && product.price>500?[...acc,product] : acc,[]);
// 4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoría 'Ropa'.
products.map(product => product.categoria==="Ropa"? {...product,price: product.price * 0.9}:product);




























// Author: Gonzalo Mansera Ruiz