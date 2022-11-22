import React, { useEffect, useState } from "react";
import "./Profile.css";
import { travelsData } from "../../utils/data";
// Icons
import { BsCamera } from "react-icons/bs";
import { AiOutlineMobile, AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail, MdLocationCity } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
// Components
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
// import CardVisit from "../../components/Cards/CardVisit/CardVisit";
import Spinner from "../../components/Spinner/Spinner";
// URL
const URL_HOST = "https://livre.softwarecloud2.com";

const Profile = ({ token, userOfLivre }) => {
  const [profile, setProfile] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [showPicImg, setShowPicImg] = useState(null);
  const onImageChangeImg = (e) => {
    setShowPicImg(URL?.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        `${URL_HOST}/api/v1/client/profile/${userOfLivre?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${token}`,
          },
        }
      );
      const newData = await response.json();
      setProfile(newData?.data?.client);
      setLoading(false);
      setUserName(newData?.data?.client?.name);
      // setUserName(userOfLivre?.name);
      // setLoadingOneCat(false)
    };

    fetchProfile();
  }, [token, userOfLivre?.id]);

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(
        `${URL_HOST}/api/v1/reservation/reservations/${userOfLivre?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${token}`,
          },
        }
      );
      const newData = await response.json();
      setReservation(newData?.data?.reservations);
    };

    fetchReservation();
  }, [token, userOfLivre?.id]);
  // ///////////
  useEffect(() => {
    fetch(`${URL_HOST}/api/v1/feedback/feedbacks/${userOfLivre?.id}`, {
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
  }, [token, userOfLivre?.id]);
  // To handleEditProfile
  const handleEditProfile = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", userName);
    formData.append("photo", showPicImg);
    fetch(`${URL_HOST}/api/v1/client/update/profile/${userOfLivre?.id}`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.status === "success") {
          alert(res.message);
          window.location.reload();
        } else {
          alert(res.message);
        }
      });
  };
  // console.log("showPicImg", showPicImg);
  // console.log("userName", userName);

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
                  onChange={(e) => {
                    onImageChangeImg(e);
                  }}
                  style={{ display: "none" }}
                />
                <img
                  // src={`${URL_HOST}/${profile?.image}`}
                  src={
                    showPicImg ? showPicImg : `${URL_HOST}/${profile?.image}`
                  }
                  alt="profileImage"
                  loading="lazy"
                />
                <label htmlFor="file">
                  <BsCamera />
                </label>
              </div>
              <div className="second-step-inputs">
                <div className="input-div">
                  <input
                    type="text"
                    placeholder={userName}
                    // value={userName}
                    value={userName || ""}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <span className="flex-center">
                    <AiOutlineUser />
                  </span>
                </div>
                <div className="input-div">
                  <input type="text" placeholder={profile?.phone} disabled />
                  <span className="flex-center">
                    <AiOutlineMobile />
                  </span>
                </div>
                <div className="input-div">
                  <input type="email" placeholder={profile?.email} disabled />
                  <span className="flex-center">
                    <MdAlternateEmail />
                  </span>
                </div>
                <div className="input-div">
                  <input type="city" placeholder="الدمام" disabled />
                  <span className="flex-center">
                    <MdLocationCity />
                  </span>
                </div>
                <div className="input-div">
                  <input
                    type="password"
                    placeholder="* * * * * * * * * *"
                    disabled
                  />
                  <span className="flex-center">
                    <HiOutlineLockClosed />
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-purple btn-w-100"
                  onClick={handleEditProfile}
                >
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
                    {feedbacks?.slice(0, 3).map((item, index) => (
                      <CardTravel
                        item={item.event}
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
