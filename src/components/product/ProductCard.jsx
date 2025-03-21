import React from 'react'
import image from '../../assets/kurta.jpg'
const ProductCard = () => {
  return (
   <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300">
         {/* Product Image */}
         <div className="relative">
           <img src={image} alt="Product" className="w-full h-64 object-cover rounded-lg" />
         </div>
   
         {/* Product Details */}
         <div className="mt-4">
           <h3 className="text-lg font-semibold text-gray-800">Men's Designer Kurta</h3>
           <p className="text-gray-600 text-sm mt-1">
             Stylish & Comfortable Ethnic Wear for Men.
           </p>
   
           {/* Price Section */}
           <div className="flex items-center justify-between mt-3">
             <span className="text-xl font-bold text-blue-600">$49.99</span>
             <span className="text-sm text-gray-500 line-through">$69.99</span>
           </div>
   
           {/* Add to Cart Button */}
           {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
             Add to Cart
           </button> */}
         </div>
       </div>
  )
}

export default ProductCard