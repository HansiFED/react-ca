import { useEffect, useState } from "react";
import fetchSingleProduct from "../js/fetchSingleProduct";
import Dropdown from "../components/reviews";
import addToCart from "../js/addToCart";

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchSingleProduct().then(setProduct);
  }, []);

  if (!product) return null; // Prevents rendering before data loads
  console.log(product);

  const discountedPrice = product.data.discountedPrice;
  const originalPrice = product.data.price;

  return (
    <main className="flex-1 flex">
      <section className="flex flex-col items-center md:flex-row flex-wrap gap-10">
        <img
          src={product.data.image.url}
          alt={product.data.description}
          className="h-[800px] w-[600px] object-cover rounded-xl"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-[26px]">{product.data.title}</h1>
          <p className="text-[18px]">{product.data.description}</p>

          {discountedPrice && discountedPrice !== originalPrice ? (
            <div className="flex gap-2 text-[22px] flex-col ">
              <p id="priceTag" className="line-through text-gray-500">
                {originalPrice}NOK
              </p>
              <p id="discountedPrice">{discountedPrice}NOK</p>
              <p className="text-sm text-gray-500">
                {" "}
                (save {Math.floor(originalPrice) - Math.floor(discountedPrice)}NOK today){" "}
              </p>
            </div>
          ) : (
            <p id="priceTag" className="text-[22px]">
              {originalPrice} NOK
            </p>
          )}
          <button
            onClick={addToCart}
            className="bg-[#46B64A] text-white p-5 w-[200px] cursor-pointer">
            {" "}
            Add to Cart{" "}
          </button>
          <Dropdown />
        </div>
      </section>
    </main>
  );
}
