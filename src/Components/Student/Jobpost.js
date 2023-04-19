import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Jobpost.css";
import Sidebar from "./Sidebar";

const Jobpost = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9002/companydata").then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <h1>Companies : </h1>
      <div className="grid">
        {mydata.slice(0, 9).map((post) => {
          const { companyname, address, city, state, zipcode } = post;
          return (
            <div className="card">
              <h2>{companyname}</h2>
              <p>{address}</p>
              <p>{city}</p>
              <p>{state}</p>
              <p>{zipcode}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobpost;
