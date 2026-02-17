// const promise = fetch("https://fakestoreapi.com/products/1");

// promise
//   .then((response) => {
//     console.log(response);

//     return response.json();
//   })
//   .then((product) => console.log(product));

// fetch

// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async / await

async function mostrarProducto() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const product = await response.json();
  console.log(product);

  document.querySelector("#titulo").textContent = product.title;
  document.querySelector("#precio").textContent = `$ ${product.price}`;

  const imagen = document.querySelector("#imagen");
  imagen.src = product.image;
  imagen.alt = product.title;
}

mostrarProducto();
