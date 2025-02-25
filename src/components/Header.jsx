import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex h-30 p-10">
      <Link to={{ pathname: "/" }} className="flex items-center flex-grow">
        <div id="logoContainer" className="flex items-center ">
          <img className="w-[60px] h-[60px]" src="/wesell-logo.png" alt="Store logo" />
          <p className="font-koulen text-4xl"> WESELL </p>
        </div>
      </Link>
      <nav>
        <form action="" className="flex gap-[10px] relative items-center">
          <img src="/searchIcon.svg" alt="search" className="absolute right-[10px]" />
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="h-10 rounded-full pl-4 pr-10 bg-[#EBEBEB]"
          />
        </form>
      </nav>
    </header>
  );
}
