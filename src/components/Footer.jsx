import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">ShopEasy</h2>
          <p className="text-sm">
            Your one-stop destination for all your shopping needs. Quality products at the best prices.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-sm">📍 123 Main Street, City, Country</p>
          <p className="text-sm">📞 +123 456 7890</p>
          <p className="text-sm">📧 support@shopeasy.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
            <li><a href="/categories" className="hover:text-blue-400">Categories</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Payment & Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
          </div>

          <h2 className="text-lg font-semibold text-white mb-4">Payment Methods</h2>
          <div className="flex space-x-4">
            <FaCcVisa className="text-3xl" />
            <FaCcMastercard className="text-3xl" />
            <FaCcPaypal className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2025 ShopEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
