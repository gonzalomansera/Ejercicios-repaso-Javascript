const TEXT_KEY= import.meta.env.VITE_TEXT_KEY
import {uid} from "uid";


//aqui van las funciones helper para las tareas
/**
 * 
 * @param {string} arrayTareas 
 * @param {string} tareas 
 */
export const rellenarLocalStorage = (arrayTareas,tareas="Tareas") =>{
    //Guardar en el localStorage en la clave 
    localStorage.setItem(tareas,JSON.stringify(arrayTareas))

}
// Crear una funcion llamada mostrar tareas que me pase por parametro una clave y me muestre por consola la clave, utilizar console.table
/**
 * 
 * @param {string} clave 
 * @returns {Array}
 */
const mostrarTareas = (clave= "Tareas")=> console.table(JSON.parse(localStorage.getItem(clave)))

//Crear una funcion que guarde las tareas 
/**
 * 
 * @param {string} arrayTareas //Le pasamos un array de tareas y lo guarda  
 */
export const saveTareas=(arrayTareas=[])=> {
    localStorage.setItem("Tareas",JSON.stringify(arrayTareas))

}  

//Crear una funcion que añada tarea
/**
 * 
 * @param {string} tarea 
 */
export const addTarea=(nombreTarea)=>{
    const limpio= String(nombreTarea ?? "").trim();
    try {
        const nuevaTarea= {
            id: uid(5),
            nombre,
            fechaCreacion: new Date().toISOString(),
            completada: false
        }
        
    } catch (error) {
        
    }
}

/**
 * 
 * @param {string} id  
 */
export const deleteTarea=(id="No existe esta tarea")=>{
    localStorage.removeItem(id)
}


function safeJSONParse(text){
    try {
        if(typeof text != "string"){
            throw new Error(`Error, la data ${text} no es un String`);
        }
        return JSON.parse(text);
    } catch (error) {
        throw new Error("Error Parseando la data");
    }
}

export function saveTareas2(arrayTareas=[]){
    try {
        if(!Array.isArray(arrayTareas)){
            throw new Error(`Error, la data ${arrayTareas} no es un Array`);
        }
        //serializar ----> Convierto a string 
        const json= JSON.stringify(arrayTareas);
        localStorage.setItem(TEXT_KEY,json)
    }catch (error) {
        throw new Error("⛔Error guardando la data");
    }
} 

















//Para que sea por defecto, pero solo se puede 1 
export default mostrarTareas