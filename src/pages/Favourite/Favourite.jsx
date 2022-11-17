import React, { useEffect, useState } from "react";
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import Spinner from "../../components/Spinner/Spinner";
import { travelsData } from "../../utils/data";
import "./Favourite.css";
// URL
const URL = "https://livre.softwarecloud2.com";
const Favourite = ({ token, URL }) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch(`${URL}/api/v1/favorite/favorites/1`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Authorization": `${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setFavourites(data);
  //       setLoading(false);
  //     });
  // }, [token]);
  // console.log("Favourites",favourites);
  useEffect(() => {
    const fetchFavourite = async () => {
      const response = await fetch(`${URL}/api/v1/favorite/favorites/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `${token}`,
        },
      });
      const newData = await response.json();
      setFavourites(newData?.data);
      setLoading(false);
    };

    fetchFavourite();
  }, [URL, token]);

  console.log(favourites);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="favourite-section">
          <div className="favourite-container container">
            <h2>الفعاليات المحفوظه</h2>
            {favourites.favorites.length === 0 ? (
              <div className="favourite-cards">لا يوجد مفضلات</div>
            ) : (
              <div className="favourite-cards">
                {travelsData.slice(0, 3).map((item, index) => (
                  <CardTravel item={item} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Favourite;
