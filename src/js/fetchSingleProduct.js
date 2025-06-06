/**
 * Fetches a single product's data from the Noroff online shop API based on the product ID in the URL.
 *
 * - Extracts the `id` query parameter from the current window URL.
 * - If no `id` is found, logs an error and exits.
 * - Sends a GET request to fetch product details.
 *
 * @async
 * @function
 * @returns {Promise<Object|undefined>} A promise that resolves to the product object if found,
 * or `undefined` if the product ID is missing.
 */
export default async function fetchSingleProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) {
    console.error("Product ID is missing from the URL");
    return;
  }

  const API = `https://v2.api.noroff.dev/online-shop/${productId}`;

  const response = await fetch(API, {
    method: "GET",
  });

  const data = await response.json();

  return data;
}
