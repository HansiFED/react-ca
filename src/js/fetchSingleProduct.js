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
