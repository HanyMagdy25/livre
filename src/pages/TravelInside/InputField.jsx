import React from 'react'
// Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineUser } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";
const InputField = ({numOfuser,countDis,setCountDis}) => {
  return (
    <div>
          <h2>{numOfuser}</h2>
        <div className="input-div">
          <input
            type="text"
            placeholder="الأسم"
            // value={nameOfUser}
            // onChange={(e) => setNameOfUser(e.target.value)}
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
          />
          <span className="flex-center">
            <BsCalendarMinus />
          </span>
        </div>
        <div className="flex-justify check-div">
          <span>هل انت من ذوي الإحتياجات الخاصه؟</span>
          <input type="checkbox" className="flex-center" onChange={(e) =>
              e.target.checked === true
                ?  setCountDis(countDis + 1)
                :  setCountDis(countDis - 1)
            } />
        </div>
    </div>
  )
}

export default InputField