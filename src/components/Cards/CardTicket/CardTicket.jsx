import React from 'react'
import "./CardTicket.css"
import camping from "../../../assets/camping.png"
import qr from "../../../assets/qr.png"
const CardTicket = () => {
  return (
    <div className='CardTicket'>
        <div className='CardTicket-img'>
            <img src={camping} className="ticket-img" alt="ticket" loading='lazy'/>
            <img src={qr} className="qr" alt="qr" loading='lazy'/>

        </div>
        <div className='CardTicket-content'>
            <h3 className='ticket-num'>ticket#1</h3>
            <h3 className='ticket-name'>Ahmed Ali</h3>
            <h4>نوفمبر/20</h4>
            <h4>عدد الأفراد 2</h4>
            <h4>هضبة كينتاماني</h4>
            <h4>بالي، اندونيسيا</h4>
        </div>
    </div>
  )
}

export default CardTicket