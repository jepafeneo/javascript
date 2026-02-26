export async function getUsers() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  const data = await response.json();

  // console.log(data);
  return data.users;
}
