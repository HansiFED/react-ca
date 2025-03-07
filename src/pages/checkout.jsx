import { useEffect } from "react";
import { useCart } from "../js/CartContext.jsx";

export default function Checkout() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]); // ✅ clearCart is now stable, preventing infinite loop

  return (
    <main className="flex flex-1 items-center flex-col">
      <img src="/checkout.png" alt="checkout success image" />
      <h1>Your order has been confirmed!</h1>
      <p>An email will be sent to you shortly with your order details and shipping information</p>
      <p>Your order-id is: #17361927</p>
    </main>
  );
}
