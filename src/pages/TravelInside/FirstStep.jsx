import React from "react";
// Icons
import { BsCalendarMinus } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FirstStep = ({ oneEvent, setToggle, userOfLivre }) => {
  const navigate = useNavigate();
  // console.log("oneEvent", oneEvent);
  return (
    <>
      {oneEvent && (
        <>
          <div className="flex travel-inside-left-calendar">
            <span className="flex-center">
              <BsCalendarMinus />
            </span>
            {oneEvent.start_at?.slice(0, 10)}
          </div>

          <div className="flex card-travel-content-days my-10">
            <span className="flex-center">
              <BsClock />
            </span>{" "}
            {oneEvent.duration} ساعات{" "}
            {oneEvent.daily > 0 && `${oneEvent.daily} أيام`}
          </div>
          <div
            className={
              oneEvent.type === 1
              ? "flex card-travel-content-gender"
              : "flex card-travel-content-gender family my-10"
            }
          >
            <span className="flex-center">
              <FiUsers />
            </span>{" "}
            {oneEvent.type === 1 && "شباب" }
            {oneEvent.type === 2 && "عائلات"}
            {oneEvent.type === 3 && "نساء"}
            {oneEvent.type === 4 && "الكل"}
            
          </div>
          <div className="travel-inside-left-price">
            <span>السعر</span>
            <h2>{oneEvent.price} ريال</h2>
          </div>
          <div>
            {userOfLivre ? (
              <button
                className="btn btn-purple btn-w-100"
                onClick={() => setToggle(2)}
              >
                حجز
              </button>
            ) : (
              <button
                className="btn btn-purple btn-w-100"
                onClick={() => navigate("/login")}
              >
                حجز
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default FirstStep;
