import React from "react";
// Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import {  AiOutlineUser } from "react-icons/ai";
import { BsHash } from "react-icons/bs";

const ThirdStep = ({ oneTravel,setToggle }) => {
  return (
    <>
      <div className="flex-justify second-step-top">
        <h3>طريقة الدفع</h3>
        <span className="flex-center back" onClick={()=>setToggle(2)}>
          <HiOutlineArrowNarrowLeft />
        </span>
      </div>
      <div className="third-step-info">
        <div className="flex-justify">
          <h3>هضبة كينتاماني</h3>
          <div className="flex ">
            {" "}
            <span className="flex-center">
              <IoLocationOutline />
            </span>{" "}
            {oneTravel.city}{" "}
          </div>
        </div>
        <h3>6 أيام</h3>
        <h3>عدد الأفراد 2</h3>
        <h3>من ذوي الإحتياجات الخاصه 1</h3>
      </div>
      <div className="flex-justify visa-div">
        <div>visa</div>
        <div>visa</div>
        <div>visa</div>
      </div>
      <div className="second-step-inputs">
        <div className="input-div">
          <input type="text" placeholder="أسم حامل البطاقة" />
          <span className="flex-center">
            <AiOutlineUser />
          </span>
        </div>
        <div className="input-div">
          <input type="text" placeholder="رقم البطاقة" />
          <span className="flex-center">
            <BsHash />
          </span>
        </div>
        <div className="two-inputs">
          <div className="input-div">
            <input type="text" placeholder="رقم البطاقة" />
          </div>
          <div className="input-div">
            <input type="text" placeholder="رقم البطاقة" />
          </div>
        </div>
      </div>
      <div className="travel-inside-left-price">
        <span>السعر</span>
        <h2>{oneTravel.price} ريال</h2>
      </div>
      <div>
        <button className="btn btn-purple btn-w-100">الدفع</button>
      </div>
    </>
  );
};

export default ThirdStep;
