import React, { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <img
      src={images[currentIndex]}
      alt={alt}
      className="rounded-lg shadow-md w-150 object-cover aspect-[3/2] transition-opacity duration-500 ease-in-out"
      loading="lazy"
    />
  );
};

export default ImageSlider;