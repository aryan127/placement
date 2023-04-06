import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from "react-router-dom"

import { useState } from 'react';
import Admin from './Components/Admin/Admin';

function App() {
   
  const [user,setLoginUser]=useState({
    name:"",
    email:"",
    password:"",
    usertype:""
  })

  return (
    <div className="App">
      {/* <Login/> */}
    <Router>
  <switch>
    <Route exact path="/">
      {
        user && user._id ? user.usertype==="admin" ? <Admin setLoginUser={setLoginUser}/> : <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
      }
    </Route>
    <Route exact path="/admin">
      <Admin/>
    </Route>
    <Route path="/login">
      <Login setLoginUser={setLoginUser}/>
    </Route>
    <Route path="/register">
      <Register setLoginUser={setLoginUser}/>
    </Route>
  </switch>
</Router>

  </div>
  );
}

export default App;
