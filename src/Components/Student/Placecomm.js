import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/placecomm.css";
import Sidebar from "./Sidebar";

const Placecomm = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitform = () => {
    const { companyname, address, city, state, zipcode } = user;

    if (companyname && address && city && state && zipcode) {
      // alert("posted")
      axios.post("http://localhost:9002/company", user).then((res) => {
        alert(res.data.message);
        console.log(res);
      });
    } else {
      alert("Invalid Input ");
    }
  };

  return (
    <>
      <Sidebar />
      <form className="form-container">
        <h1>Add Company Deatails</h1>
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            type="text"
            name="companyname"
            value={user.companyname}
            placeholder="Company Name"
            onChange={handleChange}
            id="companyName"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyAddress" className="form-label">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={user.address}
            placeholder="Comapany Address"
            onChange={handleChange}
            id="companyAddress"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyCity" className="form-label">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={user.city}
            placeholder="City Name"
            onChange={handleChange}
            id="companyCity"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyState" className="form-label">
            State:
          </label>
          <input
            type="text"
            name="state"
            value={user.state}
            placeholder="State Name"
            onChange={handleChange}
            id="companyState"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyZip" className="form-label">
            Zip Code:
          </label>
          <input
            type="text"
            name="zipcode"
            value={user.zipcode}
            placeholder="Zipcode"
            onChange={handleChange}
            id="companyZip"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyjaf" className="form-label">
            Company JAF:
          </label>
          <input type="file" id="companyjaf" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="companyjd" className="form-label">
            Company JD:
          </label>
          <input type="file" id="companyjd" className="form-input" />
        </div>
        <div type="submit" className="form-button" onClick={submitform}>
          Submit
        </div>
      </form>
    </>
  );
};

export default Placecomm;
