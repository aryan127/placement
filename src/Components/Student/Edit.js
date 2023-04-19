import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../Css/Edit.css";
import StudentDashboard from "../Student/StudentDashboard";
import Sidebar from "./Sidebar";

const Edit = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const profile = () => {
    const {
      firstname,
      lastname,
      city,
      address,
      email,
      phoneno,
      college,
      stream,
      dateofbirth,
      skill,
    } = user;

    if (
      firstname &&
      lastname &&
      city &&
      address &&
      email &&
      phoneno &&
      college &&
      stream &&
      dateofbirth &&
      skill
    ) {
      // alert("posted")
      // console.log(user);
      axios.put("http://localhost:9002/profile", user).then((res) => {
        alert(res.data.message);
        console.log(res, "this is edit");
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="profile">
        <div className="reg">
          {" "}
          <h1>Registration</h1>
        </div>
        <br />
        <form>
          <div className="left-side">
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                value={user.firstname}
                placeholder="Your First Name"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={user.lastname}
                placeholder="Your Last Name"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Address:
              <input
                type="textarea"
                name="address"
                value={user.address}
                placeholder="Your Address"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Your Email"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneno"
                value={user.phoneno}
                placeholder="Your Phone Number"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              College:
              <input
                type="text"
                name="college"
                value={user.college}
                placeholder="Your College Name"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="right-side">
            <label>
              City:
              <input
                type="text"
                name="city"
                value={user.city}
                placeholder="Your City Name"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Enter Skills:
              <input
                type="text"
                name="skill"
                value={user.skill}
                placeholder="Your Skills"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date Of Birth:
              <input
                type="text"
                name="dateofbirth"
                value={user.dateofbirth}
                placeholder="Your Date Of Birth"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Stream:
              <input
                type="text"
                name="stream"
                value={user.stream}
                placeholder="Your Stream"
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </form>
        <div className="button" type="submit" onClick={profile}>
          UPDATE
        </div>
      </div>
    </>
  );
};

export default Edit;
