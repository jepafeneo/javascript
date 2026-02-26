// fetch("https://dummyjson.com/users")
//   .then((response) => response.json())
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error.message));

// ---

// async function getUsers() {
//   const response = await fetch("https://dummyjson.com/users");
//   const users = await response.json();

//   console.log(users);
// }

// getUsers();

// ---

// async function getUsers() {
//   try {
//     const response = await fetch("https://dummyjson.com/users");
//     const users = await response.json();

//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers();

// ---

// dom / ui -> elementos de HTML
// logic -> filtrar, buscar, calcular
// api -> internet

import { getUsers } from "./api.js";

// function loadUsers() {
//   getUsers()
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((error) => {
//       console.log("Error al cargar usuarios:", error.message);
//     });
// }

async function loadUsers() {
  try {
    const users = await getUsers();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}

document.querySelector("#load").addEventListener("click", loadUsers);
