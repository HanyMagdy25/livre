import React, { useEffect, useState } from "react";
import "./Travels.css";
// Import Icons
import { BsSearch } from "react-icons/bs";
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import { visits } from "../../utils/data";
import CardVisit from "../../components/Cards/CardVisit/CardVisit";
import Spinner from "../../components/Spinner/Spinner";
import { Link, useParams } from "react-router-dom";

const Travels = ({ token }) => {
  const param = useParams();
  const [catsNameApi, setCatsNameApi] = useState([]);
  const [eventsApi, setEventsApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category_ID, setCategory_ID] = useState(14);
  const [dataFromOneCat, setDataFromOneCat] = useState([]);

  // To Fetch Categories API
  useEffect(() => {
    const fetchDataFromAllCat = async () => {
      const response = await fetch(
        `https://livre.softwarecloud2.com/api/v1/events/categories`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": `${token}`,
          },
        }
      );
      const newData = await response.json();
      setCatsNameApi(newData);
      setCategory_ID(param.id ? param.id : category_ID);
      setLoading(false);
    };

    fetchDataFromAllCat();
  }, [category_ID, param.id, token]);
  // console.log("555", catsNameApi?.data?.categories[0]?.id);
  // To Fetch One Category API
  useEffect(() => {
    const fetchDataFromOneCat = async () => {
      const response = await fetch(
        `https://livre.softwarecloud2.com/api/v1/events/category/${
          param.id ? param.id : category_ID
        }`,
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
  }, [category_ID, param.id, token]);
  // console.log("000 dataFromOneCat", dataFromOneCat);
  // console.log("eventsApi", eventsApi);

  // console.log("category_ID", category_ID);
  // To Fetch Events API
  // useEffect(() => {
  //   fetch(`https://livre.softwarecloud2.com/api/v1/events/events`, {
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
  //       setEventsApi(data);
  //       setLoading(false);
  //     });
  // }, [token]);

  // useEffect(() => {
  //   setCategory(eventsApi?.data?.events);
  // }, []);

  // const filterResult = (cartItem) => {
  //   const result = travelsData?.filter((curData) => {
  //     return curData.cats.includes(cartItem);
  //   });
  //   setCategory(result);
  //   setActiveFilter(cartItem);
  // };

  // console.log("Events: ", eventsApi);
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
                  <input type="text" placeholder="ابحث عن أي مدينة تريد" />
                  <span>
                    <BsSearch />
                  </span>
                </div>
                <button className="btn btn-search">بحث</button>
              </div>
            </div>
            {/* =========== Start Filters =========== */}
            <div className="travels-filters">
              <div className="filter-btns">
                {/* <button
                  className={`btn-blue ${
                    activeFilter === "All Categories" ? "btn-blue-active" : ""
                  }`}
                  onClick={() => {
                    setCategory(travelsData);
                    setActiveFilter("All Categories");
                  }}
                >
                  كل الرحلات
                </button> */}

                {catsNameApi?.data?.categories?.map((item, index) => (
                  <Link
                    key={index}
                    className={`btn-blue`}
                    to={`/travels/${item?.id}`}
                  >
                    {item?.title}
                  </Link>

                  // <button
                  //
                  //   className={`btn-blue ${
                  //     activeFilter === `${item?.title}` ? "btn-blue-active" : ""
                  //   }`}
                  //   onClick={() => filterResult(`${item.title}`)}
                  // >
                  //
                  // </button>
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
                    <CardTravel item={item} key={index} />
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
