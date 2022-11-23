import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// CSS File
import "./CardTravel.css";
// Images
import ticketImage from "../../../assets/ticket.png";
// Icons
import { BsBookmark, BsClock } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
// URL
const URL = "https://livre.softwarecloud2.com";

const CardTravel = ({ item, token, userOfLivre, widthThree }) => {
  const [client_id, setClient_id] = useState(null);
  const [event_id, setEvent_id] = useState(null);
  console.log(item);
  // To Search => API
  useEffect(() => {
    setClient_id(userOfLivre?.id);
    setEvent_id(item?.id);
  }, [item?.id, userOfLivre?.id]);
  const handleFavourite = (e) => {
    e.preventDefault();
    const raw = { client_id, event_id };
    fetch(`${URL}/api/v1/favorite/favorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
      body: JSON.stringify(raw),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  };
  return (
    <>
      {item && (
        <Link
          to={`/travel/${item.id}`}
          className={widthThree ? "card-travel widthThree" : "card-travel"}
        >
          <div>
            <div className="card-travel-container">
              <img
                src={`${URL}/${item?.image}`}
                alt={item.title}
                loading="lazy"
               
              />
              <div className="card-travel-title">
                <span>{item.title}</span>
                {userOfLivre && (
                  <span className="flex-center" onClick={handleFavourite}>
                    <BsBookmark />
                  </span>
                )}
              </div>
              <div className="card-travel-content">
                <div className="card-travel-content-price">
                  <div className="flex card-travel-content-price-right">
                    <img src={ticketImage} alt="ticket" />
                    <span>{item.price} ريال</span>
                  </div>
                  <span className="card-travel-content-price-left">
                    {item?.start_at?.slice(0,10)}
                  </span>
                </div>
                <div className="flex card-travel-content-city">
                  {" "}
                  <span className="flex-center">
                    <IoLocationOutline />
                  </span>{" "}
                  {item.location}{" "}
                </div>
                <hr />
                <div className="flex">
                  <div className="flex card-travel-content-days">
                    <span className="flex-center">
                      <BsClock />
                    </span>{" "}
                    {/* {item.duration} أيام */}
                  </div>
                  <div
                    className={
                      !item.type === 1
                        ? "flex card-travel-content-gender family"
                        : "flex card-travel-content-gender"
                    }
                  >
                    <span className="flex-center">
                      <FiUsers />
                    </span>{" "}
                    {item.type === 1 ? "شباب" : "عائلات"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardTravel;
