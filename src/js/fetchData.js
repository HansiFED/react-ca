/**
 * Fetches product data from the Noroff online shop API.
 *
 * Sends a GET request to the API and returns the parsed product data.
 *
 * @async
 * @function
 * @returns {Promise<Array>} A promise that resolves to an array of product objects.
 */
export async function fetchData() {
  const response = await fetch("https://v2.api.noroff.dev/online-shop", {
    method: "GET",
  });

  const result = await response.json();

  const data = result.data;

  return data;
}
