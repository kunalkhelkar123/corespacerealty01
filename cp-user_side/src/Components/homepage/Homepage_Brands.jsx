import React, { useState, useEffect } from "react";
import Brand1 from "./logo.jpg";


const Homepage_Brands = () => {
  const [brands] = useState([Brand1, Brand1, Brand1, Brand1, Brand1, Brand1]); // Array of brand logos
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  // Function to move to the next brand
  const nextBrand = () => {
    setCurrentBrandIndex((prevIndex) =>
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous brand
  const prevBrand = () => {
    setCurrentBrandIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  // Automatically move to the next brand every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextBrand();
    }, 1000); // Change the interval time as needed (in milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentBrandIndex]); // Re-run the effect when currentBrandIndex changes

  return (
    
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-center font-sans text-4xl sm:text-5xl font-bold mb-8">
      Brands we work with
        </h1>
      <div className="flex items-center justify-center">
     
        <div className="flex items-center justify-center overflow-hidden">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className={`mx-2 transition-transform duration-500 transform ${
                index === currentBrandIndex
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
              style={{ minWidth: "100px", minHeight: "50px" }}
            />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Homepage_Brands;
