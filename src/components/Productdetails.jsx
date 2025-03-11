import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Autonomous Finance Agents",
    description: "AI-driven financial decision-making to optimize investments, budgeting, and risk management.",
    imgSrc: 'https://media.istockphoto.com/id/1168748420/vector/vector-of-a-businessman-and-a-robot-shaking-hands-standing-on-computer.jpg?s=612x612&w=0&k=20&c=exxMDECTTjZ-quaC8-VnyemS5KrYFafMebtI2ZJQo-c=',
  },
  {
    title: "AI-Powered Document & Web Interaction",
    description: "Interact with PDFs and websites using advanced AI chat and voice capabilities.",
    imgSrc: 'https://media.istockphoto.com/id/1951850135/vector/ai-powered-virtual-tutors-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=hTTgnD_n3llU2FGmvonjUERLBknH8Zw_G403zppndRQ=',
  },
  {
    title: "AI Customer Support",
    description: "Seamless chat, voice, and call-based customer support with human-like AI voices.",
    imgSrc: 'https://media.istockphoto.com/id/1222045163/vector/chatbot-ai-and-customer-service-concept-young-man-talking-with-chatbot-in-a-big-smartphone.jpg?s=612x612&w=0&k=20&c=yCMVqp_tYc2G5q-11AY7AmChgw_C-Zb4NhINr26BixU=',
  },
  {
    title: "Natural Language Database Interaction",
    description: "Query and manage databases effortlessly using simple natural language commands.",
    imgSrc: 'https://media.istockphoto.com/id/1248235311/vector/web-hosting-concept-with-people-characters-online-database-server-web-data-center-cloud.jpg?s=612x612&w=0&k=20&c=yAC4Kkap1nYkercoAeNG5ZnfP2FVkBi1ScZw-kyBqMY=',
  },
];

const ProductDetails = () => {
  return (
    <section className=" text-gray-900 py-16 px-6 pt-16" style={{position:"relative", zIndex:"10", background:"linear-gradient(to right ,#0606065c,#05051c6c)"}}>
      <div className="max-w-6xl mx-auto text-center mb-12 pt-16">
        <motion.h2 
          className="text-5xl font-extrabold text-gray-800 tracking-wide leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-200">Discover the Power of AI with</span> <br />
          <span className="text-purple-600 text-7xl">arcAI!</span>
        </motion.h2>
      </div>
      
      
      <div className="max-w-6xl mx-auto lg:hidden">
        {/* <p className="text-white text-center mb-4">Mobile View</p> */}
        <div className="flex flex-col items-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image on top */}
              <div className="h-44 overflow-hidden">
                <img 
                  src={feature.imgSrc} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Desktop View - Side by Side */}
      <div className="max-w-6xl mx-auto hidden lg:block">
        {/* <p className="text-white text-center mb-4">Desktop View</p> */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-row items-center gap-8 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Image Section */}
              <motion.img
                src={feature.imgSrc}
                alt={feature.title}
                className="rounded-lg shadow-lg w-72 lg:w-96"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 2 }}
              />

              {/* Text Section */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-cyan-500 text-2xl mt-1" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-lg font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.4 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;