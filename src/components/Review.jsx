import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaThumbsUp, FaChartLine, FaRedo } from "react-icons/fa"; // Importing icons

const reviews = [
  {
    name: "Anurag Upadhyay",
    review: "This has helper me a lot",
  },
  {
    name: "Rajesh Kumar",
    review: "I love how it saves water without compromising on cleanliness. Truly a great investment!",
  },
  // {
  //   name: "Sita Rani",
  //   review: "This e-toilet is eco-friendly and has made a significant difference in our household.",
  // },
  // {
  //   name: "Vikram Singh",
  //   review: "The hygiene features are top-notch! I feel safer and cleaner using this toilet.",
  // },
  // {
  //   name: "Meera Joshi",
  //   review: "My family loves it! It’s convenient and makes life so much easier.",
  // },
  // {
  //   name: "Aarav Kapoor",
  //   review: "The advanced technology in this toilet is impressive. Highly recommend it to everyone!",
  // },
];

const Marquee = () => {
  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <section className="pb-12 mx-auto md:pb-20 max-w-6xl">
        <div className="py-4 text-center md:py-8">
          <h4 className="text-base font-bold tracking-wide text-teal-600 uppercase text-center">
            Customer Reviews
          </h4>
          <p className="mt-2 text-xl tracking-tight text-gray-300 md:text-2xl">
            What our clients says about our services
          </p>
        </div>

        {/* Marquee Container */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 30, ease: [0.3, 0, 0.7, 1], repeat: Infinity }} // Slower movement
        >
          {/* Repeat the reviews to create a seamless effect */}
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-lg"
            >
              <FaStar className="text-teal-500 mb-2" size={30} />
              <h6 className="text-lg font-medium">{review.name}</h6>
              <p className="mt-2">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <p className="uppercase tracking-wider text-gray-600">Our customers get results</p>

          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            {/* Stat Block 1 */}
            <motion.div
              className="flex flex-col items-center w-full sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            >
              <FaThumbsUp className="text-teal-500 mb-2" size={40} />
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">+90%</p>
              <p className="font-semibold mb-6">Customer Satisfaction</p>
            </motion.div>

            {/* Stat Block 2 */}
            <motion.div
              className="flex flex-col items-center w-full sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
            >
              <FaChartLine className="text-teal-500 mb-2" size={40} />
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">+75%</p>
              <p className="font-semibold mb-6">Product Efficiency</p>
            </motion.div>

            {/* Stat Block 3 */}
            <motion.div
              className="flex flex-col items-center w-full sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.6 }}
            >
              <FaRedo className="text-teal-500 mb-2" size={40} />
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">+80%</p>
              <p className="font-semibold mb-6">Repeat user</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
