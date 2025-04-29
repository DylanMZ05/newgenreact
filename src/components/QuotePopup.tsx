import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Gift, Sparkles } from 'lucide-react'; // Nuevo ícono

const QuotePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAppeared) {
        setShowPopup(true);
        setHasAppeared(true);
      }
    }, 300000); // 5 minutos

    return () => clearTimeout(timer);
  }, [hasAppeared]);

  const handleClose = () => setShowPopup(false);

  const handleGetQuote = () => {
    setShowPopup(false);
    navigate('/get-a-free-quote-houston');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center relative max-w-sm mx-4">
        {/* Botón cerrar (X) */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Ícono amigable */}
        <div className='flex items-center justify-center mx-auto w-full'>
          <Sparkles size={24} className="text-orange-500" />
          <Gift size={55} className="text-orange-500" />
          <Sparkles size={24} className="text-orange-500" />
        </div>

        <p className="text-lg font-semibold mb-4 text-black/90">
          Still undecided? Apply for a <span className='font-bold text-black'>Free Quote</span> now.
        </p>
        <button
          onClick={handleGetQuote}
          className="bg-orange-500 text-lg font-semibold text-white px-5 py-1 rounded-full hover:bg-orange-600 transition-all cursor-pointer"
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};

export default QuotePopup;