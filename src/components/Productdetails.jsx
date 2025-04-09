import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCheckCircle, FaDatabase, FaGlobe, FaLayerGroup, FaMicrochip } from "react-icons/fa";

const features = [
  {
    title: "Human-Like AI Voice Agents",
    description: "Our AI agents speak naturally with human-like voices, making customer interactions feel friendly, fluid, and personal-just like talking to a real support rep.",
    imgSrc: 'https://img.freepik.com/free-vector/voice-chat-concept-illustration_114360-7629.jpg?t=st=1744201536~exp=1744205136~hmac=e7cc7fb67e78eaf472b0df3fcf66174b497e94968b1a16338c212f242fd2a566&w=1380',
  },
  {
    title: "Smart Understanding & Instant Answers",
    description: "Powered by cutting-edge language models, these agents understand customer queries, even complex or vague ones, and respond instantly with accurate, helpful answers.",
    imgSrc: 'https://media.istockphoto.com/id/1951850135/vector/ai-powered-virtual-tutors-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=hTTgnD_n3llU2FGmvonjUERLBknH8Zw_G403zppndRQ=',
  },
  {
    title: "Fully Customizable for Your Industry",
    description: "Whether you're in e-commerce, healthcare, finance, or beyond-our AI agents are tailored to match your workflows, vocabulary, and brand tone right out of the box.",
    imgSrc: 'https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?t=st=1744201640~exp=1744205240~hmac=f4b980cbb7acf1e40ab180f0a69d98458c6053af41fa0bd203d5dbfce5b78b0f&w=826',
  },
  {
    title: "End-to-End Task Handling",
    description: "From checking order status to updating account details or booking appointments-our AI handles it all, integrated directly with your systems and tools.",
    imgSrc: 'https://media.istockphoto.com/id/1248235311/vector/web-hosting-concept-with-people-characters-online-database-server-web-data-center-cloud.jpg?s=612x612&w=0&k=20&c=yAC4Kkap1nYkercoAeNG5ZnfP2FVkBi1ScZw-kyBqMY=',
  },
  {
    title: "24/7 Support with Built-In Learning",
    description: "Always available, never tired. These agents learn and improve over time using real customer interactions-reducing support costs while boosting satisfaction.",
    imgSrc: 'https://img.freepik.com/free-vector/call-center-abstract-concept_335657-3001.jpg?t=st=1744201730~exp=1744205330~hmac=dbf0eec986fd2d6530f4e70051216579f88f82e70923fe01e6d8542b5d1e6674&w=826',
  },
];

const product=[
  {
    icon: <FaMicrochip />,
    title: "Autonomous Finance Agents",
    description: "AI-driven financial decision-making to optimize investments, budgeting, and risk management.",
    gradient: "from-cyan-400 to-blue-500",
    imgSrc: 'https://media.istockphoto.com/id/1168748420/vector/vector-of-a-businessman-and-a-robot-shaking-hands-standing-on-computer.jpg?s=612x612&w=0&k=20&c=exxMDECTTjZ-quaC8-VnyemS5KrYFafMebtI2ZJQo-c=',
  },
  {
    icon: <FaDatabase />,
    title: "Data Intelligence Suite",
    description: "Advanced analytics and insights platform powered by cutting-edge machine learning algorithms.",
    gradient: "from-purple-400 to-pink-500",
    imgSrc: 'https://media.istockphoto.com/id/1951850135/vector/ai-powered-virtual-tutors-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=hTTgnD_n3llU2FGmvonjUERLBknH8Zw_G403zppndRQ=',
  },
  {
    icon: <FaBrain />,
    title: "Neural Network Solutions",
    description: "Custom neural networks designed for complex problem-solving and pattern recognition.",
    imgSrc: 'https://media.istockphoto.com/id/1222045163/vector/chatbot-ai-and-customer-service-concept-young-man-talking-with-chatbot-in-a-big-smartphone.jpg?s=612x612&w=0&k=20&c=yCMVqp_tYc2G5q-11AY7AmChgw_C-Zb4NhINr26BixU=',
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: <FaChartLine />,
    title: "Predictive Analytics Engine",
    description: "Future-focused analytics tool for accurate forecasting and trend prediction.",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: <FaGlobe />,
    title: "Global AI Infrastructure",
    description: "Scalable AI infrastructure solutions for enterprise-level deployment and management.",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    icon: <FaLayerGroup />,
    title: "Deep Learning Platform",
    description: "Comprehensive platform for training and deploying sophisticated deep learning models.",
    gradient: "from-pink-400 to-rose-500",
    imgSrc: 'https://media.istockphoto.com/id/1248235311/vector/web-hosting-concept-with-people-characters-online-database-server-web-data-center-cloud.jpg?s=612x612&w=0&k=20&c=yAC4Kkap1nYkercoAeNG5ZnfP2FVkBi1ScZw-kyBqMY=',
  }
];

const ProductDetails = () => {
  return (
    <section className=" text-gray-100 py-16 px-6 pt-16" style={{position:"relative", zIndex:"10", background:"linear-gradient(to right ,#0606065c,#05051c6c)"}}>
      <div className="max-w-6xl mx-auto text-center mb-12 pt-16">
        <motion.h2 
          className="text-5xl font-extrabold text-gray-700 tracking-wide leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-200">Power of Customer Support with</span> <br />
          <span className="text-purple-600 text-7xl">arcAI!</span>
        </motion.h2>
      </div>
      
      
      <div className="max-w-6xl mx-auto lg:hidden">
        {/* <p className="text-white text-center mb-4">Mobile View</p> */}
        <div className="flex flex-col items-center gap-8">
          {product.map((feature, index) => (
            <motion.div
              key={index}
              className={` rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm bg-gradient-to-r ${feature.gradient}`}
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
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Desktop View - Side by Side */}
      <div className="max-w-6xl mx-auto hidden lg:block">
        {/* <p className="text-white text-center mb-4">Desktop View</p> */}
        <div className="space-y-12">
          {product.map((feature, index) => (
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
                className={`p-6 rounded-lg shadow-md flex items-start space-x-4 w-full lg:w-1/2 glass-effect card-hover  relative overflow-hidden`}
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
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${feature.gradient}`} />
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
                    className="text-gray-500"
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