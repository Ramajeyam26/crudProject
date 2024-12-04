import React, { useEffect, useState } from "react";
import "../App.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdEdit, MdDelete } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const param = useParams();
  const id = param.id;
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    console.log(id);
    FetchData();
  }, []);
  const FetchData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3005/main-api/crud/${id}`
      );
      if (result.data.message === "successfull") {
        setName(result.data.data.name);
        setAge(result.data.data.age);
        setEmail(result.data.data.email);
        setPassword(result.data.data.password);
        setPlace(result.data.data.place);
        setMobileNumber(result.data.data.mobileNumber);
        console.log(result);
      } else {
        alert("No data is occured");
        console.log(result);
      }
    } catch (error) {
      console.log(
        `Error has occured to fetching data in profile page ${error.message}`
      );
    }
  };

  const DeleteUser = async () => {
    try {
      const DeleteResult = await axios.delete(
        `http://localhost:3005/main-api/crud/${id}`
      );
      if (DeleteResult) {
        console.log(DeleteResult);
        navigate('/');
        alert("Deleted successfull");
      } else {
        console.log(DeleteResult);
        alert("Deleted unsuccessfull");
      }
    } catch (error) {
      console.log(error);
      alert("Error has occured in delete");
    }
  };
  const LogoutUser = () => {
    setEmail(" ");
    setAge(" ");
    setMobileNumber(" ");
    setName(" ");
    setPassword(" ");
    setPlace(" ");
 }
  return (
    <>
      <div className="home-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-container">
        <div className="profile-cont">
          <pre><FaUser /> : {name ? name: "Jhon"}</pre>
        </div>
        <div className="profile-cont">
          <pre><LuActivity /> : {age?age:"21"}</pre>
        </div>
        <div className="profile-cont">
          <pre><MdEmail /> : {email ? email:"jhon@gmail.com"}</pre>
        </div>
        <div className="profile-cont">
          <pre><RiLockPasswordFill /> : {password ? password: "123"}</pre>
        </div>
        <div className="profile-cont">
          <pre><FaLocationDot /> : {place ? place : "abc"}</pre>
        </div>
        <div className="profile-cont">
          <pre><FaPhoneAlt /> : {mobileNumber ? mobileNumber:"1234567890"}</pre>
        </div>
      </div>
      <div className="profile-option">
        <div className="">
          <button
            className="profile-option-icon"
            type="button"
            onClick={() => {
              navigate(`/editprofile/${id}`);
            }}
          >
            <div>
              <MdEdit className="edit-icon " />
            </div>
            <div>Edit </div>
          </button>
        </div>
        <div>
          <button className="profile-option-icon" onClick={()=>LogoutUser()}>
           <CiLogout className="delete-icon"/> Logout
          </button>
        </div>
        <div className="">
          <button className="profile-option-icon" onClick={DeleteUser}>
            <MdDelete className="delete-icon" /> Delete
          </button>
        </div>
      </div>
    </>
  );
}
