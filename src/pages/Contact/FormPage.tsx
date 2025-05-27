import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import BlockSection from "../../components/BlockSection";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    notes: "",
  });

  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrorMsg("");
  };

  const sendToWhatsApp = () => {
    const { name, phone, email, zip, notes } = formData;

    if (!name.trim() || !phone.trim() || !email.trim() || !zip.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    const message = encodeURIComponent(
      `Hello, I'm speaking to you from the website!\n\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      `• *Zip Code:* ${zip}\n` +
      `${notes ? `🔹 *Notes:* ${notes}` : "*Notes:* None"}`
    );

    window.open(`https://wa.me/13463800845?text=${message}`, "_blank");
  };

  return (
    <section
      className="min-h-screen bg-[url('/assets/images/Products/Patios&Pergolas/Attached/20.webp')] bg-cover bg-center"
      aria-labelledby="form-title"
    >
      <BlockSection />

      <div className="bg-black/50 min-h-[calc(100vh-80px)] w-full flex items-center justify-center px-4 py-12">
        <form
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative"
          onSubmit={(e) => {
            e.preventDefault();
            sendToWhatsApp();
          }}
          noValidate
          aria-describedby="form-description"
        >
          <h2 id="form-title" className="text-2xl font-bold text-center mb-4 text-[#0d4754]">
            Contact Us
          </h2>

          {errorMsg && (
            <p className="text-red-500 text-sm text-center mb-3" role="alert">
              {errorMsg}
            </p>
          )}

          <div className="flex flex-col gap-4">
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-label="Full Name"
            />

            <input
              id="phone"
              type="tel"
              placeholder="Phone (Only numbers)"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              aria-label="Phone Number"
            />

            <input
              id="email"
              type="email"
              placeholder="Email (example@example.com)"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              aria-label="Email Address"
            />

            <input
              id="zip"
              type="text"
              placeholder="Zip Code (Only numbers)"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={formData.zip}
              onChange={handleChange}
              required
              autoComplete="postal-code"
              aria-label="Zip Code"
            />

            <textarea
              id="notes"
              placeholder="Notes (Optional)"
              className="border border-gray-300 rounded-md px-4 py-2 h-24"
              value={formData.notes}
              onChange={handleChange}
              aria-label="Additional Notes"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Send message via WhatsApp"
            >
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
