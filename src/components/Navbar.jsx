import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  RiMenu3Line, 
  RiCloseLine, 
  RiHomeHeartLine, 
  RiUserHeartLine, 
  RiContactsBookLine, 
  RiInformationLine, 
  RiLogoutBoxRLine 
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import img from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <RiHomeHeartLine className="mr-2" /> },
    { href: "/about", label: "About Us", icon: <RiInformationLine className="mr-2" /> },
    { href: "/product", label: "Product", icon: <RiUserHeartLine className="mr-2" /> },
    { href: "/contact", label: "Contact", icon: <RiContactsBookLine className="mr-2" /> },
    { href: "/Article", label: "Article", icon: <RiContactsBookLine className="mr-2" /> },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-black text-white shadow-xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={img} alt="Annanta Logo" className="h-14 rounded-full shadow-lg" />
          <p className="text-2xl font-extrabold tracking-wide text-teal-300">
            arcAI<span className="text-yellow-400">.engineer</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center text-gray-300 hover:text-teal-300 transition-all duration-300 hover:scale-110"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 rounded bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 transition-all duration-300 hover:scale-110 shadow-md"
          >
            <RiLogoutBoxRLine className="mr-2" /> Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none text-gray-300 hover:text-teal-300 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-gray-900 to-teal-700 px-6 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                {link.icon}
                {link.label}
              </span>
            </a>
          ))}
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="block w-full mt-4 py-3 bg-gradient-to-r from-red-600 to-red-800 rounded text-center text-white hover:from-red-700 hover:to-red-900 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <RiLogoutBoxRLine className="inline mr-2" /> Logout
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;