import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { travelsData } from "../../utils/data";
// CSS File
import "./TravelInside.css";
// Icons
import { BsStar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
// Components
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const TravelInside = () => {
  // UseState
  const [toggle, setToggle] = useState(1);
  const param = useParams();
  const oneTravel = travelsData.find((a) => a.id === param.id);
  return (
    <div className="travel-inside">
      <div className="travel-inside-container container">
        {/* ============ Right Side ========== */}
        <div className="travel-inside-right">
          <img src={oneTravel.image} alt={oneTravel.title} loading="lazy" />
          <div className="flex travel-inside-right-title">
            <h2>{oneTravel.title}</h2>
            <div className="flex rate">
              <span className="flex-center">
                <BsStar />
              </span>
              <span className="flex-center">{oneTravel.rate}</span>
            </div>
          </div>

          <div className="flex card-travel-content-city">
            {" "}
            <span className="flex-center">
              <IoLocationOutline />
            </span>{" "}
            {oneTravel.city}{" "}
          </div>

          <p>{oneTravel.description}</p>
        </div>
        {/* ======== Left Side ========== */}
        <div className="travel-inside-left">
          {toggle === 1 && (
            <FirstStep
              oneTravel={oneTravel}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
          {toggle === 2 && (
            <SecondStep
              oneTravel={oneTravel}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}

          {toggle === 3 && (
            <ThirdStep
              oneTravel={oneTravel}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelInside;
