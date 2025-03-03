import CartElements from "../components/cartelements";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [total, setTotal] = useState(0);

  const cart = localStorage.getItem("cart");
  const data = JSON.parse(cart);

  useEffect(() => {
    // Calculate total when the component mounts
    let totalPrice = 0;
    data.forEach((element) => {
      totalPrice += element.data.discountedPrice
        ? element.data.discountedPrice
        : element.data.price;
    });
    setTotal(Math.floor(totalPrice)); // Set the total after the calculation
  }, [data]); // Ensure useEffect runs only when data changes

  const renderElements = data.map((element) => (
    <CartElements
      key={element.data.id}
      title={element.data.title}
      desc={element.data.description}
      discount={element.data.discountedPrice}
      price={element.data.price}
      img={element.data.image.url}
      alt={element.data.image.alt}
    />
  ));

  return (
    <main className="flex flex-1 flex-col justify-center items-center w-[90%] max-w-[500px]">
      <div className="flex items-center gap-7 flex-col">
        <div className="flex">
          <h1 className="text-[32px]">Your shopping cart </h1>
          <img src="/cartPageIcon.png" alt="shopping cart icon" />
        </div>
        <div>{renderElements}</div>
        <div className="flex gap-2 items-center justify-end w-full">
          <p>Total:</p>
          <p>{total} NOK</p>
        </div>
        <Link className="self-end" to={{ pathname: "/checkout" }}>
          <button className="bg-[#46B64A] text-white p-5 w-[200px] cursor-pointer self-end">
            Checkout
          </button>
        </Link>
      </div>
    </main>
  );
}
