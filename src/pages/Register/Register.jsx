import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";
import "./Login.css";
import { BsArrowLeft } from "react-icons/bs";
import camImage from "../../assets/cam.png";
import googleImg from "../../assets/google.png";
const Login = () => {
  const [showPicImg, setShowPicImg] = useState(null);
  const onImageChangeImg = (e) => {
    setShowPicImg(URL?.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="login">
      <div className="login-container container">
        <img src={loginImg} className="login-img" alt="login" loading="lazy" />
        <div className="login-content">
          <h2>قم بإنشاء حسابك الآن</h2>
          <p>
            <Link to="/login" className="flex-center">
              لديك حساب بالفعل؟ قم بتسجيل الدخول <BsArrowLeft />
            </Link>
          </p>
          <div className="add-image-div">
            <input
              type="file"
              id="file"
              onChange={(e) => {
                // setImg(e.target.files[0]);
                onImageChangeImg(e);
              }}
              style={{ display: "none" }}
            />
            <img
              src={showPicImg ? showPicImg : camImage}
              alt="preview"
              loading="lazy"
            />
            <label htmlFor="file">قم بإضافة صورتك</label>
          </div>
          {/* ============= Start Inputs ============ */}
          <div>
            <div className="form-control-div">
              <input
                type="tel"
                className="form-control global"
                placeholder="رقم الجوال"
              />
            </div>
            <div className="form-control-div">
              <input
                type="text"
                className="form-control global"
                placeholder="الأسم"
              />
            </div>
            <div className="form-control-div">
              <input
                type="email"
                className="form-control global"
                placeholder="البريد الإلكتروني"
              />
            </div>
            <div className="form-control-div">
              <input
                type="city"
                className="form-control global"
                placeholder="المدينة"
              />
            </div>
            <div className="form-control-div">
              <input
                type="password"
                className="form-control global"
                placeholder="كلمة السر"
              />
            </div>
          </div>
          {/* ============= End Inputs ============ */}
          {/* ============= Start الشروط و الأحكام ============ */}
          <div className="terms-div">
            <p>
              عند تسجيلك فأنت توافق على{" "}
              <a href="https://www.google.com">الشروط و الأحكام</a>
            </p>
          </div>
          {/* ============= End الشروط و الأحكام ============ */}
          <div>
            <button className="btn btn-purple btn-w-100">إنشاء حساب</button>
          </div>
          {/* ============= Start أو قم بإنشاء الحساب عن طريق =========== */}
          <div className="create-account">
            <p>
              <Link to="/">أو قم بإنشاء الحساب عن طريق</Link>
            </p>

            <div className="create-account-img">
              <img src={googleImg} alt="google" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
