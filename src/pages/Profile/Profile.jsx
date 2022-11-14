import React from "react";
import "./Profile.css";
import { travelsData, visits } from "../../utils/data";
// Icons
import { BsCamera } from "react-icons/bs";
import { AiOutlineMobile, AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail, MdLocationCity } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
// Images
import profileImage from "../../assets/profile.png";
// Components
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import CardVisit from "../../components/Cards/CardVisit/CardVisit";

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-container container">
        {/* ========== Right Side ========== */}
        <div className="profile-right">
          <h2>البيانات الشخصية</h2>
          <div className="add-image-div flex-center ">
            <input
              type="file"
              id="file"
              //   onChange={(e) => {

              //     onImageChangeImg(e);
              //   }}
              style={{ display: "none" }}
            />
            <img src={profileImage} alt="profileImage" loading="lazy" />
            <label htmlFor="file">
              <BsCamera />
            </label>
          </div>
          <div className="second-step-inputs">
            <div className="input-div">
              <input type="text" placeholder="Ahmed Ali" />
              <span className="flex-center">
                <AiOutlineUser />
              </span>
            </div>
            <div className="input-div">
              <input type="text" placeholder="+9660501234567" />
              <span className="flex-center">
                <AiOutlineMobile />
              </span>
            </div>
            <div className="input-div">
              <input type="email" placeholder="AhmadAli@gmail.com" />
              <span className="flex-center">
                <MdAlternateEmail />
              </span>
            </div>
            <div className="input-div">
              <input type="city" placeholder="الدمام" />
              <span className="flex-center">
                <MdLocationCity />
              </span>
            </div>
            <div className="input-div">
              <input type="password" placeholder="* * * * * * * * * *" />
              <span className="flex-center">
                <HiOutlineLockClosed />
              </span>
            </div>
          </div>
          <div>
            <button className="btn btn-purple btn-w-100">حفظ التعديلات</button>
          </div>
        </div>
        {/* ========== Left Side ========== */}
        <div className="profile-left">
          <div className="profile-left-top">
            <h2>الرحلات السابقه</h2>
            <div className="old-trips">
              {travelsData?.slice(0, 2).map((item, index) => (
                <CardTravel item={item} key={index} widthThree="widthThree" />
              ))}
            </div>
          </div>
          <div className="profile-left-bottom">
            <h2>التقيمات</h2>
            <div className="old-trips">
              {visits?.slice(0, 3).map((item, index) => (
                <CardVisit item={item} key={index} widthThree="widthThree" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
