import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const totalPrice = cart.reduce(
      (sum, item) => sum + (item.data.discountedPrice || item.data.price),
      0
    );
    setTotal(Math.floor(totalPrice));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
  }, []);

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.data.id === productId);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export default CartProvider;
