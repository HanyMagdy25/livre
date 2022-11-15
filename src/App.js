import { useEffect, useState } from "react";
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
import Tickets from "./pages/Tickets/Tickets";
// URL
const URL ="https://livre.softwarecloud2.com";

function App() {

  const [token, setToken] = useState(
    "opHqBzHqDukBFxdpY4g63K3S54dWD17ySlzBlAPqh1gj2DB0Vg3km7F09R17wK7Y"
  );

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
          <Route path="/" element={<Home token={token} URL={URL}/>} />
          <Route path="/livre" element={<Home token={token} URL={URL}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/travels" element={<Travels token={token} URL={URL}/>} />
          <Route path="/travel/:id" element={<TravelInside token={token} URL={URL} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
