// write product card here





import React from "react";
import Button from "./button"; 

const Productcard = () => {
 
  const productImage = "https://via.placeholder.com/200"; 
  const productName = "Wireless Headphones";
  const price = "$99.99";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <img className="w-full h-48 object-cover" src={productImage} alt={productName} />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{productName}</h2>
        <p className="text-gray-600 text-md font-medium">{price}</p>
        <Button text="View Product" />
      </div>
    </div>
  );
};

export default Productcard;