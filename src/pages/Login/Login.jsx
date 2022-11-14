import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";
// import "./Login.css";
import { BsArrowLeft } from "react-icons/bs";
import googleImg from "../../assets/google.png";
const Login = () => {
  return (
    <div className="login">
      <div className="login-container container">
        <img src={loginImg} className="login-img" alt="login" loading="lazy" />
        <div className="login-content">
          <h2>مرحبا بك! قم بتسجيل الدخول </h2>
          <h2> لتتمكن من حجز رحلاتك</h2>
          <p>
            <Link to="/register" className="flex-center">
              ليس لديك حساب؟ قم بإنشاء حسابك الآن <BsArrowLeft />
            </Link>
          </p>

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
                type="password"
                className="form-control global"
                placeholder="كلمة السر"
              />
            </div>
          </div>
          {/* ============= End Inputs ============ */}
          <div>
            <button className="btn btn-purple btn-w-100">تسجيل الدخول</button>
          </div>
          {/* ============= Start تسجيل الدخول  =========== */}
          <div className="create-account">
            <p>
              <Link to="/">أو قم بالدخول عن طريق</Link>
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
