import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className=" text-gray-900 relative py-20 px-6 md:px-16 lg:px-24  text-white">
      <div className="container mx-auto text-center pt-20 pb-10">
        {/* Heading */}
        <motion.h2
          className="text-white text-lg uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>
        <motion.h3
          className="mt-2 text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent pt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Industries with AI Innovation
        </motion.h3>
        <motion.p
          className="mt-4 max-w-3xl mx-auto text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Leveraging artificial intelligence to build next-gen solutions that empower businesses, enhance decision-making, and drive a smarter future.
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "1+", label: "Years of AI Excellence" },
          { value: "50+", label: "AI-Powered Solutions" },
          { value: "100+", label: "Global Users Impacted" },
          { value: "99.9%", label: "AI Uptime & Reliability" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-gray-700 bg-[#121826] p-6 text-center shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300 pt-7 pb-7"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h4 className="text-4xl font-bold text-cyan-400">{item.value}</h4>
            <p className="mt-2 text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 pt-10 pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="#"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-8 shadow-lg transition-transform hover:scale-105"
        >
          Meet Our AI Experts
        </a>
        <a
          href="#contact"
          className="rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-3 px-8 transition-transform hover:scale-105"
        >
          Connect With Us
        </a>
      </motion.div>
    </section>
  );
};

export default About;
