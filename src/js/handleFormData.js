export default function handleFormData(formData) {
  const data = Object.fromEntries(formData.entries());
  console.log(data);
}
