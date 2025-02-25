import { useEffect, useState } from "react";
import fetchSingleProduct from "../js/fetchSingleProduct";

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
    <main>
      <section className="flex flex-col items-center md:flex-row">
        <img
          src={product.data.image.url}
          alt={product.data.description}
          className="h-[800px] w-[600px] object-cover"
        />
        <div className="flex flex-col">
          <h1>{product.data.title}</h1>
          <p>{product.data.description}</p>

          {discountedPrice && discountedPrice !== originalPrice ? (
            <div className="flex gap-2">
              <p id="discountedPrice">{discountedPrice}NOK</p>
              <p id="priceTag" className="line-through text-gray-500">
                {originalPrice}NOK
              </p>
            </div>
          ) : (
            <p id="priceTag">{originalPrice} NOK</p>
          )}
          <button> Add to Cart </button>
        </div>
      </section>
    </main>
  );
}
