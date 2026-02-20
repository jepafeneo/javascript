import { getProducts } from "./api.js";
import { renderProducts, setStatus } from "./dom.js";
import { filterProducts } from "./logic.js";

const load = document.querySelector("#load");
const search = document.querySelector("#search");
const list = document.querySelector("#list");
const status = document.querySelector("#status");
const clear = document.querySelector("#clear");

const state = {
  products: [],
  filtered: [],
  error: null,
  loading: false,
  loaded: false,
};

function clear() {
  state.filtered = state.products;
  renderProducts(state.filtered, list);
}

async function loadProducts(params) {
  try {
    state.loading = true;
    state.error = null;
    setStatus(status, "Cargando...");

    const data = await getProducts();

    state.products = data;
    state.filtered = data;
    state.loaded = true;

    renderProducts(state.products, list);
    setStatus(status, "");
  } catch (error) {
    state.error = error.message;
    setStatus(status, state.error);
  } finally {
    state.loading = false;
    console.log(state.loading);
  }
}

function handleSearch(e) {
  if (!state.loaded) {
    setStatus(status, "Primero tenes que cargar los productos");
    return;
  }

  const query = e.target.value;
  state.filtered = filterProducts(state.products, query);

  if (state.filtered.length == 0) {
    setStatus(status, "Sin resultados");
  } else {
    setStatus(status, "");
  }

  renderProducts(state.filtered, list);
}

clear.addEventListener("click", clear);
load.addEventListener("click", loadProducts);
search.addEventListener("input", handleSearch);
