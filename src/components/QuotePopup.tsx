import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../hooks/scrollToTop';

const FaWhatsapp = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaWhatsapp })));
const X = lazy(() => import('lucide-react').then(mod => ({ default: mod.X })));
const MessageSquare = lazy(() => import('lucide-react').then(mod => ({ default: mod.MessageSquare })));

const QuotePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const navigate = useNavigate();
  const scrollToTop = useScrollToTop();

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
    navigate('/whatsapp-redirect');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center relative max-w-sm mx-4">
        {/* Botón cerrar (X) */}
        <Suspense fallback={<span />}>
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
        </Suspense>

        {/* Ícono amigable */}
        <div className="relative w-[55px] h-[55px] mx-auto mb-2">
          <Suspense fallback={<span />}>
            <MessageSquare size={55} className="text-orange-500" />
          </Suspense>
          <span className="absolute inset-0 flex items-center justify-center font-bold text-orange-500 text-2xl -mt-[10px] ml-[2px] pointer-events-none">
            ?
          </span>
        </div>

        <p className="text-lg font-semibold mb-4 text-black/90">
          Still undecided? <span className="font-bold text-black">Contact our team</span> and clear up your doubts.
        </p>
        <button
          onClick={() => {
            handleGetQuote();
            scrollToTop();
          }}
          className="flex items-center gap-2 mx-auto bg-green-500 text-lg font-semibold text-white px-3 py-1 rounded-full hover:bg-green-600 transition-all cursor-pointer"
        >
          <Suspense fallback={<span />}>
            <FaWhatsapp size={24} />
          </Suspense>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default QuotePopup;
