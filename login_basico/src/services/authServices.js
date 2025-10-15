import { getUsuarios, setUsuarios } from "../helpers/storage";
import bcrypt from "bcryptjs";
import { DB } from "../db/db";

export function validarCredenciales(username,password){
    //existe username y password 
    // password longitud 
    // exists user password en localStorage
    // nota: siempre trimear la data de los formularios 

    if(!username.trim() || !password.trim() || password.length<4){ return false;}

    const users = getUsuarios();
    console.log(users);
    const user = users.find((user) => user.user === username);

    if (!user) {
        return false;
    }
     
    return bcrypt.compareSync(password ,user.pass); // tru
}
export function createCredentClient(username,password){
    username = username.trim();
    password = password.trim();

    if(!username || !password || password.length < 3){
        return false;
    }
    const users = getUsuarios();
    const user = users.find((user)=> user.username === username );

    if (user) {
        return false; //no puede haber 2 iguales
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
        "id": ""+(users.length + 1),
        "user" : username,
        "pass" : hash,
        "rol" : "usuario"
    };

    return setUsuarios(newUser);

}