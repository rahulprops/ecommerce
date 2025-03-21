import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Product from "./components/product/product.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <HomePage /> */}
      <Product/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
