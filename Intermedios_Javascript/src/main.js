


//---------------INICIO DE LA APLICACION---------------------------------

import { products } from "./data/data"
import { maxRAM } from "./helpers/maxRam"
import { extraerData } from "./helpers/myfunction"


const newDataArray=(arrayProducts) =>  arrayProducts
    .map((product) => extraerData(product))


newDataArray( products )

console.log(maxRAM( products )
)