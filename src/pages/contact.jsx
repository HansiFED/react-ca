import { useState } from "react";

/**
 * Renders a contact form with basic validation and submission feedback.
 *
 * - Validates name, email, subject, and body fields.
 * - Displays error messages for invalid input.
 * - Shows a confirmation message upon successful submission.
 * - Does not send the data to a server (client-side only).
 *
 * @component
 * @returns {JSX.Element} The contact form interface.
 */
export default function Contact() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const body = formData.get("body").trim();

    const newErrors = {};
    if (name.length < 3) newErrors.name = "Must be at least 3 characters";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (subject.length < 3) newErrors.subject = "Must be at least 3 characters";
    if (body.length < 3) newErrors.body = "Must be at least 3 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <main className="max-w-[700px] w-[95%] flex-1 flex flex-col justify-center">
      <h1 className="text-[35px] mb-10 text-center">Contact us</h1>
      {submitted ? (
        <p className="text-green-600 text-center">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
          <label className="text-[18px]">Full name</label>
          <input type="text" name="name" className="bg-[#EBEBEB] rounded-lg p-3" />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label className="text-[18px]">Subject</label>
          <input type="text" name="subject" className="bg-[#EBEBEB] rounded-lg p-3" />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}

          <label className="text-[18px]">Email</label>
          <input type="email" name="email" className="bg-[#EBEBEB] rounded-lg p-3" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label className="text-[18px]">Body</label>
          <textarea name="body" className="bg-[#EBEBEB] rounded-lg p-3 h-[150px] resize-none" />
          {errors.body && <p className="text-red-500">{errors.body}</p>}

          <button
            type="submit"
            className="bg-[#46B64A] text-white p-3 mt-4 cursor-pointer rounded-lg">
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
