import React, { useEffect, useState } from "react";
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import Spinner from "../../components/Spinner/Spinner";
import { travelsData } from "../../utils/data";
import "./Favourite.css";
// URL
const URL = "https://livre.softwarecloud2.com";
const Favourite = ({ token, URL ,userOfLivre }) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [client_id, setClient_id] = useState(userOfLivre?.id);
  // To Search => API
  useEffect(() => {
    setClient_id(userOfLivre?.id);
  }, [userOfLivre?.id]);
  console.log("favourites",favourites);

  useEffect(() => {
    const fetchFavourite = async () => {
      const response = await fetch(`${URL}/api/v1/favorite/favorites/${client_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `${token}`,
        },
      });
      const newData = await response.json();
      setFavourites(newData?.data?.favorites);
      setLoading(false);
    };

    fetchFavourite();
  }, [URL, client_id, token]);

  // console.log(favourites);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="favourite-section">
          <div className="favourite-container container">
            <h2>الفعاليات المحفوظه</h2>
            {favourites.length === 0 ? (
              <div className="favourite-cards">لا يوجد مفضلات</div>
            ) : (
              <div className="favourite-cards">
                {favourites.map((item, index) => (
                  <CardTravel item={item?.event} key={index} />
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
