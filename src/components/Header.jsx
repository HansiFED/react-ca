import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  const shoppingCart = JSON.parse(localStorage.getItem("cart"));

  return (
    <header className="w-full flex h-30 p-10">
      <Link to={{ pathname: "/" }} className="flex items-center flex-grow">
        <div id="logoContainer" className="flex items-center ">
          <img className="w-[60px] h-[60px]" src="/wesell-logo.png" alt="Store logo" />
          <p className="font-koulen text-4xl"> WESELL </p>
        </div>
      </Link>
      <nav className="flex items-center gap-5">
        <form action="" className="flex gap-[10px] relative items-center">
          <img src="/searchIcon.svg" alt="search" className="absolute right-[10px]" />
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="h-10 rounded-full pl-4 pr-10 bg-[#EBEBEB]"
          />
        </form>
        <div>
          <ShoppingBag className="h-7 w-7 relative" />
          <p className="absolute top-[60px] text-sm right-[40px] bg-[#46B64A] px-1 text-white">
            {shoppingCart ? shoppingCart.length : ""}
          </p>
        </div>
      </nav>
    </header>
  );
}
