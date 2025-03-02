import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    company: "Tech Corp",
    review: "The AI solutions provided by this company are top-notch. The accuracy and efficiency have greatly improved our workflow.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    company: "FinBank",
    review: "Impressive AI models that have helped us predict market trends with remarkable precision!",
    rating: 4.5,
  },
  {
    name: "Alice Brown",
    company: "MediTech",
    review: "The AI chatbot is a game changer for our customer support team. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Lee",
    company: "Auto AI",
    review: "Their AI-powered automation tools have saved us countless hours. The best investment we've made!",
    rating: 4.5,
  },
  {
    name: "Sarah Connor",
    company: "Cyber Tech",
    review: "Excellent AI-driven solutions. The customer support is also fantastic!",
    rating: 5,
  },
];

const ReviewCard = ({ name, company, review, rating }) => {
  return (
    <motion.div
      className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700 max-w-2xl w-full relative overflow-hidden flex flex-col items-center text-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="absolute top-4 right-4 text-gray-600 h-8 w-8" />
      <div className="flex items-center gap-2 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className={`h-5 w-5 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`} />
        ))}
      </div>
      <p className="text-gray-300 mb-4 text-lg italic max-w-lg">"{review}"</p>
      <h3 className="text-white font-semibold text-xl">{name}</h3>
      <p className="text-gray-400 text-sm">{company}</p>
    </motion.div>
  );
};

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-gradient-to-l from-black/70 to-blue-950 text-gray-900 py-16 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
      <div className="flex items-center gap-4 w-full max-w-4xl">
        <button onClick={prevReview} className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700">
          <ChevronLeft className="h-8 w-8" />
        </button>
        <div className="flex justify-center w-full overflow-hidden">
          <ReviewCard key={index} {...reviews[index]} />
        </div>
        <button onClick={nextReview} className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700">
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
