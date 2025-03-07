import "./index.css";
import CartContext from "./js/CartContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import ProductPage from "./pages/product.jsx";
import Contact from "./pages/contact.jsx";
import Checkout from "./pages/checkout.jsx";
import Cart from "./pages/cart.jsx";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/product/" element={<Layout />}>
            <Route index element={<ProductPage />} />
          </Route>
          <Route path="/contact/" element={<Layout />}>
            <Route index element={<Contact />} />
          </Route>
          <Route path="/checkout/" element={<Layout />}>
            <Route index element={<Checkout />} />
          </Route>
          <Route path="/cart/" element={<Layout />}>
            <Route index element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
