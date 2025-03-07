import { useEffect, useState } from "react";
import { fetchData } from "../js/fetchData";
import { sortByNone, sortByPrice, sortByRating, sortBySale } from "../js/handleSorting";
import Card from "../components/card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setProducts(data);
      setSortedProducts(data);
    }
    getData();
  }, []);

  function handleSort(event) {
    const value = event.target.value;
    let sorted;
    if (value === "None") {
      sorted = sortByNone(products);
    } else if (value === "Price") {
      sorted = sortByPrice(sortedProducts);
    } else if (value === "Rating") {
      sorted = sortByRating(sortedProducts);
    } else if (value === "Sale") {
      sorted = sortBySale(sortedProducts);
    }
    setSortedProducts(sorted);
  }

  function handleSearch(event) {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setSortedProducts(filteredProducts);
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
    <main className="max-w-[1400px] w-full p-0 pt-10 pb-10 md:p-10 flex flex-col flex-1">
      <div className="flex items-center text-center justify-center md:justify-between flex-wrap gap-5">
        <h1 className="text-3xl">All products</h1>
        <div className="flex gap-5 md:gap-3 items-center justify-center flex-wrap">
          <form className="flex gap-[10px] relative items-center">
            <img src="/searchIcon.svg" alt="search" className="absolute right-[10px]" />
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              className="h-10 rounded-full pl-4 pr-10 bg-[#EBEBEB]"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </form>
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
      </div>
      <section className="flex flex-wrap justify-center">{cardElements}</section>
    </main>
  );
}
