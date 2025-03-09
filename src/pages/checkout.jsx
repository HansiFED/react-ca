import { useEffect } from "react";
import { useCart } from "../js/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="flex flex-1 items-center justify-center flex-col text-center gap-5 mx-10">
      <img src="/checkout.png" alt="checkout success image" className="w-40" />
      <h1 className="text-2xl">Your order has been confirmed!</h1>
      <p>An email will be sent to you shortly with your order details and shipping information</p>
      <p>Your order-id is: {`#${Math.floor(Math.random() * 1000000)}`}</p>
      <Link to="/">
        <button className="bg-[#46B64A] text-white p-5 mt-5 w-[200px] cursor-pointer">
          Back to Shopping
        </button>
      </Link>
    </main>
  );
}
