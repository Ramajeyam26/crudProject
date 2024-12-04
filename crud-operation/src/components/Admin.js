import React, { useEffect, useState } from "react";
import axios from "axios";
import {  MdDelete } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";


export default function Admin() {
  const [users, setUsers] = useState([]);
  const [serialNumber, setSerialNumber] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3005/main-api/all/user");
      if (res) {
        console.log(JSON.stringify(res.data.data));

        setUsers(res.data.data);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteUser = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:3005/fourth/`+id);
      if (result.status === 200) {
        console.log(result);
        // alert("Delete successfully");
      } else {
        console.log(result);
        alert("Delete unsuccessfully");
      }
    } catch (error) {
      console.log(error);
    }

    fetchData();
    // alert(id)
  };

  return (
    <>
      <div className="home-header">
        <h2>Admin</h2>
      </div>
      <div className="table-parent">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index} >
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                <td>
                  <MdDelete
                    className="option-delete"
                    onClick={() => DeleteUser(item._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
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
