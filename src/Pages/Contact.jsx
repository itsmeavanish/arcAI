import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineSend
} from 'react-icons/ai';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { name, email, subject, message } = formData;

  // Using react-intersection-observer for scroll animations
  const [refTitle, inViewTitle] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [refForm, inViewForm] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [refInfo, inViewInfo] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: <AiOutlineEnvironment className="text-2xl" />,
      title: "Our Address",
      details: "Kanpur, Uttar Pradesh",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <AiOutlineMail className="text-2xl" />,
      title: "Our Email",
      details: "arcaiengineer@gmail.com",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <AiOutlinePhone className="text-2xl" />,
      title: "Contact",
      details: "+91 9151636108",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "bg-blue-600" },
    { icon: <FaTwitter />, url: "https://twitter.com", color: "bg-sky-500" },
    { icon: <FaGithub />, url: "https://github.com", color: "bg-gray-800" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!name || !email || !message) {
      toast.warn('Please fill in all required fields.', {
        position: "top-center",
        autoClose: 3000
      });
      return false;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', {
        position: "top-center",
        autoClose: 3000
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      // Simulate API call with timeout
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
        toast.success('Thank you! Your message has been sent successfully.', {
          position: "top-center",
          autoClose: 5000
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        toast.error('Failed to send message. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - arcAI.engineer</title>
        <meta name="description" content="Get in touch with arcAI.engineer for inquiries or assistance with AI solutions." />
        <meta property="og:title" content="Contact Us - arcAI.engineer" />
        <meta property="og:description" content="Contact arcAI.engineer for innovative AI solutions and services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen py-16 pt-26 relative" style={{position:"relative", zIndex:"10"}}>
        {/* <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16"> */}


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            ref={refTitle}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewTitle ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-4 mt-10">Get In Touch</h2>
        <div className='text-white text-center mt-4'>To get started
          <a className='text-white text-center'
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNb-uLNN4wEYkNAs26lnkmdDGWvdSXjyx-hlHglzopLgCFHw/viewform"> (Fill this google form) (click me)</a>
        </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Have a question or want to learn more about our AI solutions? Reach out and we'll respond as soon as possible.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 ">
            {/* Contact Info */}
            <motion.div
              ref={refInfo}
              initial={{ opacity: 0, x: -50 }}
              animate={inViewInfo ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl glass-effect">
                <h2 className="text-2xl font-bold mb-6 text-gray-200">Contact Information</h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className={`bg-gradient-to-r ${item.color} p-6 rounded-xl shadow-lg text-white`}
                    >
                      
                      <div className="flex items-center mb-2 ">
                       <div className="bg-white/20 p-3 rounded-lg mr-4 ">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-medium">{item.title}</h3>
                      </div>
                      <p className="ml-16 text-white/90">{item.details}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} p-3 rounded-full text-white text-xl`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={refForm}
              initial={{ opacity: 0, x: 50 }}
              animate={inViewForm ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl glass-effect">
                <h2 className="text-2xl font-bold mb-6 text-gray-300">Send a Message</h2>

                <AnimatePresence>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <AiOutlineSend className="text-4xl text-green-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <AiOutlineUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={name}
                            onChange={handleInputChange}
                            className="w-full p-4 pl-12 rounded-xl] border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all  bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                        <div className="relative">
                          <AiOutlineMail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email *"
                            value={email}
                            onChange={handleInputChange}
                            className="w-full p-4 pl-12 rounded-2xl  border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all  bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={subject}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-2xl border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all  bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div className="relative">
                        <AiOutlineMessage className="absolute top-6 left-4 text-gray-400" />
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Your Message *"
                          value={message}
                          onChange={handleInputChange}
                          className="w-full p-4 pl-12 rounded-2xl  border-gray-300  focus:ring-2 focus:ring-blue-500 transition-all  bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full  py-4 rounded-xl text-lg  shadow-lg  bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:opacity-90 transition-all ${loading && 'opacity-70 cursor-not-allowed'}`}
                      >
                        {loading ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <AiOutlineSend className="mr-2" /> Send Message
                          </div>
                        )}
                      </motion.button>
                      <p className="text-gray-500 text-sm text-center mt-2">
                        Fields marked with * are required
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Map or Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-md glass-effect">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Office Hours</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Weekdays</h3>
                  <p className="text-gray-400">9:00 AM - 6:00 PM (IST)</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Weekends</h3>
                  <p className="text-gray-400">By appointment only</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Contact;