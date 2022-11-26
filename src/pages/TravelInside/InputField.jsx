import React from "react";
// Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineUser } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";
const InputField = ({
  numOfuser,
  countDis,
  setCountDis,
  secondUser,
  setSecondUser,
}) => {
  const handleChange = (e) => {
    const name = e.target.name; //it is the name of that input
    const value = e.target.value; //value of that input
    setSecondUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <h2>{numOfuser}</h2>
      <div className="input-div">
        <input
          type="text"
          placeholder="الأسم"
          name="name"
          onChange={handleChange}
          value={secondUser.name}
        />
        <span className="flex-center">
          <AiOutlineUser />
        </span>
      </div>
      <div className="input-div">
        <input
          type="text"
          placeholder="السن"
          // onChange={(e) => setAgeOfUser(e.target.value)}
          name="age"
            onChange={handleChange}
            value={secondUser.age}
        />
        <span className="flex-center">
          <BsCalendarMinus />
        </span>
      </div>
      <div className="input-div">
        <input
          type="text"
          placeholder="رقم الهاتف"
          // onChange={(e) => setPhone(e.target.value)}
          name="phone"
          onChange={handleChange}
          value={secondUser.phone}
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
              ? setCountDis(countDis + 1)
              : setCountDis(countDis - 1)
          }
        />
      </div>
    </div>
  );
};

export default InputField;
