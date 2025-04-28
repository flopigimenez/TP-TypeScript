interface Producto{
    id: number
    nombre: string
    precio: number
    stock: number
}

const productos: Producto[] = [
    {id: 1, nombre: "Pizza", precio: 2800, stock: 10},
    {id: 2, nombre: "Papas", precio: 1500, stock: 0},
    {id: 3, nombre: "Gaseosa", precio: 1800, stock: 20}
]

//Ejercico 5
const nombresProductos = productos.map(productos => productos.nombre);
console.log("Nombre productos: ", nombresProductos);

const productosConStock = productos.filter(productos => productos.stock > 0);
console.log("Productos con stock: ", productosConStock);

//Ejercico 6
const ordenarPorPrecio = [...productos].sort((a, b) => a.precio - b.precio)
console.log("Productos ordenados: ", ordenarPorPrecio);

productos.push({id: 4, nombre: "Lomo", precio: 3000, stock: 15});
console.log("Productos después del push: ", productos);

const productoEliminado =  productos.pop();
console.log("Producto eliminado: ", productoEliminado);
console.log("Productos después del pop: ", productos);