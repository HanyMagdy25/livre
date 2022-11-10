import React from "react";
import "./Hero.css";
// Import Image
import livreHome from "../../assets/home-bg.png";
import playStore from "../../assets/playstore-livre.png";
// Import Icons
import { SiAppstore } from "react-icons/si";
import { RiGooglePlayLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="flex-center hero-section">
      <div className="container hero-container">
        <img src={livreHome} alt="Livre-Home" loading="lazy" />
        <div className="hero-content">
          <div className="hero-content-right">
            <h1>أكتشف أماكن جديدة لزيارتها مع ليفا</h1>
            <div className="download-content">
              <p>قم بتحميل ليفا على أي من المنصات التالية</p>
              <div className="flex">
                <span className="playstore-iphone">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-center"
                  >
                    <SiAppstore />
                  </a>{" "}
                </span>
                <span className="playstore-android">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-center"
                  >
                    <RiGooglePlayLine />
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="hero-content-left">
            <img src={playStore} alt="playStore" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
