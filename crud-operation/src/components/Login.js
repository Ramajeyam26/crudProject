import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    // console.log(`${email} ${password}`);
    axios
      .get(
        `http://localhost:3005/main-api/crud-get?email=${email}&&password=${password}`
      )
      .then((result) => {
        console.log(result.data.message);
        // alert(result.data.message);
        if (result.data.message === "successfull") {
          navigate(`/profile/${result.data.data._id}`);
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login failled");
      });
    // navigate('/profile');
  };
  return (
    <>
      <div className="home-header">
        <h2>Login</h2>
      </div>
      <form onSubmit={Login}>
        <div className="form-container">
          <div className="row">
            <div className="col-1">Email:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="email"
                placeholder="e.g.abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">Password:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="password"
                placeholder="e.g.123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="back-arrow">
        <button
          onClick={() => window.history.back()}
          className="profile-option-icon"
        >
          <BiArrowBack className="delete-icon" />
          Back
        </button>
      </div>
    </>
  );
}
