
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RiMenu3Line,
  RiCloseLine,
  RiHomeHeartLine,
  RiUserHeartLine,
  RiContactsBookLine,
  RiInformationLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import img from "/src/assets/logo2.png";
import { FaTools } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <RiHomeHeartLine className="mr-2" /> },
    { href: "/product", label: "Product", icon: <RiUserHeartLine className="mr-2" /> },
    { href: "/contact", label: "Contact", icon: <RiContactsBookLine className="mr-2" /> },
    { href: "/about", label: "About Us", icon: <RiInformationLine className="mr-2" /> },
  ];

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[70em] bg-black/20 border border-white/20 shadow-lg z-50 px-6 py-2 rounded-full flex items-center justify-between space-x-6 pl-2 pr-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={img} alt="arcAI Logo" className="h-16 w-16 rounded-full" /> 
        {/* <span className="pl-2 text-3xl bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold">arcAI</span> */}
        <span className="pl-2 text-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">arcAI.engineer</span>
        </div>


      {/* Navbar Links for Desktop */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center text-white hover:text-cyan-300 transition-all duration-300"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
        {/* Logout Button */}
       
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <motion.div
          className="flex items-center justify-center"
         
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseLine className="text-white" size={35} />
          ) : (
            <RiMenu3Line className="text-white" size={35} />
          )}
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-white shadow-lg p-6 rounded-lg flex flex-col items-center space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center text-gray-700 hover:text-teal-500 transition-all duration-300"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLogout();
              setIsOpen(false);
            }}
            className="flex items-center bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-800"
          >
            <RiLogoutBoxRLine className="mr-2" /> <a href="#">Try arcAI</a>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;