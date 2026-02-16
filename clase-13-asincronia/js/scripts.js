// console.log("Inicio");

// setTimeout(() => {
//   console.log("Tarea terminada");
// }, 2000);

// console.log("Fin");

// Ejercicio

// console.log("hola soy la A");

// setTimeout(() => {
//   console.log("hola soy la B");
// }, 2000);

// console.log("hola soy la C");

// ---

// console.log("esto va primero");

// setTimeout(() => {
//   console.log("mensaje de retraso");
// }, 2000);

// ---

// function login(usuario) {
//   //   console.log(usuario);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hola, " + usuario);
//     }, 1500);
//   });
// }

// console.log("Validar usuario");

// // const promesa = login("Juan");

// // promesa.then((mensaje) => {
// //   console.log(mensaje);
// // });

// login("Juan").then((mensaje) => {
//   console.log(mensaje);
// });

// console.log("Otras tareas");

// ---

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido listo");
//     }, 2000);
//   });
// }

// console.log("Iniciar pedido");

// procesarPedido().then((pedido) => {
//   console.log(pedido);
// });

// ---

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         resolve({ success: true, operación: 123 });
//       } else {
//         reject({ error: true, operación: 244 });
//       }
//     }, 2000);
//   });
// }

// validarPago()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ---

// function login(usuario) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hola, " + usuario);
//     }, 1500);
//   });
// }

// // login("Juan").then((mensaje) => {
// //   console.log(mensaje);
// // });

// async function iniciarSeccion() {
//   const mensaje = await login("María");
//   console.log(mensaje);
// }

// iniciarSeccion()

// ---

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido listo");
//     }, 2000);
//   });
// }

// // procesarPedido().then((pedido) => {
// //   console.log(pedido);
// // });

// async function iniciar() {
//   const pedido = await procesarPedido();
//   console.log(pedido);
// }

// iniciar();

// ---

// function validarPago() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         resolve({ success: true, operación: 123 });
//       } else {
//         reject({ error: true, operación: 244 });
//       }
//     }, 2000);
//   });
// }

// // validarPago()
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// async function iniciar() {
//   try {
//     const response = await validarPago();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// iniciar();

// ---

// function validar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });
// }

// // then
// validar().then((response) => {
//   console.log(response);
// });

// // await
// // async function iniciar() {
// //   const response = await validar();
// //   console.log(response);
// // }

// async function validarPago() {
//   const response = await validar();
//   console.log(response);
// }

// function validarUsuario() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Usuario validado");
//     }, 2000);
//   });
// }

// function cargarDatos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Datos cargados");
//     }, 1500);
//   });
// }

// // validarUsuario().then((response) => {
// //   console.log(response);

// //   cargarDatos().then((datos) => {
// //     console.log(datos);
// //   });
// // });

// // validarUsuario()
// //   .then((response) => {
// //     console.log(response);

// //     return cargarDatos();
// //   })
// //   .then((datos) => {
// //     console.log(datos);
// //   });

// async function usuario() {
//   console.log("Iniciar proceso");

//   const response = await validarUsuario();
//   console.log(response);

//   const datos = await cargarDatos();
//   console.log(datos);

//   console.log("Fin del proceso");
// }

// usuario();

// Ejercicio

// function guardarPerfil() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Perfil guardado");
//     }, 1000);
//   });
// }

// async function validar() {
//   console.log("Validando...");
//   const resultado = await guardarPerfil();
//   console.log(resultado);
// }

// validar();

// ---

// function guardarPerfil() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Perfil guardado");
//     }, 1000);
//   });
// }

// // guardarPerfil().then((response) => {
// //   console.log(response);
// // });

// async function guardar() {
//   console.log("Guardando...");

//   const perfil = await guardarPerfil();
//   console.log(perfil);
// }

// guardar();

