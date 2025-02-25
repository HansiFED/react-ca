export async function fetchData() {
  const response = await fetch("https://v2.api.noroff.dev/online-shop", {
    method: "GET",
  });

  const result = await response.json();

  const data = result.data;

  console.log(data);

  return data;
}
