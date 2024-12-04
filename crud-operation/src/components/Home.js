import React, {  useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import axios from "axios";

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:3005/second-api/crud-two-get`).then((result) => {
      console.log(`number of users ${result.data.data}`)
      setCount(result.data.data);
    }).catch((err) => {
      console.log(`Error has occured in count number of users ${err.message}`);
    });
  },[count])
  return (
    <>
      <div className="home-header">
        <h1 >Welcome to CRUD operations App</h1>
      </div>
      <div className="home-links">
        <NavLink to="registration" className='home-link-one'>Registration</NavLink>
        <NavLink to="login" className='home-link-one'>Login</NavLink>
      </div>
      <div className="home-count-cont"><h4>Number of Users: {count}</h4></div>
      {/* <Outlet /> */}
    </>
  );
}
