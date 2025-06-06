/**
 * Returns the products array without any sorting.
 *
 * @function
 * @param {Array<Object>} products - The array of product objects.
 * @returns {Array<Object>} The original products array.
 */
export function sortByNone(products) {
  return products;
}

/**
 * Sorts products by their effective price (discounted if available).
 *
 * @function
 * @param {Array<Object>} products - The array of product objects.
 * @returns {Array<Object>} A new array sorted by price in ascending order.
 */
export function sortByPrice(products) {
  return [...products].sort((a, b) => {
    const priceA = a.discountedPrice ?? a.price;
    const priceB = b.discountedPrice ?? b.price;
    return priceA - priceB;
  });
}

/**
 * Sorts products by their rating in descending order.
 *
 * @function
 * @param {Array<Object>} products - The array of product objects.
 * @returns {Array<Object>} A new array sorted by rating (highest to lowest).
 */
export function sortByRating(products) {
  return [...products].sort((a, b) => b.rating - a.rating);
}

/**
 * Sorts products by the amount of discount, from highest to lowest.
 *
 * @function
 * @param {Array<Object>} products - The array of product objects.
 * @returns {Array<Object>} A new array sorted by discount amount.
 */
export function sortBySale(products) {
  return [...products].sort((a, b) => {
    const discountA = a.price - (a.discountedPrice ?? a.price);
    const discountB = b.price - (b.discountedPrice ?? b.price);
    return discountB - discountA;
  });
}
