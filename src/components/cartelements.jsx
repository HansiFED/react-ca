import { X } from "lucide-react";
import { useCart } from "../js/CartContext.jsx";

export default function CartElements(props) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex my-10 cartElement border-b border-gray-300 pb-5 last:border-gray-300">
      <img className="w-[100px] h-[150px] object-cover" src={props.img} alt={props.alt} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px]">{props.title}</h2>
          <X className="cursor-pointer" onClick={() => removeFromCart(props.id)} />
        </div>
        <p>{props.desc}</p>
        <div className="text-[18px] text-right">
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
