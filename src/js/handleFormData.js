/**
 * Converts FormData into a plain JavaScript object.
 *
 * @function
 * @param {FormData} formData - The FormData object to be converted.
 * @returns {void} This function does not return anything currently.
 */
export default function handleFormData(formData) {
  const data = Object.fromEntries(formData.entries());
}
