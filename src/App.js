import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// Import Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import Travels from "./pages/Travels/Travels";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livre" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/travels" element={<Travels />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
