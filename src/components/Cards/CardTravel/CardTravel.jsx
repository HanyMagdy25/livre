import React from "react";
import { Link } from "react-router-dom";
// CSS File
import "./CardTravel.css";
// Images
import ticketImage from "../../../assets/ticket.png";
// Icons
import { BsBookmark, BsClock } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
const CardTravel = ({ item,widthThree }) => {
  return (
    <Link to={`/travel/${item.id}`} className={widthThree ? "card-travel widthThree":"card-travel" }>
      <div>
        <div className="card-travel-container">
          <img src={item.image} alt={item.title} />
          <div className="card-travel-title">
            <span>{item.title}</span>
            <span className="flex-center">
              <BsBookmark />
            </span>
          </div>
          <div className="card-travel-content">
            <div className="card-travel-content-price">
              <div className="flex card-travel-content-price-right">
                <img src={ticketImage} alt="ticket" />
                <span>{item.price} ريال</span>
              </div>
              <span className="card-travel-content-price-left">
                {item.date}
              </span>
            </div>
            <div className="flex card-travel-content-city">
              {" "}
              <span className="flex-center">
                <IoLocationOutline />
              </span>{" "}
              {item.city}{" "}
            </div>
            <hr />
            <div className="flex">
              <div className="flex card-travel-content-days">
                <span className="flex-center">
                  <BsClock />
                </span>{" "}
                {item.restDays}
              </div>
              <div
                className={
                  item.gender === "عائلات"
                    ? "flex card-travel-content-gender family"
                    : "flex card-travel-content-gender"
                }
              >
                <span className="flex-center">
                  <FiUsers />
                </span>{" "}
                {item.gender}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardTravel;
