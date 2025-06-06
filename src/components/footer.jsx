import { Link } from "react-router";

/**
 * Renders the footer section of the website.
 *
 * Displays a contact link with a logo that navigates to the contact page.
 *
 * @component
 * @returns {JSX.Element} The footer element.
 */
export default function Footer() {
  return (
    <footer className="bg-[#262626] h-[125px] flex justify-center text-white w-full items-center">
      <Link to={{ pathname: "/contact" }} className="flex items-center w-fit h-fit">
        <img className="w-[50px]" src="/wesell-logo.png" alt="" />
        <p>Contact Us</p>
      </Link>
    </footer>
  );
}
