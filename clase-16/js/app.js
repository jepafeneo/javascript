import { getProducts } from "./api.js";
import { renderProducts, setStatus } from "./dom.js";
import { filterProducts } from "./logic.js";

const load = document.querySelector("#load");
const search = document.querySelector("#search");
const list = document.querySelector("#list");
const status = document.querySelector("#status");

let productsCache = [];

load.addEventListener("click", async () => {
  setStatus(status, "Cargando...");

  const products = await getProducts();

  productsCache = products;
  renderProducts(productsCache, list);
  setStatus(status, "");
});

search.addEventListener("input", (e) => {
  const query = e.target.value;
  const filtered = filterProducts(productsCache, query);

  renderProducts(filtered, list);
});
