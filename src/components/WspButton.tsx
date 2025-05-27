import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const FaWhatsapp = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaWhatsapp }))
);

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const showAndHidePopup = () => {
      setShowPopup(true);
      setFadeOut(false);

      timeoutId = setTimeout(() => {
        setFadeOut(true);
        timeoutId = setTimeout(() => {
          setShowPopup(false);
          timeoutId = setTimeout(() => {
            showAndHidePopup();
          }, 5000);
        }, 500);
      }, 5000);
    };

    timeoutId = setTimeout(() => {
      showAndHidePopup();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* Popup burbuja */}
      {showPopup && (
        <div
          className={`fixed z-[2100] bottom-[80px] right-[27px]
                      bg-white text-black text-sm px-4 py-2 rounded-xl shadow-lg
                      border border-green-500/70 
                      ${fadeOut ? "animate-fadeOut" : "animate-popup"}`}
        >
          Contact Us
          <div className="absolute -bottom-2 right-3 w-0 h-0 
                border-l-8 border-r-8 border-t-8 
                border-l-transparent border-r-transparent border-t-white" />
        </div>
      )}

      {/* Botón de WhatsApp */}
      <button
        onClick={() => navigate("/whatsapp-redirect")}
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-2 sm:right-4 md:right-5 lg:right-8 
                  bg-green-500 text-white p-3 rounded-full shadow-xl 
                  hover:bg-green-600 transition duration-300 flex items-center justify-center 
                  w-14 h-14 focus:ring-2 focus:ring-green-300 border border-black/10 z-[2000] cursor-pointer"
      >
        <Suspense fallback={<span />}>
          <FaWhatsapp size={28} />
        </Suspense>
      </button>
    </>
  );
};

export default WhatsAppButton;
