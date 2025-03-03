import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link
      className="w-fit hover:cursor-pointer mt-24 m-5"
      to={{ pathname: "/product/", search: `?id=${props.id}` }}>
      <div className="w-[200px] h-[300px] overflow-hidden rounded-xl">
        <img
          src={props.image.url}
          className="object-cover w-full h-full shadow-md hover:scale-110 transition duration-300"
          alt=""
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>
          {props.discountedPrice && props.discountedPrice !== props.price ? (
            <>
              <span>{props.discountedPrice} NOK</span>
              <span
                className="text-sm text-gray-500 ml-2"
                style={{ textDecoration: "line-through" }}>
                {props.price} NOK
              </span>
            </>
          ) : (
            <span>{props.discountedPrice ? props.discountedPrice : props.price} NOK</span>
          )}
        </p>
      </div>
    </Link>
  );
}
