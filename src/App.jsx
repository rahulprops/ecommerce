import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
