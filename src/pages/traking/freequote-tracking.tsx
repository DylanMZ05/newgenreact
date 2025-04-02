import { useEffect } from "react";

// ✅ Declaración global para el Pixel
declare global {
  interface Window {
    fbq: (event: string, action: string) => void;
  }
}

const FreeQuoteTracking = () => {
  useEffect(() => {
    // 1. Leer mensaje desde sessionStorage
    const msg = sessionStorage.getItem("whatsappMessage");

    // 2. Disparar el evento del Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }

    // 3. Redirigir a WhatsApp
    if (msg) {
      const whatsappUrl = `https://wa.me/13463800845?text=${encodeURIComponent(msg)}`;
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 500);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-xl text-center px-4">
        Tracking your request... You’ll be redirected to WhatsApp shortly.
      </h1>
    </div>
  );
};

export default FreeQuoteTracking;