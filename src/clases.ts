import { IUsuario } from "./usuarioInterfaces"

class usuarioClass implements IUsuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.activo = activo;
    }

    toggleActivo(){
        this.activo = !this.activo
    }
}

//Ejercicio 3
export const usuario5 = new usuarioClass(5, "Camila", 18,"Camila123@gmail.com",true);
export const usuario6 = new usuarioClass(6, "Juana", 24,"Juana287@gmail.com",false);

console.log(usuario5);
console.log(usuario6);

//Ejercicio 4
class AdminUsuario extends usuarioClass {
    permisos: string[]

    constructor(
        id: number,
        nombre: string,
        edad: number,
        email: string,
        activo: boolean,
        permisos: string[]
    ){
        super(id, nombre, edad, email, activo);
        this.permisos = permisos;
    }
}

const adminUsuario1 = new AdminUsuario(7, "Admin", 40, "admin@example.com", true, ["crear", "editar", "eliminar"]);
console.log("Usuario administrador:", adminUsuario1);