import React from "react";
import "./Travels.css";
// Import Icons
import { BsSearch } from "react-icons/bs";
// Names of Filters Buttons
const CatsNames = [
  "شواطئ",
  "الصحراء والبر",
  "واحات",
  "ملاهي",
  "متاحف",
  "أماكن أثرية"
];

const Travels = () => {

    // const filterResult = (cartItem) => {
    //     const result = productsFetch?.products?.filter((curData) => {
    //       return curData.cat.includes(cartItem);
    //     });
    //     setCategory(result);
    //     setActiveFilter(cartItem);
    //   };
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
            //   className={`btn-blue ${
            //     activeFilter === "All Categories" ? "btn-blue-active" : ""
            //   }`}
            //   onClick={() => {
            //     setCategory(productsFetch?.products);
            //     setActiveFilter("All Categories");
            //   }}
            >
              كل الرحلات
            </button>

            {CatsNames?.map((item, index) => (
              <button
                key={index}
                // className={`btn-blue ${
                //   activeFilter === `${item}` ? "btn-blue-active" : ""
                // }`}
                // onClick={() => filterResult(`${item}`)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travels;
