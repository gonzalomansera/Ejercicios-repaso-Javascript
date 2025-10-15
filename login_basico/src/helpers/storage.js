// Crear funcion initialStorage que reciba un usuario y los guarde en localStorage

import { ENV } from "../config/env";
/**
 * 
 * @param {string} arrayUser 
 */
export function initialStorage(arrayUser=[]){
    localStorage.setItem(ENV.VITE_STORAGE_KEY,JSON.stringify(arrayUser));
    console.info(`${ENV.VITE_APP_TITLE}. guardado correctamente }`)
}

// Crear una funcion getUsuarios que se traiga todos los usuarios que esten almacenados en los usuarios
/**
 * 
 * @returns [usuarios]
 */
export const getUsuarios=()=>{
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY) || [] );
}
// Crear una funcion llamada setUsuarios y lo guarde en la localStorage en la key del .env
/**
 * 
 * @param {string} user 
 */
export function setUsuarios(user){
    try{
         initialStorage([...getUsuarios(),user]);
         return true;
    }catch(error){
        console.error(error);
        return false;
    }
   
    
}
