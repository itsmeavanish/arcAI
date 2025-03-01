import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import logo from "/src/assets/logo2.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12 px-6 md:px-16 lg:px-32 overflow-hidden border-t border-gray-700">
      {/* Decorative Glowing Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 blur-lg opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 blur-lg opacity-50"></div>
      </div>

      {/* Footer Content */}
      <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src={logo} 
            alt="arcAI Logo" 
            className="h-16 w-16 mb-3 rounded-full transition-transform duration-300 hover:scale-110 hover:rotate-6" 
          />
          <p className="text-sm max-w-sm text-gray-400">
            Providing affordable AI solutions for all your business needs
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          <a href="/about" className="hover:text-purple-400 transition">About Us</a>
          <a href="/services" className="hover:text-purple-400 transition">Services</a>
          <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
          <a href="/blog" className="hover:text-purple-400 transition">Blog</a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start text-sm space-y-2">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-purple-400" />
            <a href="mailto:arcaiengineer@gmail.com" className="hover:text-purple-400 transition">
              arcaiengineer@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-purple-400" />
            <a href="tel:+1234567890" className="hover:text-purple-400 transition">
              +919151636108
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-purple-400 transition"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition"><FaXTwitter size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition"><FaLinkedinIn size={20} /></a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4 text-gray-500">
        &copy; {new Date().getFullYear()} arcAI Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
