import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// Adding Vercel Analytics
import { Analytics } from "@vercel/analytics/react"
// import { Analytics } from "@vercel/analytics/react"
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Whatsapp from './components/Whatsapp';
import Productdetail from './components/Productdetails';
import Neo from './Neo/Neo';
//import CosmosBackground from './components/CosmosBackground';
// import ParticleBackground from './components/Particle';

//import Article from './Pages/Article';

const App = () => {
  return (
    
    <HelmetProvider>
      {/* <ParticleBackground /> */}

      <div className='bg-gray-950'>
        <Router>
          <Navbar />

          <>
          <span style={{position:"absolute", height:"100vh", width:"99vw"}}>
              <Neo color="#5050C5" />
          </span>
          <Routes>
            <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Productdetail />} />
            </Route>
          </Routes>
          </>

          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
