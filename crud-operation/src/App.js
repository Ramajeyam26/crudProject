import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import Layout from "./components/Layout.js";
import Admin from "./components/Admin.js";
import Registration from "./components/Registration.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import EditProfile from "./components/EditProfile.js";
import AdminLogin from "./components/AdminLogin.js";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item1">
          <h1>Simple CRUD Operation</h1>
        </div>
        <div className="grid-item2">
          <Layout />
        </div>
        <div className="grid-item3">
          <div className="item3-box">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              {/* </Route> */}
              <Route path="/profile/:id" element={<Profile />} />
                <Route path="/editprofile/:id" element={<EditProfile />} />
              {/* </Route> */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
