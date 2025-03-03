import { X } from "lucide-react";

export default function CartElements(props) {
  return (
    <div className="flex my-10 cartElement">
      <img className="w-[100px] h-[150px] object-cover" src={props.img} alt={props.alt} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px]">{props.title}</h2>
          <X className="cursor-pointer" />
        </div>
        <p>{props.desc}</p>
        {props.discount && props.discount !== props.price ? (
          <div className="flex gap-2 text-[18px] flex-col text-right ">
            <p id="priceTag" className="line-through text-gray-500">
              {props.price}NOK
            </p>
            <p id="discountedPrice">{props.discount} NOK</p>
          </div>
        ) : (
          <p id="priceTag" className="text-[18px] text-right">
            {props.price} NOK
          </p>
        )}
      </div>
    </div>
  );
}

// I want the x element here to remove the item from the shopping cart when its clicked
