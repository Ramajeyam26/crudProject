import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3005/second-api/get/${id}`
      );
      if (result) {
        console.log(result);
        setName(result.data.data.name);
        setAge(result.data.data.age);
        setEmail(result.data.data.email);
        setPassword(result.data.data.password);
        setPlace(result.data.data.place);
        setMobileNumber(result.data.data.mobileNumber);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const UpdateUser = async (e) => {
    e.preventDefault();
    try {
      const UpdateResult = await axios.put(
        `http://localhost:3005/main-api/crud/${id}`,
        {
          name: name,
          age: age,
          email: email,
          password: password,
          place: place,
          mobileNumber: mobileNumber,
        }
      );
      if (UpdateResult.status==200) {
        console.log(UpdateResult);
        alert("Updated successfull");
      } else {
        console.log(UpdateResult);
        alert("Updated Unsuccessfull");
      }
      console.log(UpdateResult);
    } catch (error) {
      console.log(error);
      alert("Error has occured");
    }
    FetchData();
  };
  return (
    <>
      <div className="home-header">
        <h2>Edit Profile</h2>
      </div>
      <form onSubmit={UpdateUser}>
        <div className="form-container">
          <div className="row">
            <div className="col-1">Name :</div>
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
            <div className="col-1">Age :</div>
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
            <div className="col-1">Email :</div>
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
            <div className="col-1">Password :</div>
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
            <div className="col-1">Place :</div>
            <div className="col-2">
              <input
                className="input-box"
                type="text"
                placeholder="e.g.abc"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1">Mobile Number :</div>
            <div className="col-2">
              <input
                className="input-box"
                type="number"
                placeholder="e.g.1234567890"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="register-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
