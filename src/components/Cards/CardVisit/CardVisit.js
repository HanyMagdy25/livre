import React from "react";
import "./CardVisit.css";
import { BsStar } from "react-icons/bs";
const CardVisit = ({ item }) => {
  return (
    <div className="cardVisit">
      <img src={item.image} alt={item.city} loading="lazy" />
      <div className="cardVisit-content">
        <div className="flex">
          <span className="cardVisit-content-title">{item.title}</span>
          <div className="flex rate">
            <span className="flex-center">
              <BsStar />
            </span>
            <span className="flex">{item.rate}</span>
          </div>
        </div>
        <h6 className="cardVisit-content-city">{item.city}</h6>
      </div>
    </div>
  );
};

export default CardVisit;
