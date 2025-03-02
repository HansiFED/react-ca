import { useEffect, useState } from "react";
import { fetchData } from "../js/fetchData";
import { sortByNone, sortByPrice, sortByRating, sortBySale } from "../js/handleSorting";
import Card from "../components/card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setProducts(data);
      setSortedProducts(data); // Default to unsorted data
    }
    getData();
  }, []);

  function handleSort(event) {
    const value = event.target.value;
    if (value === "None") {
      setSortedProducts(sortByNone(products));
    } else if (value === "Price") {
      setSortedProducts(sortByPrice(products));
    } else if (value === "Rating") {
      setSortedProducts(sortByRating(products));
    } else if (value === "Sale") {
      setSortedProducts(sortBySale(products));
    }
  }

  const cardElements = sortedProducts.map((element) => (
    <Card
      key={element.id}
      id={element.id}
      image={element.image}
      title={element.title}
      price={element.price}
      discountedPrice={element.discountedPrice}
    />
  ));

  return (
    <main className="max-w-[1400px] w-full p-10 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">All products</h1>
        <div className="flex gap-3">
          <p>Sort By</p>
          <select
            name="sortBy"
            id="sortBy"
            className="bg-[#EBEBEB] rounded-full px-3"
            onChange={handleSort}>
            <option value="None">None</option>
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
            <option value="Sale">Sale</option>
          </select>
        </div>
      </div>
      <section className="flex flex-wrap justify-between">{cardElements}</section>
    </main>
  );
}
