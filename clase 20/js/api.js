export async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  const users = await response.json();

//   console.log(users);
  return users;
}
