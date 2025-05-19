import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useScrollToTop from "../../../hooks/scrollToTop";

type CardOption = {
  title: string;
  imageUrl: string;
  link: string;
};

type CardProps = {
  title: string;
  imageUrl: string;
  link?: string;
  options?: CardOption[];
};

const Card: React.FC<CardProps> = ({ title, imageUrl, link, options }) => {
  const navigate = useNavigate();
  const scrollToTop = useScrollToTop();
  const [showOptions, setShowOptions] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMainClick = () => {
    if (options) {
      setShowOptions((prev) => !prev);

      // Scroll al centro luego de mostrar
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else if (link) {
      navigate(link);
      scrollToTop();
    }
  };

  const handleOptionClick = (link: string) => {
    navigate(link);
    scrollToTop();
  };

  // Cierre del dropdown al hacer clic fuera
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <article
      ref={cardRef}
      onClick={handleMainClick}
      className="card-container relative w-[90vw] md:w-80 rounded-lg shadow-md overflow-visible cursor-pointer"
      aria-label={`Go to ${title} service`}
    >
      <figure className="w-full h-64 overflow-hidden rounded-lg relative">
        <img
          src={imageUrl}
          alt={`${title} service`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <motion.figcaption
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-white text-2xl font-semibold"
        >
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
        </motion.figcaption>
      </figure>

      {/* Dropdown de opciones animado */}
      <AnimatePresence>
        {options && showOptions && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full z-20 mt-2 bg-white grid grid-cols-2 gap-2 w-full"
          >
            {options.map((opt, i) => (
              <div
                key={i}
                className="cursor-pointer border rounded-md overflow-hidden shadow hover:shadow-md transition-all hover:scale-103"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(opt.link);
                }}
              >
                <img
                  src={opt.imageUrl}
                  alt={opt.title}
                  className="w-full h-24 object-cover"
                />
                <p className="text-center text-sm font-semibold p-2 bg-white">
                  {opt.title}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

type CardGridProps = {
  cards: CardProps[];
};

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="flex justify-center gap-7 flex-wrap">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;