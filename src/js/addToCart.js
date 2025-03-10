import fetchSingleProduct from "./fetchSingleProduct";

export default async function addToCart() {
  const shoppingCart = localStorage.getItem("cart");

  if (!shoppingCart) {
    localStorage.setItem("cart", "[]");
  }

  const product = await fetchSingleProduct();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
}
