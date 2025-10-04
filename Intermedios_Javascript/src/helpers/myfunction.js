/**
 * 
 * @param {Object} products //Objeto Data
 * @returns {Object} //Object Products = Objetos con informacion extraida
 */
export const extraerData = (products) => {
    const {
        nombre,
        fabricante : { nombre:nombreFabricante,contacto }, 
        especificaciones:{ ram },
    } = products
    console.log(products)
    return {
        nombre,
        nombreFabricante,
        contacto,
        ram
    }
}


//Pasar como parametro un array de objetos y diga que producto tiene mayor RAM 

export const maxRAM = (arrayProducts) => 
    arrayProducts.map(extraerData).reduce((max,actual,) => {
        ram.slice
    },0)

