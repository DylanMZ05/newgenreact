import { Link } from "react-router-dom";
import { FiFileText, FiMessageCircle, FiDollarSign } from "react-icons/fi";
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
                icon: <FiFileText className="text-[#0d4754] w-12 h-12 mx-auto mb-2" />,
                text: "Want to personalize your project? Fill out this custom form and get a free online estimate.",
                button: "Free Quote",
                to: "/freequote",
                external: false,
              },
              {
                icon: <FiMessageCircle className="text-[#0d4754] w-12 h-12 mx-auto mb-2" />,
                text: "Want to speak directly with the team? Click here.",
                button: "Contact Us",
                to: "https://wa.me/13463800845",
                external: true,
              },
              {
                icon: <FiDollarSign className="text-[#0d4754] w-12 h-12 mx-auto mb-2" />,
                text: "Want to estimate your financing options? Click here to see how it works.",
                button: "Get Financing",
                to: "/calculator",
                external: false,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md text-center p-6 flex flex-col justify-between"
              >
                <div>
                  {item.icon}
                  <div className="bg-orange-600 h-1 w-5 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
                {item.external ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 mx-auto w-30 bg-[#0d4754] text-white font-semibold text-sm text-center px-4 py-2 rounded-full hover:bg-orange-500 transition"
                  >
                    {item.button}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="mt-6 mx-auto w-30 bg-[#0d4754] text-white font-semibold text-sm text-center px-4 py-2 rounded-full hover:bg-orange-500 transition"
                  >
                    {item.button}
                  </Link>
                )}
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