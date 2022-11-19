import React, { useEffect, useState } from "react";
// Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineUser } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";
import InputField from "./InputField";

const SecondStep = ({ oneEvent, setToggle, userOfLivre,count, setCount,countDis,setCountDis}) => {
  const [nameOfUser, setNameOfUser] = useState("");
  const [ageOfUser, setAgeOfUser] = useState("");

  useEffect(() => {
    setNameOfUser(userOfLivre?.name);
    console.log(countDis);
  }, [countDis, userOfLivre?.name]);

  return (
    <>
      <div className="flex-justify second-step-top">
        <h3>شراء تذاكر</h3>
        <span className="flex-center back" onClick={() => setToggle(1)}>
          <HiOutlineArrowNarrowLeft />
        </span>
      </div>
      <div className="second-step-count">
        <h6>عدد الأفراد</h6>
        <div className="flex-justify">
          <button
            className="flex-center"
            disabled={count > 7}
            onClick={() => setCount(count + 1)}
          >
            <AiOutlinePlus />
          </button>
          <h3 className="flex-center">{count}</h3>
          <button
            className="flex-center"
            disabled={count < 2}
            onClick={() => setCount(count - 1)}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
      <div className="second-step-inputs">
        <h2>الفرد الأول</h2>
        <div className="input-div">
          <input
            type="text"
            placeholder="الأسم"
            value={nameOfUser}
            onChange={(e) => setNameOfUser(e.target.value)}
          />
          <span className="flex-center">
            <AiOutlineUser />
          </span>
        </div>
        <div className="input-div">
          <input
            type="text"
            placeholder="السن"
            onChange={(e) => setAgeOfUser(e.target.value)}
          />
          <span className="flex-center">
            <BsCalendarMinus />
          </span>
        </div>
        <div className="flex-justify check-div">
          <span>هل انت من ذوي الإحتياجات الخاصه؟</span>
          <input
            type="checkbox"
            className="flex-center"
            onChange={(e) =>
              e.target.checked === true
                ?  setCountDis(countDis + 1)
                :  setCountDis(countDis - 1)
            }
          />
        </div>
        {count > 1 && <InputField numOfuser="الفرد الثانى" countDis={countDis} setCountDis={setCountDis}/>}
        {count > 2 && <InputField numOfuser="الفرد الثالث" countDis={countDis} setCountDis={setCountDis}/>}
        {count > 3 && <InputField numOfuser="الفرد الرابع" countDis={countDis} setCountDis={setCountDis}/>}
        {count > 4 && <InputField numOfuser="الفرد الخامس" countDis={countDis} setCountDis={setCountDis}/>}
        {count > 5 && <InputField numOfuser="الفرد السادس" countDis={countDis} setCountDis={setCountDis}/>}
        {count > 6 && <InputField numOfuser="الفرد السابع" countDis={countDis} setCountDis={setCountDis}/>}
        {count > 7 && <InputField numOfuser="الفرد الثامن" countDis={countDis} setCountDis={setCountDis}/>}
      </div>
      <div className="travel-inside-left-price">
        <span>السعر</span>
        <h2>{oneEvent?.price} ريال</h2>
      </div>
      <div>
        <button
          className="btn btn-purple btn-w-100"
          onClick={() => setToggle(3)}
        >
          الدفع
        </button>
      </div>
    </>
  );
};

export default SecondStep;
