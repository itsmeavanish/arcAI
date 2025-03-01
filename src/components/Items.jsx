import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaEye } from 'react-icons/fa'; // Icons for shopping cart and view product button
import image1 from "../assets/products/dibatic pic.jpg";
import image2 from "../assets/products/femetop.jpg";
import img3 from "../assets/products/gasrelex (2).jpg";
import img4 from "../assets/products/Ocimum.jpg";
import img5 from "../assets/products/fevertop.png";
import img6 from "../assets/products/memory pic.jpg";
import img7 from "../assets/products/heart pic.jpg";
import img8 from "../assets/products/Livecure-DS.png";
import img9 from "../assets/products/mc relex .1.png";
import img10 from "../assets/products/Baby Tonic.jpg";

const products = [
  { id: 1, name: "Annanta Diabetic", price: 120, originalPrice: 120, image: image1 },
  { id: 2, name: "Annanta Baby Tonic", price: 70, originalPrice: 70, image: img10 },
  { id: 3, name: "Annanta Femetop", price: 145, originalPrice: 145, image: image2 },
  { id: 4, name: "Annanta Heartbooster", price: 150, originalPrice: 150, image: img7 },
  { id: 5, name: "Annanta Fevertop", price: 110, originalPrice: 110, image: img5 },
  { id: 6, name: "Annanta Memory Vitalizer", price: 140, originalPrice: 140, image: img6 },
  { id: 7, name: "Annanta Gasrelax", price: 120, originalPrice: 120, image: img3 },
  { id: 8, name: "Annanta Ocimum", price: 80, originalPrice: 80, image: img4 },
  { id: 9, name: "Annanta MC Relex", price: 160, originalPrice: 160, image: img9 },
  { id: 10, name: "Annanta Livcure Ds", price: 130, originalPrice: 130, image: img8 },
];

const ProductCard = ({ id, name, price, originalPrice, image, addToCart }) => {
  const discountedPrice = originalPrice - (originalPrice * 0.10); // Apply 10% discount

  return (
    <div className="w-72 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-80 w-72 object-contain rounded-t-xl cursor-pointer"
        />
        <Link
          to={`/product/${id}`}
          className="absolute inset-0 z-10"
          style={{ textDecoration: 'none' }} // Ensure no underline
        ></Link>
      </div>
      <div className="px-4 py-3">
        <span className="text-gray-400 mr-3 uppercase text-xs">Annanta</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {name}
        </p>
        <div className="flex items-center mt-2">
          <p className="text-lg font-semibold text-black">₹{discountedPrice.toFixed(2)}</p>
          <del>
            <p className="text-sm text-gray-600 ml-2">₹{originalPrice}</p>
          </del>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/product/${id}`}
            className="flex items-center bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400"
          >
            <FaEye className="mr-2" /> View Product
          </Link>
          <FaShoppingCart 
            className="text-black cursor-pointer" 
            onClick={() => addToCart(id, discountedPrice)} 
          />
        </div>
      </div>
    </div>
  );
};

const Items = () => {
  useEffect(() => {
    // Reset cursor style and scroll position when component mounts
    document.body.style.cursor = "auto";
    window.scrollTo(0, 0);

    return () => {
      // Ensure cursor style resets on unmount
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-teal-600 text-4xl mb-4">Our Products</h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Items;
