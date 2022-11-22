import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

const navProfile = [
  {
    title: "حسابك",
    path: "/profile",
    icon: <AiOutlineUser />,
  },
  {
    title: "التذاكر",
    path: "/tickets",
    icon: <IoTicketOutline />,
  },
  {
    title: "المحفوظات",
    path: "/favourite",
    icon: <BsBookmark />,
  },
];

// MdLogout

const Dropdown = () => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <ul onClick={() => setDrop(!drop)} className="dropdown-main">
        {navProfile.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={() => setDrop(!drop)} >
              <span className="flex-center">{item.icon}</span> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
