import Header from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

/**
 * Defines the main layout of the application.
 *
 * Renders the Header, the current route content via Outlet,
 * and the Footer. Used as a wrapper in the routing structure.
 *
 * @component
 * @returns {JSX.Element} The layout structure with shared UI elements.
 */
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
