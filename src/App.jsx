import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [message, setMessage] = useState("hello");

  return (
    <BrowserRouter>
<Navbar />
    </BrowserRouter>
      
    
  );
}

export default App;
