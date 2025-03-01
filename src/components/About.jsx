import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:px-20 lg:px-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          {/* Heading */}
          <h2 className="text-cyan-400 text-lg mb-2" data-aos="fade-down">
            About Us
          </h2>
          <h3
            className="mb-4 text-3xl font-bold text-white section-title"
            data-aos="fade-down"
          >
            Revolutionizing the Future with AI
          </h3>
          <p className="mb-8 max-w-3xl mx-auto text-gray-400" data-aos="fade-down">
            At the intersection of technology and intelligence, we craft AI-powered
            solutions that redefine possibilities. Our journey is fueled by innovation,
            data, and the drive to shape a smarter world.
          </p>
        </div>
        {/* About Cards Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-lg border border-gray-800 bg-[#0F0F0F] p-6 text-center shadow-lg shadow-cyan-500/20">
            <h4 className="mb-2 text-3xl font-bold text-cyan-400">10+</h4>
            <p className="text-gray-400">Years in AI Innovation</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-[#0F0F0F] p-6 text-center shadow-lg shadow-cyan-500/20">
            <h4 className="mb-2 text-3xl font-bold text-cyan-400">100+</h4>
            <p className="text-gray-400">AI Solutions Deployed</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-[#0F0F0F] p-6 text-center shadow-lg shadow-cyan-500/20">
            <h4 className="mb-2 text-3xl font-bold text-cyan-400">50K+</h4>
            <p className="text-gray-400">Users Empowered</p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-[#0F0F0F] p-6 text-center shadow-lg shadow-cyan-500/20">
            <h4 className="mb-2 text-3xl font-bold text-cyan-400">24/7</h4>
            <p className="text-gray-400">AI-Driven Support</p>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12" data-aos="fade-up">
          <a
            href="#team"
            className="cursor-pointer rounded-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-8 shadow-lg shadow-cyan-500/30"
          >
            Meet Our AI Experts
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border-2 py-3 px-8 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 ease-in-out"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
