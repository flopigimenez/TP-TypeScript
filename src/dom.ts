import { usuarios, UsuarioType } from "./usuarioInterfaces";

//Ejercico 11
function renderizarUsuarios(usuarios: UsuarioType[]): void {
    const listaUsuarios = document.getElementById("listaUsuarios") as HTMLUListElement;
    listaUsuarios.innerHTML = ""; 

    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `${usuario.nombre} (${usuario.email})`;
        listaUsuarios.appendChild(li);
    });
}

// Ejercicio 12
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnCargarUsuarios');

    if (boton) {
        boton.addEventListener('click', () => {
            renderizarUsuarios(usuarios);
        });
    }
});