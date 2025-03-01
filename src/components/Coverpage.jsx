import React from 'react';
import { motion } from 'framer-motion';
import img from "../assets/logo.png";
import video from "../assets/9574128-sd_960_506_25fps.mp4";

const Coverpage = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <video 
          src={video}
          autoPlay 
          loop 
          muted 
          className="object-cover object-center w-full h-full"
        ></video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-12">
        <div className="flex items-center space-x-4 mb-8">
          <img src={img} alt="Annanta Logo" className="h-16 md:h-24" />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Annanta <span className="text-teal-300">Pharmaceuticals</span>
          </h1>
        </div>
        
        <motion.p
          className="text-lg text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovating healthcare solutions with excellence and integrity.
        </motion.p>
        
        <motion.a
          href="/about"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-8 md:px-12 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default Coverpage;
