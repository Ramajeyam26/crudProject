import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { FaRegUser, FaUser } from "react-icons/fa";
import { RiAdminLine, RiAdminFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

export default function Layout() {
  const iconStyle = {
    fontsize: "30px",
    // color:'black'
    margin: "10px",
  };

  const [show, setShow] = useState(true);
  const OptionShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="navbar">
        <div className="option-block">
          <SlOptionsVertical
            className="option-icon"
            onClick={() => OptionShow()}
          />
        </div>

        <div>
          <NavLink className="nav-link" to="/">
            <IoHomeOutline
              className="icon-style"
              style={show ? { display: "block" } : { display: "none" }}
            />
            <p className="page-tag">Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink className="nav-link" to="/profile/1a2b3c4d5f6e">
            <FaRegUser
              className="icon-style"
              style={show ? { display: "block" } : { display: "none" }}
            />
            <p className="page-tag">Profile</p>
          </NavLink>
        </div>
        <div>
          <NavLink className="nav-link" to="/admin-login">
            <RiAdminLine
              className="icon-style"
              style={show ? { display: "block" } : { display: "none" }}
            />
            <p className="page-tag">Admin</p>
          </NavLink>
        </div>
        {/* <div><NavLink className="nav-link" to="/logout"><TbLogout className='icon-style'/>Logout</NavLink></div> */}
      </div>
      <Outlet />
    </>
  );
}
