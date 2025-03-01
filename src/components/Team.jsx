import React from 'react';

const teamMembers = [
  {
    name: "Anuradha Yadav",
    title: "CEO & Founder",
    email: "anuradha@example.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    name: "Anirudh Singh Yadav",
    title: "MD & COO",
    email: "anirudh@example.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    name: "Aditya Singh Yadav",
    title: "MD & COO",
    email: "aditya@example.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
  }
];

const OurTeam = () => {
  return (
    <motion.div 
    className="flex justify-center gap-6 mt-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <div className="flex items-center gap-3 text-gray-300">
      <FaRobot className="text-3xl text-teal-400" /> AI Integration
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <FaCloud className="text-3xl text-blue-400" /> Cloud Storage
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <FaShieldAlt className="text-3xl text-yellow-400" /> Secure Data
    </div>
  </motion.div>
  );
};

export default OurTeam;
