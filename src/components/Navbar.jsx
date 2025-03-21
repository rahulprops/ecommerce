import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          ShopEasy
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <NavLink to="/men" className="hover:text-blue-600">Men</NavLink>
          <NavLink to="/women" className="hover:text-blue-600">Women</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="relative text-gray-700 hover:text-blue-600">
            <FiShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </NavLink>

          <NavLink to="/login" className="text-gray-700 hover:text-blue-600">
            <FiUser size={24} />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4">
          <NavLink to="/men" className="py-2" onClick={() => setMenuOpen(false)}>Men</NavLink>
          <NavLink to="/women" className="py-2" onClick={() => setMenuOpen(false)}>Women</NavLink>
          <NavLink to="/contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/login" className="py-2" onClick={() => setMenuOpen(false)}>Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
