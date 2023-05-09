import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Jobpost.css";
import Sidebar from "./Sidebar";
import { Buffer } from "buffer";
import { useCookies } from "react-cookie";

const Jobpost = () => {
  const [mydata, setMydata] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);

  useEffect(() => {
    axios
      .get("/companydata", {
        headers: { authorization: cookies.access_token },
      })
      .then((res) => {
        setMydata(res.data);
        console.log(res.data);
      });
  }, []);

  const handeldownloadjaf = (e) => {
    var jaf = mydata[parseInt(e.target.id)].companyjaf;
    console.log(jaf);
    const link = Buffer.from(jaf).toString();
    const dlink = document.createElement("a");
    const file = "abc.pdf";
    dlink.href = link;
    dlink.download = file;
    dlink.click();
  };
  const handeldownloadjd = (e) => {
    var jd = mydata[parseInt(e.target.id)].companyjd;
    console.log(jd);
    const link = Buffer.from(jd).toString();
    const dlink = document.createElement("a");
    const file = "abc.pdf";
    dlink.href = link;
    dlink.download = file;
    dlink.click();
  };

  return (
    <div className="job">
      <Sidebar />
      <h1>COMPANIES</h1>
      <div className="grid">
        {mydata.slice(0, 1000).map((post, index) => {
          const {
            companyname,
            email,
            address,
            city,
            state,
            zipcode,
            companylink,
            companyjaf,
          } = post;
          return (
            <div className="card">
              <h2>Company Name : {companyname}</h2>
              <h3>Address : {address}</h3>
              <h3>City : {city}</h3>
              <h3>State : {state}</h3>
              <h3>Zipcode : {zipcode}</h3>
              <h3>Email ID : {email}</h3>

              <a href={companylink} target="_blank" rel="noopener noreferrer">
                <div className="button1">VIEW</div>
              </a>
              <div className="download" id={index} onClick={handeldownloadjaf}>
                Download JAF
              </div>
              <div className="download" id={index} onClick={handeldownloadjd}>
                Download JD
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobpost;
