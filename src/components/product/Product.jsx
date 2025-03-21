import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, image: "https://via.placeholder.com/150", title: "Casual T-Shirt", price: 50, discountPrice: 35, category: "Clothing", color: "Red", size: "M" },
  { id: 2, image: "https://via.placeholder.com/150", title: "Stylish Jacket", price: 120, discountPrice: 90, category: "Outerwear", color: "Blue", size: "L" },
  { id: 3, image: "https://via.placeholder.com/150", title: "Leather Shoes", price: 80, discountPrice: 60, category: "Footwear", color: "Black", size: "S" },
  { id: 4, image: "https://via.placeholder.com/150", title: "Jeans", price: 70, discountPrice: 55, category: "Clothing", color: "White", size: "XL" },
  { id: 5, image: "https://via.placeholder.com/150", title: "Backpack", price: 40, discountPrice: null, category: "Accessories", color: "Black", size: "M" },
];

const Product = () => {
  const [sortBy, setSortBy] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");

  // Sorting Logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    return 0;
  });

  // Filtering Logic
  const filteredProducts = sortedProducts.filter((product) => {
    return (
      (categoryFilter === "All" || product.category === categoryFilter) &&
      (colorFilter === "All" || product.color === colorFilter) &&
      (sizeFilter === "All" || product.size === sizeFilter)
    );
  });

  return (
    <div className=" md:mx-5  my-5">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        
        {/* Sorting Dropdown */}
        <select
          className="border p-2 rounded-lg cursor-pointer"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      {/* Filters & Product Display */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Filters</h3>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="font-semibold block">Category</label>
            <select
              className="border p-2 w-full rounded-lg cursor-pointer"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {["All", "Clothing", "Outerwear", "Footwear", "Accessories"].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Color Dropdown */}
          <div className="mb-4">
            <label className="font-semibold block">Color</label>
            <select
              className="border p-2 w-full rounded-lg cursor-pointer"
              value={colorFilter}
              onChange={(e) => setColorFilter(e.target.value)}
            >
              {["All", "Red", "Blue", "Black", "White"].map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>

          {/* Size Dropdown */}
          <div>
            <label className="font-semibold block">Size</label>
            <select
              className="border p-2 w-full rounded-lg cursor-pointer"
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
            >
              {["All", "S", "M", "L", "XL"].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p className="text-gray-500 text-center w-full col-span-4">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
