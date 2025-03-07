import { useEffect } from "react";
import { useCart } from "../js/CartContext.jsx";

export default function Checkout() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]); // ✅ clearCart is now stable, preventing infinite loop

  return (
    <main className="flex flex-1 items-center justify-center flex-col text-center gap-5">
      <img src="/checkout.png" alt="checkout success image" className="w-40" />
      <h1 className="text-2xl">Your order has been confirmed!</h1>
      <p>An email will be sent to you shortly with your order details and shipping information</p>
      <p>Your order-id is: {`#${Math.floor(Math.random() * 1000000)}`}</p>
    </main>
  );
}
