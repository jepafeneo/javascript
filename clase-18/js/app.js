const products = [
  { id: 1, title: "Camisa", price: 100, oferta: true },
  { id: 2, title: "Zapato", price: 200, oferta: false },
  { id: 3, title: "Gorra", price: 50, oferta: true },
  { id: 4, title: "Pantalón", price: 150, oferta: false },
];

function renderAndFilter() {
  const list = document.querySelector("#list");
  const input = document.querySelector("#search");
  const checkbox = document.querySelector("#onlyOffers");
  const msg = document.querySelector("#msg");

  const query = input.value.trim().toLowerCase();
  const onlyOffers = checkbox.checked;

  let filtered = products;

  filtered = filtered.filter((p) => p.title.toLowerCase().includes(query));

  if (onlyOffers) {
    filtered = filtered.filter((p) => p.oferta === true);
  }

  list.innerHTML = "";

  filtered.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.title} - $${p.price} ${p.oferta ? "(Oferta)" : ""}`;
    list.appendChild(li);
  });

  msg.textContent = filtered.length === 0 ? "Sin resultados" : "";
}

renderAndFilter();

document.querySelector("#search").addEventListener("keyup", renderAndFilter);

document
  .querySelector("#onlyOffers")
  .addEventListener("change", renderAndFilter);
