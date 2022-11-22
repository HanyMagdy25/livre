import React, { useEffect, useState } from "react";
// CSS File
import "./Favourite.css";
// Components
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import Spinner from "../../components/Spinner/Spinner";

const Favourite = ({ token, URL, userOfLivre }) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [client_id, setClient_id] = useState(userOfLivre?.id);
  // To Search => API
  useEffect(() => {
    setClient_id(userOfLivre?.id);
  }, [userOfLivre?.id]);

  useEffect(() => {
    const fetchFavourite = async () => {
      const response = await fetch(
        `${URL}/api/v1/favorite/favorites/${client_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${token}`,
          },
        }
      );
      const newData = await response.json();
      setFavourites(newData?.data?.favorites);
      setLoading(false);
    };

    fetchFavourite();
  }, [URL, client_id, token]);
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
