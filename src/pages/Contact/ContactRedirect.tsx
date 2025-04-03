import { Link } from "react-router-dom";
import BlockSection from "../../components/BlockSection";
import MarqueeBanner from "../../components/MarqueeBanner";

const ContactRedirect = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/Products/Patios&Pergolas/Attached/20.webp')] bg-cover bg-center">
        <BlockSection />
        <div className="bg-black/50 w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 md:min-h-[calc(100vh-80px)]">
          <div className="grid grid-cols-1 gap-6 w-full max-w-md md:max-w-6xl md:grid-cols-3">
            {[
              {
                title: "Free Quote",
                image: "/assets/images/Contact/James.png",
                name: "James M.",
                desc: (
                  <>
                    <strong className="text-black/90">James M.</strong> wanted a <strong className="text-black/90">formal quote</strong> for his project and filled out our <strong className="text-black/90">custom online form</strong>.
                  </>
                ),
                to: "/freequote",
              },
              {
                title: "Contact Us",
                image: "/assets/images/Contact/Emma.png",
                name: "Emma G.",
                desc: (
                  <>
                    <strong className="text-black/90">Emma G.</strong> had a few questions and <strong className="text-black/90">reached out</strong> to our <strong className="text-black/90">support team</strong> to get answers.
                  </>
                ),
                to: "/formpage",
              },
              {
                title: "Financing",
                image: "/assets/images/Contact/Isaiah.png",
                name: "Iasiah T.",
                desc: (
                  <>
                    <strong className="text-black/90">Iasiah T.</strong> wanted to know how to <strong className="text-black/90">finance his project</strong> and followed these steps.
                  </>
                ),
                to: "/calculator",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md text-center p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-gray-700 mb-4">{card.desc}</p>
                </div>
                <Link
                  to={card.to}
                  className="mt-auto mx-auto w-30 bg-orange-600 text-white font-semibold text-sm text-center px-4 py-2 rounded-full hover:bg-orange-500 transition"
                >
                  {card.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MarqueeBanner />
    </>
  );
};

export default ContactRedirect;