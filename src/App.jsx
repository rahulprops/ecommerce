import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import HomeCarosel from "./components/HomeCarosel.jsx";

function App() {
  const [message, setMessage] = useState("hello");

  return (
    <BrowserRouter>
<Navbar />
<HomeCarosel/>
    </BrowserRouter>
      
    
  );
}

export default App;
