import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import "./Login.css";
import { BsArrowLeft } from "react-icons/bs";
import camImage from "../../assets/cam.png";
import googleImg from "../../assets/google.png";
// URL
const URL_HOST ="https://livre.softwarecloud2.com";
const Login = ({ token }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city_id, setCity_id] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [showPicImg, setShowPicImg] = useState(null);
  const navigate = useNavigate();
  const onImageChangeImg = (e) => {
    setShowPicImg(URL?.createObjectURL(e.target.files[0]));
  };
// console.log(showPicImg)
  const handleRegister = (e) => {
    e.preventDefault();
    const blog = { name, email, phone, city_id, password };

    setIsPending(true);

    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }
    formData.append("photo", showPicImg);
    fetch(`${URL_HOST}/api/v1/client/register`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
      // redirect: 'follow',
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res", res);
        setIsPending(false);
        if (res.status === "success") {
          navigate("/login");
        }else {
          alert(res.message);
        }
      });
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
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className="form-control-div">
              <input
                type="text"
                className="form-control global"
                placeholder="الأسم"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
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
                type="city"
                className="form-control global"
                placeholder="المدينة"
                onChange={(e)=>setCity_id(e.target.value)}
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
          {/* ============= Start الشروط و الأحكام ============ */}
          <div className="terms-div">
            <p>
              عند تسجيلك فأنت توافق على{" "}
              <a href="https://www.google.com">الشروط و الأحكام</a>
            </p>
          </div>
          {/* ============= End الشروط و الأحكام ============ */}
          <div>
            <button className="btn btn-purple btn-w-100" onClick={handleRegister}>
              إنشاء حساب
            </button>
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
