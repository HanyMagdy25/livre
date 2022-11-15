import React from "react";
// Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlinePlus ,AiOutlineMinus,AiOutlineUser} from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";

const SecondStep = ({ oneEvent,setToggle }) => {
  return (
    <>
      <div className="flex-justify second-step-top">
        <h3>شراء تذاكر</h3>
        <span className="flex-center back" onClick={()=>setToggle(1)}>
          <HiOutlineArrowNarrowLeft />
        </span>
      </div>
      <div className="second-step-count">
        <h6>عدد الأفراد</h6>
        <div className="flex-justify">
          <button className="flex-center"><AiOutlinePlus/></button>
          <h3 className="flex-center">5</h3>
          <button className="flex-center"><AiOutlineMinus/></button>
        </div>
      </div>
      <div className="second-step-inputs">
        <h2>الفرد الأول</h2>
        <div className="input-div">
            <input type="text" placeholder="Ahmed Ali" />
            <span className="flex-center"><AiOutlineUser/></span>
        </div>
        <div className="input-div">
            <input type="text" placeholder="السن" />
            <span className="flex-center"><BsCalendarMinus/></span>
        </div>
        <div className="flex-justify check-div">
            <span>هل انت من ذوي الإحتياجات الخاصه؟</span>
            <input type="checkbox" className="flex-center" />
        </div>
        
      </div>
      <div className="travel-inside-left-price">
        <span>السعر</span>
        <h2>{oneEvent?.price} ريال</h2>
      </div>
      <div>
        <button className="btn btn-purple btn-w-100" onClick={()=>setToggle(3)}>الدفع</button>
      </div>
    </>
  );
};

export default SecondStep;
