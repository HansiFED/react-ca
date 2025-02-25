import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link
      className="w-fit hover:cursor-pointer mt-24 m-5"
      to={{ pathname: "/product/", search: `?id=${props.id}` }}>
      <div className="w-[200px] h-[300px] overflow-hidden">
        <img
          src={props.image.url}
          className="object-cover w-full h-full shadow-md hover:scale-110 transition duration-300"
          alt=""
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.discountedPrice ? props.discountedPrice : props.price} NOK</p>
      </div>
    </Link>
  );
}
