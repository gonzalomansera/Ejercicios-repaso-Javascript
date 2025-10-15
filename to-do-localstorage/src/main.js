//----------------IMPORTACIONES------------------

import { dbTareas } from "./db/db";
import  mostrarTareas, { addTarea, deleteTarea, rellenarLocalStorage, saveTareas } from "./helpers/tareas";

const TEXT_KEY= import.meta.env.VITE_TEXT_KEY








//------------INICIO APLICACION---------------------

rellenarLocalStorage(dbTareas,TEXT_KEY);
mostrarTareas(TEXT_KEY);
saveTareas(dbTareas); 
addTarea("Comprar el pollo");
deleteTarea(0);





