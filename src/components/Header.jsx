import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../js/CartContext.jsx";

/**
 * Renders the website header with navigation and branding.
 *
 * Includes a logo that links to the home page and a shopping bag icon
 * that shows the number of items currently in the cart.
 *
 * @component
 * @returns {JSX.Element} The header element with navigation.
 */
export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <header className="w-full flex h-30 p-10 justify-between">
      <Link to={{ pathname: "/" }} className="flex items-center">
        <div id="logoContainer" className="flex items-center">
          <img className="w-[60px] h-[60px]" src="/wesell-logo.png" alt="Store logo" />
          <p className="font-koulen text-4xl"> WESELL </p>
        </div>
      </Link>
      <nav className="flex items-center gap-5">
        <Link to={{ pathname: "/cart" }}>
          <div className="cursor-pointer relative">
            <ShoppingBag className="h-7 w-7" />
            {cartCount > 0 && (
              <p className="absolute top-4 left-1 bg-[#46B64A] px-1 text-white text-sm">
                {cartCount}
              </p>
            )}
          </div>
        </Link>
      </nav>
    </header>
  );
}
