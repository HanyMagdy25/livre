import React from "react";
// Import Components
import Hero from "../../components/Hero/Hero";
import MostVisits from "../../components/MostVisits/MostVisits";
import About from "../../components/About/About";
import Partner from "../../components/Partner/Partner";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <MostVisits />
      <About />
      <Partner />
      <Contact/>
    </>
  );
};

export default Home;
