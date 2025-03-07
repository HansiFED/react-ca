import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link
      className="w-[150px] md:w-fit hover:cursor-pointer mt-24 m-5"
      to={{ pathname: "/product/", search: `?id=${props.id}` }}>
      <div className="overflow-hidden rounded-xl w-[150px] h-[200px]  md:w-[200px] md:h-[300px]">
        <img
          src={props.image.url}
          className="object-cover w-full h-full shadow-md hover:scale-110 transition duration-300"
          alt=""
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p className="flex flex-col-reverse md:flex-row md:items-center flex-wrap">
          {props.discountedPrice && props.discountedPrice !== props.price ? (
            <>
              <span>{props.discountedPrice} NOK</span>
              <span
                className="text-sm text-gray-500 md:ml-2"
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
