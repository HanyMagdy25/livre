import React, { useEffect, useState } from "react";
import CardTicket from "../../components/Cards/CardTicket/CardTicket";
import Spinner from "../../components/Spinner/Spinner";
import "./Tickets.css";
const Tickets = ({ token, URL ,userOfLivre}) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${URL}/api/v1/payment/payments/${userOfLivre?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTickets(data?.data?.payments);
        setLoading(false);
      });
    // setOneTravel(oneEvent?.data?.event);
  }, [URL, token, userOfLivre?.id]);
  console.log(tickets);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="tickets-section">
          <div className="tickets-container container">
            <h2>التذاكر</h2>
            {tickets.length === 0 ? (
              <div>لا يوجد تذاكر</div>
            ) : (
              <div className="tickets-cards">
                <CardTicket />
                <CardTicket />
                <CardTicket />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tickets;
