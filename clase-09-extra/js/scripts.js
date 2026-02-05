// const array = [1, "Juan", "Calle 123", true, false, ["user", "editor"]];

const personas = [
  { nombre: "Ana", edad: 22, admin: true },
  { nombre: "Juan", direccion: "Calle 123", edad: 17 },
  { nombre: "Pedro", edad: 30 },
];

console.log(personas);

// function esMayorDeEdad(persona) {
//   if (persona.edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const esMayorDeEdad = function (persona) {
//   if (persona.edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const esMayorDeEdad = (persona) => {
//   if (persona.edad >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

const esMayorDeEdad = (persona) => persona.edad >= 18;

// console.log(esMayorDeEdad(personas[1]));

//                              3
// for (let i = 0; i < personas.length; i++) { // i = 3
//   console.log(personas[i]);
// }

// let i = 0;

// while (i < personas.length) {
//   console.log(personas[i]);
//   i++;
// }

// function mostrar(persona) {
//   console.log(persona);
// }

// const mostrar = function (persona) {
//   console.log(persona);
// };

// const mostrar = persona => console.log(persona);

personas.forEach((persona) => console.log(persona));

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
