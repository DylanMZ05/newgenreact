import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (event: string, action: string) => void;
  }
}

const FreeQuoteTracking = () => {
  useEffect(() => {
    const msg = sessionStorage.getItem("whatsappMessage");

    setTimeout(() => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
        console.log("📩 Pixel Lead event sent");
      } else {
        console.warn("⚠️ fbq is not defined");
      }
    }, 300);

    setTimeout(() => {
      if (msg) {
        const whatsappUrl = `https://wa.me/13463800845?text=${encodeURIComponent(msg)}`;
        window.location.href = whatsappUrl;
      }
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      {/* Spinner azul */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-xl text-center px-4">
        Tracking your request... You’ll be redirected to WhatsApp shortly.
      </h1>
    </div>
  );
};

export default FreeQuoteTracking;