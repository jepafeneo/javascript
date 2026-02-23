// const user = {
//   name: "Juan",
//   saludar() {
//     return `Mi nombre es: ${this.name}`;
//   },
// };

// console.log(user, user.saludar());

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   saludar() {
//     return `Mi nombre es: ${this.name}`;
//   }
// }

// const userJuan = new User("Juan"); // instancia

// console.log(userJuan, userJuan.saludar());

// ---

// const producto = {
//   nombre: "Producto genérico",
//   precio: 100,
//   descripcion: "Sin descripción",
//   enStock: false,
//   detalle() {
//     return `El ${this.nombre} tiene valor de: $${this.precio}`;
//   },
// };

// console.log(producto);
// console.log(producto.detalle());

class Producto {
  constructor(nombre, precio, descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.enStock = false;
    this.stock = 0;
  }

  detalle() {
    return `El ${this.nombre} tiene valor de: $${this.precio}`;
  }
}

const productoGenerico = new Producto(
  "Producto Genérico",
  150,
  "Sin descripción",
);

console.log(productoGenerico);
console.log(productoGenerico.detalle());
