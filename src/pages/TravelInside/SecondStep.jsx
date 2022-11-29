import React, { useEffect, useState } from "react";
// Icons
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineUser } from "react-icons/ai";
import { BsCalendarMinus } from "react-icons/bs";
import InputField from "./InputField";
// URL
const URL_HOST = "https://livre.softwarecloud2.com";

const SecondStep = ({
  oneEvent,
  setToggle,
  userOfLivre,
  count,
  setCount,
  countDis,
  setCountDis,
  token
}) => {
  // const [nameOfUser, setNameOfUser] = useState("");
  // const [ageOfUser, setAgeOfUser] = useState("");
  // const [phoneOfUser, setPhoneOfUser] = useState("");
  const [clients, setClients] = useState([
    {
      name: "afsd",
      age: "15",
      phone: "011111"
    }
  ]);
  const [firstUser, setFirstUser] = useState({
    name: "",
    age: "",
    phone: "",
  });
  const [secondUser, setSecondUser] = useState({
    name: "",
    age: "",
    phone: "",
  });
  const [thirdUser, setThirdUser] = useState({
    name: "",
    age: "",
    phone: "",
  });

  // const [allUsers, setAllUsers] = useState([]);

  const [coupon, setCoupon] = useState(0);
  const [dataToSend, setDataToSend] = useState({
    client_id: "",
    event_id: "",
    amount: "",
    number: "",
    discount: "",
  });
  useEffect(() => {
    setDataToSend((prev) => {
      return {
        ...prev,
        client_id: userOfLivre?.id,
        event_id: oneEvent?.id,
        amount: oneEvent?.price,
        number: count,
        discount: 0,
        clients: [firstUser],
      };
    });
  }, [count, firstUser, secondUser, thirdUser, oneEvent?.id, oneEvent?.price, userOfLivre?.id]);

  console.log("clients", clients);

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setClients(s => {
      const newArr = s.slice();
      console.log(e.target.id);
      newArr[index].name = e.target.name == 'name' ? e.target.value : newArr[index].name;
      newArr[index].age = e.target.name == 'age' ? e.target.value : newArr[index].age;
      newArr[index].phone = e.target.name == 'phone' ? e.target.value : newArr[index].phone;
      return newArr;
    });
  };
 
  const removeClient = (index) => {
    setClients([
      ...clients.slice(0, index),
      ...clients.slice(index + 1)
    ]);
  }

  // useEffect(() => {
  //   setAllUsers(allUsers.push({name:"55"}));

  // }, []);

  // console.log("FirstUser", firstUser);
  // console.log("secondUser", secondUser);
  // console.log("thirdUser", thirdUser);
  // console.log("allUsers", allUsers);
  const handlePaid = (e) => {
    e.preventDefault();
    const blog = { dataToSend }
    fetch(`${URL_HOST}/api/v1/reservation/reserve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {

        console.log("data", data);
      });
  };
  // const handleCoupon = (e) => {
  //   e.preventDefault();
  //   const blog = {code:coupon,event_id:oneEvent?.id}
  //   fetch(`${URL_HOST}/api/v1/coupon/check`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Authorization": `${token}`,
  //     },
  //     body: JSON.stringify(blog),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {

  //       console.log("data",data);
  //     });
  // };
  return (
    <>
      <div className="flex-justify second-step-top">
        <h3>شراء تذاكر</h3>
        <span className="flex-center back" onClick={() => setToggle(1)}>
          <HiOutlineArrowNarrowLeft />
        </span>
      </div>
      <div className="coupon">
        <input type="text" onChange={(e) => setCoupon(e.target.value)} />
        <button type="button" >تطبيق</button>
      </div>
      <div className="second-step-count">
        <h6>عدد الأفراد</h6>
        <div className="flex-justify">
          <button
            className="flex-center"
            disabled={count > 7}
            onClick={() => { 
              setClients([...clients, { name: "", age: "", phone: "" }]) 
              setCount(count + 1)
            }}
          >
            <AiOutlinePlus />
          </button>
          <h3 className="flex-center">{count}</h3>
          <button
            className="flex-center"
            disabled={count < 2}
            onClick={() => {
              removeClient(clients.length - 1)
              setCount(count - 1)
            }}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
      <div className="second-step-inputs">
        {clients.map((item, i) => {
          return (
            <div key={i}>
              <h2>الفرد الأول</h2>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="الأسم"
                  name="name"
                  id={i}
                  // value={nameOfUser}
                  // onChange={(e) => setNameOfUser(e.target.value)}
                  onChange={handleChange}
                  value={item.name}
                // value={inputs.nameOfUser || ""}
                // onChange={handleChange}
                />
                <span className="flex-center">
                  <AiOutlineUser />
                </span>
              </div>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="السن"
                  id={i}
                  // onChange={(e) => setAgeOfUser(e.target.value)}
                  // value={inputs.ageOfUser || ""}
                  // onChange={handleChange}
                  name="age"
                  onChange={handleChange}
                  value={item.age}
                />
                <span className="flex-center">
                  <BsCalendarMinus />
                </span>
              </div>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="رقم الهاتف"
                  id={i}
                  // value={phoneOfUser}
                  // onChange={(e) => setPhoneOfUser(e.target.value)}
                  // value={inputs.phoneOfUser || ""}
                  // onChange={handleChange}
                  name="phone"
                  onChange={handleChange}
                  value={item.phone}
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
        })}

        {/* {count > 1 && (
          <InputField
            numOfuser="الفرد الثانى"
            countDis={countDis}
            setCountDis={setCountDis}
            setSecondUser={setSecondUser}
            secondUser={secondUser}
          />
        )}
        {count > 2 && (
          <InputField
            numOfuser="الفرد الثالث"
            countDis={countDis}
            setCountDis={setCountDis}
            setSecondUser={setThirdUser}
            secondUser={thirdUser}
          />
        )}
        {count > 3 && (
          <InputField
            numOfuser="الفرد الرابع"
            countDis={countDis}
            setCountDis={setCountDis}
          />
        )}
        {count > 4 && (
          <InputField
            numOfuser="الفرد الخامس"
            countDis={countDis}
            setCountDis={setCountDis}
          />
        )}
        {count > 5 && (
          <InputField
            numOfuser="الفرد السادس"
            countDis={countDis}
            setCountDis={setCountDis}
          />
        )}
        {count > 6 && (
          <InputField
            numOfuser="الفرد السابع"
            countDis={countDis}
            setCountDis={setCountDis}
          />
        )}
        {count > 7 && (
          <InputField
            numOfuser="الفرد الثامن"
            countDis={countDis}
            setCountDis={setCountDis}
          />
        )} */}
      </div>
      <div className="travel-inside-left-price">
        <span>السعر</span>
        <h2>{oneEvent?.price * count} ريال</h2>
      </div>
      <div>
        <button
          className="btn btn-purple btn-w-100"
          // onClick={() => setToggle(3)}
          onClick={handlePaid}

        >
          الدفع
        </button>
      </div>
    </>
  );
};

export default SecondStep;
