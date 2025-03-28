import { Link } from "react-router-dom";

const ContactRedirect = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/images/Products/Patios&Pergolas/Attached/20.webp')] bg-cover bg-center">
      <div className="bg-black/50 w-full h-full min-h-screen flex items-center justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {[
            { title: "Escribenos!", desc: "Esta es la primera tarjeta", to: "/ruta1" },
            { title: "Tarjeta 2", desc: "Esta es la segunda tarjeta", to: "/ruta2" },
            { title: "Tarjeta 3", desc: "Esta es la tercera tarjeta", to: "/ruta3" },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-700 mb-4">{card.desc}</p>
              </div>
              <Link
                to={card.to}
                className="mt-auto inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Ir a {card.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactRedirect;