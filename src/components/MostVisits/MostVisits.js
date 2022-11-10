import React from "react";
import { visits } from "../../utils/data";
import CardVisit from "../Cards/CardVisit/CardVisit";
// Import CSS
import "./MostVisits.css";
// Import Images
import searchImage from "../../assets/search.png";
// Import Icons
import { BsSearch } from "react-icons/bs";

export default function MostVisits() {
  return (
    <section className="flex-center mostVisits-section">
      <div className="container mostVisits-container">
        <h2>أكثر الأماكن زيارة . . . . </h2>
        <div className="mostVisits-cards-div">
          {visits.map((item, index) => (
            <CardVisit item={item} key={index} />
          ))}
        </div>
        <div className="searchImage-div">
          <img src={searchImage} alt="searchImage" loading="lazy"/>
          <div className="searchImage-content flex-center">
            <div>
              <h2>أو قم بالبحث عن أي موقع تريده</h2>
              <div className="search-div">
                <div className="search-div-item">
                  <input type="text" placeholder="ابحث عن أي مدينة تريد" />
                  <span >
                    <BsSearch />
                  </span>
                </div>
                <button className="btn btn-search">بحث</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
