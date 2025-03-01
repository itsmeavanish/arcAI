import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
];

const ReviewCard = ({ name, company, review, rating }) => {
  return (
    <motion.div
      className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700 max-w-sm relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <Quote className="absolute top-4 right-4 text-gray-600 h-8 w-8" />
      <div className="flex items-center gap-2 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className={`h-5 w-5 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`} />
        ))}
      </div>
      <p className="text-gray-300 mb-4 text-lg italic">"{review}"</p>
      <h3 className="text-white font-semibold text-xl">{name}</h3>
      <p className="text-gray-400 text-sm">{company}</p>
    </motion.div>
  );
};

export default function ReviewsSection() {
  return (
    <section className="bg-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
