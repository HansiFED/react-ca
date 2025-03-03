import handleFormData from "../js/handleFormData";

export default function Contact() {
  return (
    <main className="max-w-[700px] w-[95%] flex-1">
      <h1 className="text-[35px]"> Contact Us</h1>
      <form action={handleFormData} className="flex flex-col w-full">
        <label htmlFor="name" className="text-[20px]">
          Full Name
        </label>
        <input type="text" name="name" className="bg-[#EBEBEB]" />
        <label htmlFor="email" className="text-[20px]">
          Email
        </label>
        <input type="email" name="email" className="bg-[#EBEBEB]" />
        <label htmlFor="subject " className="text-[20px]">
          Subject
        </label>
        <input type="text" name="subject" className="bg-[#EBEBEB]" />
        <label htmlFor="body" className="text-[20px]">
          Body
        </label>
        <textarea name="body" id="body" className="bg-[#EBEBEB] resize-none"></textarea>
        <button>Submit</button>
      </form>
    </main>
  );
}
