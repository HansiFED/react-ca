import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import ProductPage from "./pages/product.jsx";
import Contact from "./pages/contact.jsx";
import Checkout from "./pages/checkout.jsx";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
