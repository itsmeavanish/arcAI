import React from 'react'
import Hero from '../components/Hero'
//import Aboutus from "../components/Aboutus.jsx"
//import Items from '../components/Items.jsx'
import About from "../components/About.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
import Flow from "../components/Flow.jsx"
import Neo from '../Neo/Neo.jsx'
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
  
    <div>
      <Hero />
      <Productdeatils/>
      <Flow />
      <About />
      {/* <Review/> */}
    </div>
  )
}

export default Home
