import React, { useEffect, useState } from "react";
import "./Profile.css";
import { travelsData, visits } from "../../utils/data";
// Icons
import { BsCamera } from "react-icons/bs";
import { AiOutlineMobile, AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail, MdLocationCity } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
// Images
import profileImage from "../../assets/profile.png";
// Components
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import CardVisit from "../../components/Cards/CardVisit/CardVisit";
import Spinner from "../../components/Spinner/Spinner";
// URL
// const URL = "https://livre.softwarecloud2.com";

const Profile = ({ token, URL }) => {
  const [profile, setProfile] = useState([]);
  const [test, setTest] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`${URL}/api/v1/client/profile/15`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `${token}`,
        },
      });
      const newData = await response.json();
      setProfile(newData?.data?.client);
      setLoading(false);
      // setLoadingOneCat(false)
    };

    fetchProfile();
  }, [URL, token]);

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`${URL}/api/v1/reservation/reservations/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `${token}`,
        },
      });
      const newData = await response.json();
      setReservation(newData?.data?.reservations);
    };

    fetchReservation();
  }, [URL, token]);

  useEffect(() => {
    fetch(`${URL}/api/v1/feedback/feedbacks/3`, {
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
        setFeedbacks(data?.data?.feedbacks);
        // setLoading(false);
      });
  }, [URL, token]);
  console.log("profile", profile);
  console.log("Feedbacks", feedbacks);
  console.log("Reservation", reservation);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="profile-section">
          <div className="profile-container container">
            {/* ========== Right Side ========== */}
            <div className="profile-right">
              <h2>البيانات الشخصية</h2>
              <div className="add-image-div flex-center ">
                <input
                  type="file"
                  id="file"
                  //   onChange={(e) => {

                  //     onImageChangeImg(e);
                  //   }}
                  style={{ display: "none" }}
                />
                <img
                  src={`${URL}/${profile?.image}`}
                  alt="profileImage"
                  loading="lazy"
                />
                <label htmlFor="file">
                  <BsCamera />
                </label>
              </div>
              <div className="second-step-inputs">
                <div className="input-div">
                  <input type="text" placeholder={profile?.name} />
                  <span className="flex-center">
                    <AiOutlineUser />
                  </span>
                </div>
                <div className="input-div">
                  <input type="text" placeholder={profile?.phone} />
                  <span className="flex-center">
                    <AiOutlineMobile />
                  </span>
                </div>
                <div className="input-div">
                  <input type="email" placeholder={profile?.email} />
                  <span className="flex-center">
                    <MdAlternateEmail />
                  </span>
                </div>
                <div className="input-div">
                  <input type="city" placeholder="الدمام" />
                  <span className="flex-center">
                    <MdLocationCity />
                  </span>
                </div>
                <div className="input-div">
                  <input type="password" placeholder="* * * * * * * * * *" />
                  <span className="flex-center">
                    <HiOutlineLockClosed />
                  </span>
                </div>
              </div>
              <div>
                <button className="btn btn-purple btn-w-100">
                  حفظ التعديلات
                </button>
              </div>
            </div>
            {/* ========== Left Side ========== */}
            <div className="profile-left">
              <div className="profile-left-top">
                <h2>الرحلات السابقه</h2>
                {reservation?.length === 0 ? (
                  <div className="old-trips">لا يوجد رحلات سابقة</div>
                ) : (
                  <div className="old-trips">
                    {travelsData?.slice(0, 2).map((item, index) => (
                      <CardTravel
                        item={item}
                        key={index}
                        widthThree="widthThree"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="profile-left-bottom">
                <h2>التقيمات</h2>
                {feedbacks?.length === 0 ? (
                  <div className="old-trips">لا يوجد تقيمات</div>
                ) : (
                  <div className="old-trips">
                    {visits?.slice(0, 3).map((item, index) => (
                      <CardVisit
                        item={item}
                        key={index}
                        widthThree="widthThree"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
