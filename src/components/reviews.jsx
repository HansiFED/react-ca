import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import fetchSingleProduct from "../js/fetchSingleProduct";

/**
 * Dropdown component for displaying product reviews.
 *
 * - Fetches product data on mount using `fetchSingleProduct`.
 * - Displays a toggleable section listing user reviews.
 * - Each review shows the username, star rating (1–5), and description.
 * - If no reviews are available, a message is shown instead.
 *
 * @component
 * @returns {JSX.Element} The dropdown review section.
 */
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchSingleProduct().then(setProduct);
  }, []);

  const reviewData = product?.data?.reviews || [];

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full bg-gray-300 px-4 py-2 rounded-lg">
        <span className="flex items-center">
          <span className="text-yellow-500">⭐</span> Reviews ({reviewData.length})
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-xl p-4">
          {reviewData.length > 0 ? (
            reviewData.map((review) => (
              <div key={review.id} className="border-b last:border-b-0 pb-2 mb-2">
                <p className="font-semibold">{review.username}</p>

                <div className="flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < review.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                    />
                  ))}
                </div>

                <p className="text-gray-700">{review.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
