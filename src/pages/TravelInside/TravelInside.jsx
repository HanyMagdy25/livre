import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { travelsData } from "../../utils/data";
// CSS File
import "./TravelInside.css";
// Icons
import { BsStar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
// Components
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Spinner from "../../components/Spinner/Spinner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import "./styles.css";

// import required modules
import { EffectCreative } from "swiper";
import Feedback from "../../components/Feedback/Feedback";
// URL
const URL = "https://livre.softwarecloud2.com";
// To Split The conditions
const value = "\r";

const TravelInside = ({ token, userOfLivre }) => {
  // UseState
  const [toggle, setToggle] = useState(1);
  const [oneEvent, setOneEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const [countDis, setCountDis] = useState(0);
  const [popupFeedback, setPopupFeedback] = useState(false);
  const [tax, setTax] = useState([]);
  const [conditions, setConditions] = useState([]);
  const param = useParams();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  // const userLoggedin = false
  // const oneTravel = travelsData.find((a) => a.id === param.id);
  // /////////
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://livre.softwarecloud2.com/api/v1/events/event/${param.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOneEvent(data.data.event);
        setLoading(false);
        setConditions(
          data?.data?.event[0]?.conditions
            ?.split("\n")
            .filter((item) => item !== value)
        );
        // setConditions(data?.data?.event)
      });
    // setOneTravel(oneEvent?.data?.event);
  }, [param.id, token]);

  // useEffect(() => {
  //   setCategory(oneEvent?.data?.event);
  // }, [oneEvent?.data?.event]);

  // console.log("Conditions", conditions);
  // console.log("oneEvent?.images", oneEvent[0]?.images);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {oneEvent[0] && (
            <div className="travel-inside">
              <div className="travel-inside-container container">
                {/* ============ Right Side ========== */}
                <div className="travel-inside-right">
                  <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: ["-20%", 0, -1],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper3"
                  >
                    {oneEvent[0]?.images?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`${URL}/${item?.image}`}
                          alt={oneEvent[0].title}
                          loading="lazy"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="flex travel-inside-right-title">
                    <h2>{oneEvent[0]?.title}</h2>
                    {userOfLivre ? (
                      <div
                        className="flex rate"
                        onClick={() => setPopupFeedback(true)}
                      >
                        <span className="flex-center">{oneEvent[0]?.rate}</span>
                        <span className="flex-center">
                          <BsStar />
                        </span>
                      </div>
                    ) : (
                      <div
                        className="flex rate"
                        onClick={() => navigate("/login")}
                      >
                        <span className="flex-center">{oneEvent[0]?.rate}</span>
                        <span className="flex-center">
                          <BsStar />
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex card-travel-content-city">
                    {" "}
                    <span className="flex-center">
                      <IoLocationOutline />
                    </span>{" "}
                    {truncate(oneEvent[0]?.location,60)}{" "}
                    
                  </div>

                  <p>{oneEvent[0]?.description}</p>
                  {/* ======== الخدمات ====== */}
                  <div className="features">
                    <h3>الخدمات</h3>
                    <div className="features-div">
                      {oneEvent[0]?.features.map((item, index) => (
                        <div key={index} className="features-icon">
                          <div>
                            <img src={`${URL}/${item?.icon}`} alt="icon" />
                          </div>
                          <span>{item?.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* ======== Conditions ====== */}
                  <div className="conditions">
                    <h3>الشروط و الأحكام</h3>
                    <ul>
                      {conditions?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* ======== Left Side ========== */}
                <div className="travel-inside-left">
                  {toggle === 1 && (
                    <FirstStep
                      oneEvent={oneEvent[0]}
                      toggle={toggle}
                      setToggle={setToggle}
                      userOfLivre={userOfLivre}
                    />
                  )}
                  {toggle === 2 && (
                    <SecondStep
                      oneEvent={oneEvent[0]}
                      toggle={toggle}
                      setToggle={setToggle}
                      userOfLivre={userOfLivre}
                      count={count}
                      setCount={setCount}
                      countDis={countDis}
                      setCountDis={setCountDis}
                      token={token}
                    />
                  )}

                  {toggle === 3 && (
                    <ThirdStep
                      oneEvent={oneEvent[0]}
                      toggle={toggle}
                      setToggle={setToggle}
                      userOfLivre={userOfLivre}
                      countDis={countDis}
                      setCountDis={setCountDis}
                      count={count}
                    />
                  )}
                </div>
              </div>
              {popupFeedback && (
                <Feedback
                  setPopupFeedback={setPopupFeedback}
                  userOfLivre={userOfLivre}
                  token={token}
                  oneEvent={oneEvent}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TravelInside;
