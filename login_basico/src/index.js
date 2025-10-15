// -------IMPORTACIONES CSS----

import { initialApp } from "./app";
import bcrypt from "bcryptjs"

// ---------INICIAR FUNCIONES------------



const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("carlos", salt);
console.log(hash);

initialApp();