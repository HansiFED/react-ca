import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartContext = createContext();

/**
 * Provides cart state and functionality to all child components.
 *
 * - Initializes cart from `localStorage` and keeps it in sync.
 * - Calculates total price based on `discountedPrice` if available.
 * - Offers `addToCart`, `removeFromCart`, and `clearCart` actions.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components that will have access to the cart context.
 * @returns {JSX.Element} Cart context provider.
 */
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

  /**
   * Adds a product to the cart.
   *
   * @param {Object} product - The product object to add to the cart.
   */
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  /**
   * Clears all items from the cart and removes cart data from localStorage.
   *
   * @function
   */
  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
  }, []);

  /**
   * Removes a product from the cart by product ID.
   *
   * @param {string} productId - The ID of the product to remove.
   */
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

/**
 * Custom hook to access the cart context.
 *
 * @returns {Object} The cart context including state and actions.
 */
export const useCart = () => useContext(CartContext);

export default CartProvider;
