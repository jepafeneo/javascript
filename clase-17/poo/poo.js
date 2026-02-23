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

// ---

// class Producto {
//   constructor(nombre, precio, descripcion) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.descripcion = descripcion;
//     this.enStock = false;
//     this.stock = 0;
//   }

//   detalle() {
//     return `El ${this.nombre} tiene valor de: $${this.precio}`;
//   }
// }

// const productoGenerico = new Producto(
//   "Producto Genérico",
//   150,
//   "Sin descripción",
// );

// console.log(productoGenerico);
// console.log(productoGenerico.detalle());

// ---

const users = [
  { id: 1, email: "maria@example.com", password: "qwe" },
  { id: 3, email: "juan@example.com", password: "1234" },
];

const user = {
  name: "Juan",
  email: "juan@example.com",
  password: "1234",
};

const session = {
  userId: null,
  check(email, password) {
    // console.log(email, password);

    // users.forEach((u) => {
    //   console.log(u);
    //   if (email == u.email && password == u.password) {
    //     console.log("password correcto");
    //     this.userId = u.id;
    //   }
    // });

    const userFind = users.find(
      (u) => email == u.email && password == u.password,
    );

    if (userFind) {
      this.userId = userFind.id;
    }
  },
};

session.check(user.email, user.password);
