import React, { useEffect, useState } from "react";
import "./Travels.css";
// Import Icons
import { BsSearch } from "react-icons/bs";
import CardTravel from "../../components/Cards/CardTravel/CardTravel";
import { travelsData, visits } from "../../utils/data";
import CardVisit from "../../components/Cards/CardVisit/CardVisit";
// Names of Filters Buttons
const CatsNames = [
  "شواطئ",
  "الصحراء والبر",
  "واحات",
  "ملاهي",
  "متاحف",
  "أماكن أثرية",
];

const Travels = () => {
  const [category, setCategory] = useState();
  const [activeFilter, setActiveFilter] = useState("All Categories");

  useEffect(() => {
    setCategory(travelsData);
  }, []);

  const filterResult = (cartItem) => {
    const result = travelsData?.filter((curData) => {
      return curData.cats.includes(cartItem);
    });
    setCategory(result);
    setActiveFilter(cartItem);
  };
  return (
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
            <button
              className={`btn-blue ${
                activeFilter === "All Categories" ? "btn-blue-active" : ""
              }`}
              onClick={() => {
                setCategory(travelsData);
                setActiveFilter("All Categories");
              }}
            >
              كل الرحلات
            </button>

            {CatsNames?.map((item, index) => (
              <button
                key={index}
                className={`btn-blue ${
                  activeFilter === `${item}` ? "btn-blue-active" : ""
                }`}
                onClick={() => filterResult(`${item}`)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* ============== Start Cards ============== */}
        <div className="cards-travels-div">
          {category?.map((item, index) => (
            <CardTravel item={item} key={index} />
          ))}
          {visits?.slice(0, 1)?.map((item, index) => (
            <CardVisit item={item} key={index} type="w-50" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travels;
