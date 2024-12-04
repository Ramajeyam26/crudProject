import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Registration() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(" ");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState(" ");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("age", age);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("place", location);
    formdata.append("mobileNumber", mobileNumber);

    const data = {
      name: name,
      age: age,
      email: email,
      password: password,
      place: location,
      mobileNumber: mobileNumber,
    };

    await axios
      .post(`http://localhost:3005/main-api/crud-post`, data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });

    SendId(email, password);
    setName("");
    setAge(" ");
    setEmail("");
    setLocation("");
    setPassword("");
    setMobileNumber(" ");
  };

  const SendId = async (email, password) => {
    // const mail = email;
    // alert(email)
    try {
      const res = await axios.get(
        `http://localhost:3005/third-api/crud-three-get?email=${email}`
      );
      console.log(res);
      if (res.data.message === "successfull") {
        navigate(`/profile/${res.data.data._id}`);
      } else {
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="home-header">
        <h2>Registration</h2>
      </div>
      <form onSubmit={Register}>
        <div className="form-container">
          <div className="row">
            <div className="col-1">Name:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="text"
                placeholder="e.g.Jhon"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">Age:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="number"
                placeholder="e.g.21"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">Email:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="email"
                placeholder="e.g.jhon@gmail.com"
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
          <div className="row">
            <div className="col-1">Place:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="text"
                placeholder="e.g.abc"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">MobileNumber:</div>
            <div className="col-2">
              <input
                className="input-box"
                type="number"
                placeholder="e.g.1234567890"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                // pattern="^\d{10}$"
                title="enter only 10 digits"
              />
            </div>
          </div>
        </div>
        <div className="register-button">
          <button type="submit">Register</button>
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
