import React from "react";
import CardTicket from "../../components/Cards/CardTicket/CardTicket";
import "./Tickets.css";
const Tickets = () => {
  return (
    <div className="tickets-section">
      <div className="tickets-container container">
        <h2>التذاكر</h2>
        <div className="tickets-cards">
            <CardTicket/>
            <CardTicket/>
            <CardTicket/>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
