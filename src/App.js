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
  // to check if there is user in loacal storage 
  const [userOfLivre, setUserOfLivre] = useState(null)
  useEffect(() => {
    setUserOfLivre(
      localStorage.getItem("user-livre")
        ? JSON.parse(localStorage.getItem("user-livre"))
        : null
    );
  }, []);
  // console.log("66",userOfLivre);

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
        <Navbar userOfLivre={userOfLivre}/>
        <Routes>
          <Route path="/" element={<Home token={token} URL={URL}/>} />
          <Route path="/livre" element={<Home token={token} URL={URL}/>} />
          <Route path="/login" element={<Login token={token} />} />
          <Route path="/register" element={<Register token={token} URL={URL}/>} />
          <Route path="/travels" element={<Travels token={token} URL={URL}/>} />
          <Route path="/travels/:id" element={<Travels token={token} URL={URL}/>} />
          <Route path="/travel/:id" element={<TravelInside token={token} URL={URL} userOfLivre={userOfLivre} />} />
          <Route path="/profile" element={<Profile token={token} URL={URL} userOfLivre={userOfLivre}/>} />
          <Route path="/favourite" element={<Favourite token={token} URL={URL}/>} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
