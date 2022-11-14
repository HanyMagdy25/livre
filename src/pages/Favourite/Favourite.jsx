import React from "react";
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import { travelsData } from "../../utils/data";
import "./Favourite.css";
const Favourite = () => {
  return (
    <div className="favourite-section">
      <div className="favourite-container container">
        <h2>الفعاليات المحفوظه</h2>
        <div className="favourite-cards">
          {travelsData.slice(0,3).map((item, index) => (
            <CardTravel item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
