import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-[30vh] sm:min-h-[100vh] flex items-start pt-8 sm:pt-0 sm:items-center z-10">
      
    <div
      className="absolute inset-0 bg-cover bg-center"
    />
   
    <div className="absolute inset-0 bg-black opacity-50" />

    {/* Significantly reduced vertical padding for mobile */}
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-0 sm:py-4 md:py-16 lg:py-24 relative z-10 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mb-3 lg:mb-0"
        >
          <h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-8xl font-bold mb-1 md:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              arcAI
            </span>
            <div className="text-3xl sm:text-3xl md:text-5xl text-white mt-0.5 sm:mt-2">
              Building AI Agents
            </div>
          </h1>

          <p className="text-lg md:text-2xl sm:text-xl mb-4 md:mb-6 text-gray-300 max-w-xl">
            Harnessing power of AI Agents to revolutionize customer care support.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-6 py-3 sm:px-5 sm:py-2 "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur-[3px] sm:blur-md group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative flex items-center justify-center gap-2">
                <span className="text-white text-lg sm:text-base font-medium">
                  <a href="/product" className="block w-full h-full md:text-2xl">Get Started</a>
                </span>
                <svg
                  className="w-5 h-5 sm:w-5 sm:h-5 text-white transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 sm:px-5 sm:py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all text-lg sm:text-base"
            >
              <a href="/about" className="block w-full h-full md:text-2xl">Documentation</a>
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Card - with reduced padding and spacing */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 lg:pl-6"
        >
          <div className=" backdrop-blur-lg rounded-xl p-4 sm:p-5 md:p-6 shadow-2xl border border-white/10 " style={{background:"linear-gradient(to right,#1a1a2e70,#23235b6e)", backdropFilter:"blur(10px)", opacity:"0.75", filter:"brightness(`1.9)"}}>
            <h2 className="text-xl sm:text-lg md:text-3xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Why choose us?
            </h2>

            <ul className="space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-5 ">
              <motion.li whileHover={{ x: 5 }} className="flex items-center">
                <div className="bg-white/10 p-2 sm:p-1.5 md:p-2 rounded-lg mr-3 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-base sm:text-base md:text-2xl">
                Tailored AI Agents for Your Business
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center">
                <div className="bg-white/10 p-2 sm:p-1.5 md:p-2 rounded-lg mr-3 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-base sm:text-base md:text-2xl">
                24/7 Scalable Support
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center">
                <div className="bg-white/10 p-2 sm:p-1.5 md:p-2 rounded-lg mr-3 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <span className="text-base sm:text-base md:text-2xl">
                Fast Setup, Seamless Integration
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Hero;