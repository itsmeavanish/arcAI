import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "💧",
    title: "Real-Time Health Analysis",
    description:
      "Advanced sensors analyze urine samples instantly, offering insights into key health indicators like pH levels, infections, and more.",
  },
  {
    icon: "📊",
    title: "Cloud-Based AI Insights",
    description:
      "Health data is securely stored and processed by AI to provide accurate predictions and early disease warnings.",
  },
  {
    icon: "⚡",
    title: "Quick & Accurate Results",
    description:
      "State-of-the-art technology delivers instant health analysis results, ensuring a seamless user experience.",
  },
  {
    icon: "🔒",
    title: "Data Privacy & Security",
    description:
      "Encrypted and protected data ensures complete confidentiality and security of user health information.",
  },
  {
    icon: "🌍",
    title: "Eco-Friendly Design",
    description:
      "Sustainable materials and efficient water usage contribute to an environmentally friendly solution.",
  },
  {
    icon: "🔗",
    title: "User-Friendly Interface",
    description:
      "A sleek and intuitive interface allows users to easily access and understand their health data anytime, anywhere.",
  },
];

const Aboutus = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart Public Toilet Features
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore the revolutionary features that make our smart public toilet an innovation in health and sustainability.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-left transform transition-transform hover:scale-105 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
            >
              <div className="absolute -top-5 -right-5 text-6xl opacity-10">{feature.icon}</div>
              <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;