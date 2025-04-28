import { usuario5 } from "./clases";
import { usuarios, UsuarioType } from "./usuarioInterfaces";

//Ejercicio 7
function getRandomItem<T>(item:T[]):T{
    const itemRandom = Math.floor(Math.random() * item.length)
    return item[itemRandom];
}

const numeros = [ 1, 2, 3, 4, 5];
const strings = ["uno", "dos", "tres", "cuatro", "cinco"]
console.log("Número aleatorio:", getRandomItem(numeros));
console.log("String aleatorio:", getRandomItem(strings));
console.log("Usuario aleatorio:", getRandomItem(usuarios));

//Ejercicio 8
interface Caja<T>{
    contenido: T;
}

class CajaClase<T> implements Caja<T>{
    contenido: T;

    constructor(contenido: T){
        this.contenido = contenido;
    }
}

const cajaNumeros = new CajaClase<number>(123);
console.log(cajaNumeros.contenido);

const cajaString = new CajaClase<string>("hola");
console.log(cajaString.contenido);

const cajaUsuario = new CajaClase<UsuarioType>(usuario5);
console.log(cajaUsuario.contenido);