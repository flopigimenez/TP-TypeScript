import { usuarios, UsuarioType } from "./usuarioInterfaces";

//Ejercico 9
async function obtenerDatos(): Promise<UsuarioType[]> {
    return new Promise((usuario) => {
        setTimeout(() => {
            usuario(usuarios);
        }, 3000);
    });
}

(async () => {
    const datosUsuario = await obtenerDatos();
    console.log("Usuarios obtenidos:", datosUsuario);
})();

//Ejercicio 10
async function fetchUsuarios(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log("Usuarios de la API:", users);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}

fetchUsuarios();




