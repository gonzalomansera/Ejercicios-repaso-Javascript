//0BJETOS EN JAVASCRIPT 

const user ={
    name: "Gonzalo ",
    email: "gonzalomansera@gmail.com",
    active: true,
}

// obtener las claves 

const claves = Object.keys(user); //name email active

// Utilidad verificar si las claves estan todas siguiendo un objeto de partida 

// 1- Como compruebo que todas las claves existen.
function validarCamposRequeridos(objeto,camposRequeridos){
    const clavesObjeto = Object.keys(objeto);
    //retorno true o false
    return camposRequeridos.every((camporequerido)=>{
        return clavesObjeto.includes(camporequerido)
    })
}


//data
const datosFormulario = { name: "Carla", active: true};

const esValido= validarCamposRequeridos(datosFormulario,["name","password","active"]);

// para los valores: values

const product = {
    name : "laptop",
    stock : 100,
    price : 1100,
    destacado : true
}

//array de valores 
const valores = Object.values(product)
//["laptop",100,1100,true]

// Verificar si algun valor cumple una condicion 

    const precipitaciones = {
        enero: 110,
        febrero: 98,
        marzo: 120,
        abril:50
    }

//Algun mes la precipitacion fue mayor a 100 

const mesSuperiorCien = Object.values(precipitaciones)
    .some((precipitacion)=> precipitacion > 100)

//cuantos litros totales han caido en los meses enero y abril 

const sumaPrecipitacion = Object.values(precipitaciones)
    .reduce((total,precipitacion)=>total+precipitacion,0)

//Calcular la precipitacion maxima 

const precipitacionMaxima = Math.max(...Object.values(precipitaciones))

//Obtener pares [clave,valor] en forma de array <----- entries()
const configuration ={
    theme: "oscuro",
    language: "español",
    notification : true,
    volume : 75
}

// Obtener array de pares [clave,valor]

const entry = Object.entries(configuration);
/*
    ["theme","oscuro"],
    ["languaje","español"],
    ["notification", true]
    ["volume",75]
*/

const user2 ={
    name: "Gonzalo ",
    password: "hola",
    email: "gonzalomansera@gmail.com",
    active: true,
}

// filtrar. Eliminar los campos sensibles de este object user2 ("password")

Object.entries(user2).filter([password]=user2)

// destucturing (quedarme con partes del objeto)

const [name,email] = user2; // --> const name = user2.name
                            // --> const email = user2.email

const data = [1,2,3,4,5];

const [a,b,...c]= data // a=1 b=2 c=3,4,5


function vData(array){
    const [v1,v2]= array;
    console.log("v1: ",v1 ),
    console.log("v2: ",v2)
}

vData([1,2,3,4,5]) //---> v1= 1  v2= 2,3,4,5

// Crear funcion llamada mostrarPersona. Obtener el username, y las dos primeras redes sociales que el usuario tenga

const user3={
    id: 1,
    info: {
        username: "Gonzalo",
        redes: ["twitter","github","Linkedin"],
        year: 20
    }
}


const {info:{username,redes:[r1,r2]}}=user3

/*
username ---> Gonzalo
r1 ----> twitter 
r2 ----> github
*/

// Saca nombre y edad, si no existe edad que gyarde el valor 0 

const data4 = {
    id: 101,
    usuario: {
        perfil: {
            nombre: "Lucia",
            edad: 18,
            direccion: {
                ciudad: "Granada",
                pais: "España"
            },
        },
        activo: true
    },
};

const {usuario:{perfil:{nombre,edad=0}}}=data4

/*
    nombre----> "Lucia"
    edad ----> 18 pero si no tuviese seria 0 
*/


const products = [
  {
    id: 1,
    nombre: "laptop",
    price: 1001,
    fabricante: {
      nombre: "HP",
      pais: "Usa",
      contacto: {
        email: "info@hp.com",
        tlf: "+1 657 414 414"
      }
    },
    especificaciones: {
      ram: "16GB",
      cpu: "Intel i7"
    }
  },
  {
    id: 2,
    nombre: "smartphone",
    price: 799,
    fabricante: {
      nombre: "Samsung",
      pais: "Corea del Sur",
      contacto: {
        email: "support@samsung.com",
        tlf: "+82 2 2053 3000"
      }
    },
    especificaciones: {
      ram: "8GB",
      cpu: "Exynos 2100"
    }
  },
  {
    id: 3,
    nombre: "tablet",
    price: 499,
    fabricante: {
      nombre: "Apple",
      pais: "Usa",
      contacto: {
        email: "support@apple.com",
        tlf: "+1 800 275 2273"
      }
    },
    especificaciones: {
      ram: "6GB",
      cpu: "Apple M1"
    }
  },
  {
    id: 4,
    nombre: "monitor",
    price: 299,
    fabricante: {
      nombre: "Dell",
      pais: "Usa",
      contacto: {
        email: "info@dell.com",
        tlf: "+1 800 624 9897"
      }
    },
    especificaciones: {
      resolucion: "4K",
      tamaño: "27 pulgadas"
    }
  },
  {
    id: 5,
    nombre: "impresora",
    price: 199,
    fabricante: {
      nombre: "Canon",
      pais: "Japón",
      contacto: {
        email: "support@canon.jp",
        tlf: "+81 3 3758 2111"
      }
    },
    especificaciones: {
      tipo: "Láser",
      velocidad: "30 ppm"
    }
  },
  {
    id: 6,
    nombre: "teclado mecánico",
    price: 129,
    fabricante: {
      nombre: "Logitech",
      pais: "Suiza",
      contacto: {
        email: "info@logitech.com",
        tlf: "+41 21 863 55 11"
      }
    },
    especificaciones: {
      switches: "Cherry MX Blue",
      conexion: "USB-C"
    }
  },
  {
    id: 7,
    nombre: "mouse inalámbrico",
    price: 59,
    fabricante: {
      nombre: "Razer",
      pais: "Singapur",
      contacto: {
        email: "support@razer.com",
        tlf: "+65 6505 2188"
      }
    },
    especificaciones: {
      dpi: "20000",
      conexion: "Bluetooth"
    }
  },
  {
    id: 8,
    nombre: "smartwatch",
    price: 349,
    fabricante: {
      nombre: "Garmin",
      pais: "Usa",
      contacto: {
        email: "info@garmin.com",
        tlf: "+1 913 397 8200"
      }
    },
    especificaciones: {
      pantalla: "AMOLED",
      bateria: "14 días"
    }
  },
  {
    id: 9,
    nombre: "auriculares",
    price: 179,
    fabricante: {
      nombre: "Sony",
      pais: "Japón",
      contacto: {
        email: "support@sony.jp",
        tlf: "+81 3 6748 2111"
      }
    },
    especificaciones: {
      tipo: "Over-Ear",
      cancelacionRuido: "Activa"
    }
  },
  {
    id: 10,
    nombre: "consola de videojuegos",
    price: 499,
    fabricante: {
      nombre: "Microsoft",
      pais: "Usa",
      contacto: {
        email: "support@microsoft.com",
        tlf: "+1 800 642 7676"
      }
    },
    especificaciones: {
      almacenamiento: "1TB SSD",
      gpu: "RDNA 2"
    }
  }
]

//Crear una funcion que extraiga los datos y me devuelva la siguiente estructura 

// nombre, fabricante, nombre contacto y ram 
//Imaginemos un array de productos 
// USANDO LA NUEVA ESPECIFICACION OBTENER EL NOMBRE DEL PRODUCTO CON MAS RAM 


const newData = (products) => {
    const {
        nombre,
        fabricante : { nombre:nombreFabricante,contacto }, 
        especificaciones:{ ram },
    } = products
    return {
        nombre:nombre,
        fabricante:fabricante,
        especificaciones:especificaciones
    }
}

const newDataArray=(arrayProducts) =>  arrayProducts
    .map((product) => extraerData(product))
