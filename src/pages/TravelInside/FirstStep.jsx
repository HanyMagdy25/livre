import React from "react";
// Icons
import { BsCalendarMinus } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const FirstStep = ({ oneTravel,setToggle }) => {
  return (
    <>
      <div className="flex travel-inside-left-calendar">
        <span className="flex-center">
          <BsCalendarMinus />
        </span>
        {oneTravel.date}
      </div>

      <div className="flex card-travel-content-days my-10">
        <span className="flex-center">
          <BsClock />
        </span>{" "}
        {oneTravel.restDays}
      </div>
      <div
        className={
          oneTravel.gender === "عائلات"
            ? "flex card-travel-content-gender family my-10"
            : "flex card-travel-content-gender"
        }
      >
        <span className="flex-center">
          <FiUsers />
        </span>{" "}
        {oneTravel.gender}
      </div>
      <div className="travel-inside-left-price">
        <span>السعر</span>
        <h2>{oneTravel.price} ريال</h2>
      </div>
      <div>
        <button className="btn btn-purple btn-w-100" onClick={()=>setToggle(2)}>حجز</button>
      </div>
    </>
  );
};

export default FirstStep;
