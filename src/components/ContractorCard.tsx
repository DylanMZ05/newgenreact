import React, { useState, useRef, useEffect } from "react";

const ContractorCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const msg = `Hi! I'm contractor ${name} from ${company} and would love to work with your team!`;
    const encodedMsg = encodeURIComponent(msg);
    const phoneNumber = "13465819082";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setCompany("");
  };

  // Close modal on outside click
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
      {/* Contractor Card */}
      <div className="flex flex-col items-center justify-center gap-3 bg-gradient-to-b md:bg-gradient-to-l from-red-800 to-purple-800 text-center text-white p-6 rounded-lg shadow-lg w-full mt-6 md:mt-10 md:h-100 md:max-w-md">
        <p className="text-2xl font-bold md:text-3xl">ARE YOU A CONTRACTOR?</p>
        <p className="mt-2 text-xl text-white/80 md:text-2xl">
          We’re always looking to expand our team with skilled, reliable professionals.
        </p>
        <p className="text-2xl font-bold md:text-3xl">
          Let’s build something great together!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full font-semibold hover:bg-orange-600 transition-all cursor-pointer"
        >
          WRITE US NOW!
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-full max-w-md text-gray-800 relative"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer"
              aria-label="Close modal"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              Tell us about you
            </h2>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="block mb-2">
              Your Company (or write “Autodidact”)
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="Autodidact"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleSend}
                disabled={!name || !company}
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