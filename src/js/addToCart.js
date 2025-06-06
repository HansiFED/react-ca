import fetchSingleProduct from "./fetchSingleProduct";

/**
 * Adds a single product to the shopping cart stored in localStorage.
 *
 * - If the cart does not exist, it initializes it as an empty array.
 * - Fetches a single product using `fetchSingleProduct`.
 * - Adds the fetched product to the cart.
 * - Updates the localStorage with the new cart content.
 *
 * @async
 * @function
 * @returns {Promise<void>} This function does not return anything.
 */
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
