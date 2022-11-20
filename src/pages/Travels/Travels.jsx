import React, { useEffect, useState } from "react";
import "./Travels.css";
// Import Icons
import { BsSearch } from "react-icons/bs";
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import { visits } from "../../utils/data";
import CardVisit from "../../components/Cards/CardVisit/CardVisit";
import Spinner from "../../components/Spinner/Spinner";
import { Link, useParams } from "react-router-dom";

const Travels = ({ token, URL,userOfLivre }) => {
  const param = useParams();
  const [catsNameApi, setCatsNameApi] = useState([]);
  // const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [eventsApi, setEventsApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category_ID, setCategory_ID] = useState(14);
  const [dataFromOneCat, setDataFromOneCat] = useState([]);

  // To Fetch Categories API
  useEffect(() => {
    const fetchDataFromAllCat = async () => {
      const response = await fetch(`${URL}/api/v1/events/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `${token}`,
        },
      });
      const newData = await response.json();
      setCatsNameApi(newData);
      setCategory_ID(param.id ? param.id : category_ID);
      setLoading(false);
    };

    fetchDataFromAllCat();
  }, [URL, category_ID, param.id, token]);
  // console.log("555", catsNameApi?.data?.categories[0]?.id);
  // To Fetch One Category API
  useEffect(() => {
    const fetchDataFromOneCat = async () => {
      const response = await fetch(
        `${URL}/api/v1/events/category/${param.id ? param.id : category_ID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${token}`,
          },
        }
      );
      const newData = await response.json();
      setDataFromOneCat(newData);
      setEventsApi(newData?.data?.events);
      setLoading(false);
      // setActiveCat(param.id)
      // setLoadingOneCat(false)
    };

    fetchDataFromOneCat();
  }, [URL, category_ID, param.id, token]);

  // To Search => API
  const handleSearch = (e) => {
    e.preventDefault();
    const raw = { searchText };
    fetch(`${URL}/api/v1/events/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
      body: JSON.stringify(raw),
    })
      .then((res) => res.json())
      .then((data) => {
        // setSearch(data);
        setEventsApi(data?.data?.events);
      });
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="travels-section">
          <div className="travels-container container">
            {/* ========= Start Search Section ========== */}
            <div className="travels-search-div flex-center">
              <div className="search-div">
                <div className="search-div-item">
                  <input
                    type="text"
                    placeholder="ابحث عن أي مدينة تريد"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <span>
                    <BsSearch />
                  </span>
                </div>
                <button className="btn btn-search" onClick={handleSearch}>
                  بحث
                </button>
              </div>
            </div>
            {/* =========== Start Filters =========== */}
            <div className="travels-filters">
              <div className="filter-btns">
                {catsNameApi?.data?.categories?.map((item, index) => (
                  <Link
                    key={index}
                    className={`btn-blue`}
                    to={`/travels/${item?.id}`}
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
            {/* ============== Start Cards ============== */}
            <>
              {loading ? (
                <Spinner />
              ) : (
                <div className="cards-travels-div">
                  {eventsApi?.map((item, index) => (
                    <CardTravel item={item} key={index} token={token} userOfLivre={userOfLivre}/>
                  ))}
                  {visits?.slice(0, 1)?.map((item, index) => (
                    <CardVisit item={item} key={index} type="w-50" />
                  ))}
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Travels;