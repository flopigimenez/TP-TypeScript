// Las interfaces pueden extenderse con extends y ser implementadas por clases
// Las interfaces pueden ser declaradas múltiples veces y se fusionan automáticamente
// La interface es más flexible y se puede usar para definir objetos, funciones, clases, etc.
// El type es más rígido y se usa para definir tipos de datos primitivos, uniones, intersecciones, etc.
export interface IUsuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
}

export type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
}

//Ejercico 2
export const usuarios: IUsuario[] = [ 
    {id: 1, nombre: "Pedro", edad: 20, email: "Pedro@gmail.com", activo: true}, 
    {id: 2, nombre: "Juan", edad: 28, email: "Juan@gmail.com", activo: false}, 
    {id: 3, nombre: "Maria", edad: 23, email: "Maria@gmail.com", activo: false}, 
    {id: 4, nombre: "Laura", edad: 19, email: "Laura@gmail.com", activo: true},
    {id: 5, nombre: "Camila", edad: 18, email: "Camila@gmail.com", activo: true}
];

export function usuariosActivos(usuarios: IUsuario[]): IUsuario[] {
    return usuarios.filter(usuario => usuario.activo === true)
}

console.log("Todos los usuarios: ", usuarios);
console.log("Usuarios activos: ", usuariosActivos(usuarios));