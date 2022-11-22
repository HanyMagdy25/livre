import React, { useEffect, useState } from "react";
import "./Feedback.css";
import { FaStar } from "react-icons/fa";
// URL
const URL = "https://livre.softwarecloud2.com";

const colors = {
  orange: "#ffb231",
  grey: "#a9a9a9",
};

const Feedback = ({ setPopupFeedback, token, userOfLivre ,oneEvent}) => {
  const [client_id, setClient_id] = useState(1);
  const [event_id, setEvent_id] = useState(oneEvent[0]?.id);
  const [comment, setComment] = useState("");
  // const [done, setDone] = useState(false);
  // Stars
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  useEffect(() => {
    setClient_id(userOfLivre?.id);
    setEvent_id(oneEvent[0]?.id)
  }, [oneEvent, userOfLivre?.id]);

  // console.log("client_id",client_id);
  // console.log("event_id",event_id);
  // console.log("feedback",comment);
  // console.log("client_id",currentValue);
  console.log("oneEvent",oneEvent[0]);

  const handleRate = (e) => {
    e.preventDefault();
    const rate = {
      client_id,
      event_id,
      feedback: comment,
      rating: currentValue,
    };
    fetch(`${URL}/api/v1/feedback/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
      body: JSON.stringify(rate),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (res.status === "success") {
        //   setComment("");
        //   setCurrentValue(0);
        //   setDone(true);
        // }
        console.log(data)
        if (data.status === "success") {
          alert("تم ارسال التقييم");
          window.location.reload();
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <div className="popup">
      <div className="model">
        <div className="feedback-container">
          <h2>قيم الرحلة</h2>
          <p>ما مدى مطابقة الوصف للرحلة</p>
          <div className="stars">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  value={currentValue}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>

          <textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="قم بإضاف ملاحظاتك هنا . . . . ."
            value={comment}
          />
          <div className="flex-justify">
            <button
              type="button"
              onClick={handleRate}
              className="btn btn-purple"
            >
              إرسال التقييم
            </button>
            <button
              type="button"
              onClick={() => setPopupFeedback(false)}
              className="btn"
            >
              إلغاء
            </button>
          </div>
          {/* {done && <p>تم ارسال التقييم</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
