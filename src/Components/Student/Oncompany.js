import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Oncompany.css";
import { useCookies } from "react-cookie";

const Oncompany = () => {
  const history = useHistory();
  const [file, setFile] = useState(0);
  const [pdffile, setPdffile] = useState(0);
  const [filejd, setFilejd] = useState(0);
  const [pdffilejd, setPdffilejd] = useState(0);
  const [cookies, _] = useCookies(["access_token"]);

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitform = () => {
    const { companyname, address, city, state, zipcode, companylink } = user;

    if (companyname && address && city && state && zipcode && companylink) {
      // alert("posted")

      console.log(user, "file");
      axios
        .post("/company", user, {
          headers: { authorization: cookies.access_token },
        })
        .then((res) => {
          alert(res.data.message);
          console.log(res);
        });
    } else {
      alert("Invalid Input ");
    }
  };

  const handleFile = (event) => {
    console.log(event.target.files[0]);
    setFile(1);
    var reader = new FileReader();
    var file = document.getElementById("companyjaf").files[0];
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log("loader");
      setPdffile(reader.result);
      setUser({
        ...user,
        ["companyjaf"]: reader.result,
      });
      console.log(reader.result);
    };
  };
  const handleFilejd = (event) => {
    console.log(event.target.files[0]);
    setFilejd(1);
    var reader = new FileReader();
    var file = document.getElementById("companyjd").files[0];
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log("loader");
      setPdffilejd(reader.result);
      setUser({
        ...user,
        ["companyjd"]: reader.result,
      });
      console.log(reader.result);
    };
  };
  return (
    <>
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
          <label htmlFor="companyemail" className="form-label">
            Email ID:
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email ID"
            onChange={handleChange}
            id="email"
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
          <label htmlFor="companylink" className="form-label">
            Comapny Link:
          </label>
          <input
            type="text"
            name="companylink"
            value={user.companylink}
            placeholder="Company LINK"
            onChange={handleChange}
            id="companylink"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyjaf" className="form-label">
            Company JAF:
          </label>
          <input
            type="file"
            name="companyjaf"
            id="companyjaf"
            className="form-input"
            onChange={handleFile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyjd" className="form-label">
            Company JD:
          </label>
          <input
            type="file"
            name="companyjd"
            id="companyjd"
            className="form-input"
            onChange={handleFilejd}
          />
        </div>
        <div type="submit" className="form-button" onClick={submitform}>
          Submit
        </div>
        <div
          type="submit"
          className="form-button"
          onClick={() => history.push("/login")}
        >
          LogOut
        </div>
      </form>
    </>
  );
};
export default Oncompany;
