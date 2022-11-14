import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// CSS File
import "./App.css";
// Import Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Travels from "./pages/Travels/Travels";
import TravelInside from "./pages/TravelInside/TravelInside";
import Profile from "./pages/Profile/Profile";
import Favourite from "./pages/Favourite/Favourite";

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
          <Route path="/travel/:id" element={<TravelInside />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
