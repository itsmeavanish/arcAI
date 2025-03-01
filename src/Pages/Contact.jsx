import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'; // Importing icons

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!name || !email || !message) {
      toast.warn('Please fill in all fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form data
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Learn more about Annanta Pharmaceuticals and our mission to improve healthcare worldwide." />
        <meta property="og:title" content="Contact Us - Annanta Pharmaceuticals" />
        <meta property="og:description" content="Get in touch with Annanta Pharmaceuticals for inquiries or assistance." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto py-10 relative">
        <section className="p-8 rounded-lg" id="contact">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20 bg-white rounded-3xl shadow-lg"
          >
            <div className="mb-12 text-center">
              <motion.h2
                className="text-4xl font-bold text-gray-900"
                whileHover={{ rotateY: 10, scale: 1.1 }}
              >
                <AiOutlineMail className="inline-block text-teal-500 mr-2" /> Contact Us
              </motion.h2>
              <p className="text-gray-600 mt-4">We'd love to hear from you!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-lg shadow-lg text-white"
                >
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <AiOutlineEnvironment className="mr-2" /> Our Address
                  </h3>
                  <p>Annanta Pharmaceuticals, Sarsaul, 209402 Kanpur, Uttar Pradesh</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-lg shadow-lg text-white"
                >
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <AiOutlineMail className="mr-2" /> Our Email
                  </h3>
                  <p>annantapharmaceuticals@gmail.com</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -10 }}
                  className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-lg shadow-lg text-white"
                >
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <AiOutlinePhone className="mr-2" /> Contact
                  </h3>
                  <p>+91 9839175313, +91 8874990774</p>
                </motion.div>
              </div>

              <motion.form
                whileHover={{ rotateY: 0, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg"
                onSubmit={handleSubmit}
              >
                <div className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={message}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, rotateX: 10 }}
                    className="w-full bg-teal-500 text-white py-3 rounded-lg shadow-lg hover:bg-teal-600"
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contacts;
