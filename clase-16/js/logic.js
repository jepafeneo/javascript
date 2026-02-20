export function filterProducts(products, query) {
  const q = query.trim().toLowerCase();
  if (q === "") return products;

  return products.filter((p) => p.title.toLowerCase().includes(q));
}
