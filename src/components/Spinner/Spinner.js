import React from "react";
import logo from '../../assets/loading.png';
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner" style={{ width: "", textAlign: "center" }}>
     <img src={logo} width="400px" style={{margin : "80px 0px 20px" , maxWidth : "70vw"}} alt="spinner"/>
    </div>
  );
};

export default Spinner;
