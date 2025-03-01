export function sortByPrice(products) {
  return [...products].sort((a, b) => {
    const priceA = a.discountedPrice ?? a.price;
    const priceB = b.discountedPrice ?? b.price;
    return priceA - priceB;
  });
}

export function sortByRating(products) {
  return [...products].sort((a, b) => b.rating - a.rating);
}

export function sortBySale(products) {
  return [...products].sort((a, b) => {
    const discountA = a.price - (a.discountedPrice ?? a.price);
    const discountB = b.price - (b.discountedPrice ?? b.price);
    return discountB - discountA;
  });
}
