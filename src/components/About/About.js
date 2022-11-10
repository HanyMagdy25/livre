import React from "react";
import "./About.css";
import trips from "../../assets/trips.png";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-container container">
        <img src={trips} alt="trips" />
        <div className="about-content">
          <div className="patterns">
            <span>عن</span>
            <svg width="100%">
              <text x="55%" y="55%" textAnchor="middle">
                LIVRE
              </text>
            </svg>
          </div>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
