import { Link } from "react-router-dom";

/**
 * Renders a product card that links to the product detail page.
 *
 * Displays the product image, title, and pricing information,
 * including discounts if applicable. Clicking the card navigates
 * to the product detail view using the product's ID.
 *
 * @component
 * @param {Object} props - The props for the Card component.
 * @param {string} props.id - The unique identifier for the product.
 * @param {string} props.title - The title of the product.
 * @param {Object} props.image - The image object for the product.
 * @param {string} props.image.url - The URL of the product image.
 * @param {number} props.price - The original price of the product.
 * @param {number} [props.discountedPrice] - The discounted price, if available.
 * @returns {JSX.Element} A clickable product card component.
 */
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
