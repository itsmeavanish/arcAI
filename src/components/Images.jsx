import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/products/diabetic eng.jpg";
import image2 from "../assets/products/femetop eng.jpg";
import image3 from "../assets/products/gas eng.jpg";
import image4 from "../assets/products/Copy of liv eng.jpg";
import image5 from "../assets/products/Copy of memeory eng.jpg";
import image6 from "../assets/products/Copy of OCIMUM eng.jpg";
import image7 from "../assets/products/Copy of mc eng.jpg";
import image8 from "../assets/products/heart eng.jpg";
import image9 from "../assets/products/Copy of fevertop eng.jpg";
import image10 from "../assets/products/baby eng.jpg";

const ImagesCarousel = () => {
  const images = [
    { src: image1, alt: "Diabetic product" },
    { src: image2, alt: "Femetop product" },
    { src: image3, alt: "Gas relief product" },
    { src: image4, alt: "Liver health product" },
    { src: image5, alt: "Memory enhancement product" },
    { src: image6, alt: "Ocimum product" },
    { src: image7, alt: "MC product" },
    { src: image8, alt: "Heart product" },
    { src: image9, alt: "Fever relief product" },
    { src: image10, alt: "Baby product" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <div className="text-center p-10">
        <h1 className="font-bold text-teal-600 text-4xl mb-4">Product Gallery</h1>
      </div>
      {/* Main Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-gray-200 to-gray-300 p-6 rounded-lg shadow-lg transform perspective-1000 hover:rotate-y-2 hover:rotate-x-1 hover:scale-105"
            >
              <img
                src={images[(currentIndex + i) % images.length].src}
                alt={images[(currentIndex + i) % images.length].alt}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          ))}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={prevImage}
          className="bg-rose-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-teal-700"
        >
          <FaArrowLeft />
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={nextImage}
          className="bg-rose-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-teal-700"
        >
          Next
          <FaArrowRight />
        </motion.button>
      </div>
      {/* Thumbnail Previews */}
      <motion.div
        className="flex mt-8 space-x-4 overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotateY: 5, rotateX: 5 }}
            onClick={() => setCurrentIndex(index)}
            className={`w-24 h-24 flex-shrink-0 cursor-pointer border-2 rounded-lg transition-transform duration-300 ${
              currentIndex === index ? "border-rose-500" : "border-gray-300"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImagesCarousel;
