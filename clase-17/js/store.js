export class Store {
  constructor() {
    this.products = [];
    this.filtered = [];
    this.error = null;
    this.loading = false;
    this.loaded = false;
  }

  getProducts() {
    return this.filtered;
  }

  getLoading() {
    return this.loading;
  }

  getError() {
    return this.error;
  }

  setProducts(products) {
    this.products = products;
    this.filtered = products;
    this.loaded = true;
  }

  setLoading(value) {
    this.loading = value;
  }

  setError(value) {
    this.error = value;
  }
}
