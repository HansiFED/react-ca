import { X } from "lucide-react";
import { useCart } from "../js/CartContext.jsx";

/**
 * Renders an individual product entry within the shopping cart view.
 *
 * Displays product image, title, description, and pricing.
 * Also includes a clickable icon to remove the item from the cart.
 *
 * @component
 * @param {Object} props - The props for the CartElements component.
 * @param {string} props.id - The unique identifier for the product.
 * @param {string} props.img - The URL of the product image.
 * @param {string} props.alt - The alt text for the product image.
 * @param {string} props.title - The title of the product.
 * @param {string} props.desc - A short description of the product.
 * @param {number} props.price - The original price of the product.
 * @param {number} [props.discount] - The discounted price, if applicable.
 * @returns {JSX.Element} A visual representation of a cart item.
 */
export default function CartElements(props) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-row border-b mt-5 border-gray-300 pb-5 last:border-gray-300">
      <img
        className="w-[100px] h-[150px] object-cover rounded-xl"
        src={props.img}
        alt={props.alt}
      />
      <div className="w-full ml-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px]">{props.title}</h2>
          <X className="cursor-pointer" onClick={() => removeFromCart(props.id)} />
        </div>
        <p>{props.desc}</p>
        <div className="text-[18px] text-right mt-auto">
          {props.discount && props.discount !== props.price ? (
            <>
              <p className="line-through text-gray-500">{props.price} NOK</p>
              <p>{props.discount} NOK</p>
            </>
          ) : (
            <p>{props.price} NOK</p>
          )}
        </div>
      </div>
    </div>
  );
}
