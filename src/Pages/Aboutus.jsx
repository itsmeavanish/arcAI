import React from 'react';
//import Barcode from 'react-barcode';
//import Productdeatils from '../components/Productdetails.jsx'
import About from '../components/About.jsx';
import Flow from "../components/Flow.jsx"
import Neo from '../Neo/Neo.jsx';
const BarcodeExample = () => {
  return (
    
    <div style={{position:"relative", zIndex:"10"}}> 
     <About />
     <Flow />
     {/* <About /> */}
    </div>
  );
};

export default BarcodeExample;

