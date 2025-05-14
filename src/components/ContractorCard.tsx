import React, { useState, useRef, useEffect } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0na27QrMtWwm-dK68BwV2BOKOn6lbnOR4-XoRuRL8qzQk5g1wz5XuqmrYXeyxLWVu/exec"; // Reemplazá esto por tu URL real

const ContractorCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setCompany("");
    setEmail("");
  };

  const handleSend = async () => {
  const msg = `Hi! I'm contractor ${name} from ${company} and would love to work with your team!`;
  const encodedMsg = encodeURIComponent(msg);
  const phoneNumber = "13465819082";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ name, company, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error al conectar con Google Sheets:", error);
      // Ya no mostramos alert
    }

    // Siempre redirige a WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    closeModal();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-red-800 to-purple-800 text-center text-white p-6 rounded-lg shadow-lg w-full mt-6 md:mt-10 md:h-100 md:max-w-md">
        <p className="text-2xl font-bold">ARE YOU A CONTRACTOR?</p>
        <p className="text-xl text-white/80">We’re always looking for skilled professionals.</p>
        <p className="text-2xl font-bold">Let’s build something great together!</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full font-semibold hover:bg-orange-600 transition-all"
        >
          WRITE US NOW!
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg w-full max-w-md text-gray-800 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 text-2xl font-bold">
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Tell us about you</h2>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="block mb-2">Your Company</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="Autodidact"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label className="block mb-2">Your Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mb-4"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-between">
              <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleSend}
                disabled={!name || !company || !email}
              >
                Send to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContractorCard;