import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory } from "react-router-dom";
import StudentDashboard from "../Student/StudentDashboard";

import { useCookies } from "react-cookie";
const Login = ({ setLoginUser }) => {
  const [_, setCookies] = useCookies(["access_token"]);
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("email", user.email);
  };

  const login = () => {
    axios.post("/login", user).then((res) => {
      alert(res.data.message);

      console.log(res);
      setCookies("access_token", res.data.token);
      setLoginUser(res.data.user);
      if (res.data.user.usertype === "admin") {
        history.push("/admin");
      } else if (res.data.user.usertype === "company") {
        history.push("/oncompany");
      } else {
        history.push({
          pathname: "/StudentDashboard",
          state: { d: res.data.user },
        });
      }
    });
  };

  return (
    <div className="login">
      {console.log("user", user)}
      <h1>Welcome Back :)</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Your Password"
        onChange={handleChange}
      ></input>
      <div
        className="button"
        onClick={(e) => {
          login();
          handleLogin(e);
        }}
      >
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
