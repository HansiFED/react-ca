export default async function fetchSingleProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const shoppingCart = localStorage.getItem("cart");

  if (!shoppingCart) {
    localStorage.setItem("cart", "[]");
  }

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
