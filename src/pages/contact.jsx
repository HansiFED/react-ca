import { useState } from "react";

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
      console.log("Form submitted:", { name, email, subject, body });
    }
  };

  return (
    <main className="max-w-[700px] w-[95%] flex-1">
      <h1 className="text-[35px]">Contact us</h1>
      {submitted ? (
        <p className="text-green-600">Thank you! Your message has been sent.</p>
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
