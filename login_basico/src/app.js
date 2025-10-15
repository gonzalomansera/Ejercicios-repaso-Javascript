import { createCredentClient, validarCredenciales } from "./services/authServices.js";
import { renderLoginForm } from "./views/loginView.js";
import { DB } from "./db/db.js";
import { initialStorage } from "./helpers/storage.js";
import { renderRegister } from "./views/renderRegister.js";

export function initialApp(){
    initialStorage(DB);

    // pintar eqtiqueta mi formulario en app

    const app = document.getElementById("app");
    app.innerHTML = renderLoginForm();
    const form = document.querySelector("#loginForm");
    const mensaje = document.querySelector("#message");

    // pongo un escuchador de eventos 

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        // comprobar si username y password son correctos
        const formData = new FormData(form);
        const password = formData.get("password");
        const username = formData.get("username");

        //crear Funcion que valide que username y password son correctos

        const ok=validarCredenciales(username,password);
        console.log(ok);
        mensaje.innerHTML = ok 
            ? `<span style="color:green;">Bienvenido</span>`
            : `<span style="color:red;">No bienvenido</span>`;
        form.reset();

    })

    // pintar eqtiqueta mi formulario de registro en app

    const appRegister = document.getElementById("appRegister");
    console.log(appRegister);
    appRegister.innerHTML = renderRegister();
    const formRegister = document.querySelector("#registerForm");
    const mensajeRegister = document.querySelector("#mensajeRegister");

    formRegister.addEventListener("submit",(i)=>{
        i.preventDefault();

        const formDataRegister = new FormData(formRegister);
        const passwordRegister = formDataRegister.get("passwordRegister");
        const usernameRegister = formDataRegister.get("usernameRegister");

        // Funcion que cree el username y password en localstorage

        const okRegister = createCredentClient(usernameRegister,passwordRegister);
        console.log(okRegister);
        mensajeRegister.innerHTML = okRegister 
            ? `<span style="color:green;">Registrado</span>`
            : `<span style="color:red;">No Registrado</span>`;
        formRegister.reset();
    });
}

// terminar el login y debajo hacer otro formulario para registrarse

