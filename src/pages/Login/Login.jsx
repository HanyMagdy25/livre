import React, { useState } from "react";
import { Link } from "react-router-dom";
// Images
import loginImg from "../../assets/login.png";
import googleImg from "../../assets/google.png";
// import "./Login.css";
import { BsArrowLeft } from "react-icons/bs";
// URL
const URL_HOST = "https://livre.softwarecloud2.com";

const Login = ({token,setUserOfLivre}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${URL_HOST}/api/v1/client/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.status === "success") {
          window.location.href = "/";
          setUserOfLivre(localStorage.setItem("user-livre", JSON.stringify(data?.data?.client)))
        } else {
          alert(data.message);
        }
      });
  };
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
                 type="email"
                className="form-control global"
                placeholder="البريد الإلكتروني"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-control-div">
              <input
                type="password"
                className="form-control global"
                placeholder="كلمة السر"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>
          {/* ============= End Inputs ============ */}
          <div>
            <button className="btn btn-purple btn-w-100" onClick={handleLogin}>تسجيل الدخول</button>
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
