import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

  const handleMainClick = () => {
    if (options) {
      setShowOptions(!showOptions);
    } else if (link) {
      navigate(link);
      scrollToTop();
    }
  };

  const handleOptionClick = (link: string) => {
    navigate(link);
    scrollToTop();
  };

  return (
    <article
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

      {/* Mostrar opciones si existen */}
      {options && showOptions && (
      <div className="absolute left-0 top-full z-20 mt-2 bg-white border shadow-lg rounded-md grid grid-cols-2 gap-2 p-3 w-full">
          {options.map((opt, i) => (
            <div
              key={i}
              className="cursor-pointer border rounded-md overflow-hidden shadow hover:shadow-md transition"
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
              <p className="text-center text-sm font-semibold p-2">{opt.title}</p>
            </div>
          ))}
        </div>
      )}
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
