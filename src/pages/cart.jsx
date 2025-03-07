import CartElements from "../components/cartelements";
import { useCart } from "../js/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, total } = useCart();
  if (cart.length === 0) {
    return (
      <main className="flex flex-1 flex-col justify-center items-center w-[90%] max-w-[500px] text-center">
        <h1 className="text-[24px] font-semibold">Your cart is empty</h1>
        <p className="text-gray-500">Looks like you haven’t added anything yet.</p>
        <Link to="/">
          <button className="bg-[#46B64A] text-white p-5 mt-5 w-[200px] cursor-pointer">
            Back to Shopping
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col justify-center items-center w-[90%] max-w-[500px]">
      <div className="flex items-center gap-7 flex-col">
        <div className="flex">
          <h1 className="text-[32px]">Your shopping cart</h1>
          <img src="/cartPageIcon.png" alt="shopping cart icon" />
        </div>
        <div className="w-full">
          {cart.map((element, index) => (
            <CartElements
              key={`${element.data.id}-${index}`}
              id={element.data.id}
              title={element.data.title}
              desc={element.data.description}
              discount={element.data.discountedPrice}
              price={element.data.price}
              img={element.data.image.url}
              alt={element.data.image.alt}
              quantity={element.quantity}
            />
          ))}
        </div>
        <div className="flex gap-2 items-center justify-end w-full">
          <p>Total:</p>
          <p>{total} NOK</p>
        </div>
        <Link className="self-end" to="/checkout">
          <button className="bg-[#46B64A] text-white p-5 w-[200px] cursor-pointer self-end">
            Checkout
          </button>
        </Link>
      </div>
    </main>
  );
}
