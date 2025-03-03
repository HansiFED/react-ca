import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(shoppingCart.length);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header className="w-full flex h-30 p-10">
      <Link to={{ pathname: "/" }} className="flex items-center flex-grow">
        <div id="logoContainer" className="flex items-center ">
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
