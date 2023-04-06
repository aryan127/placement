import React, { useState } from "react"
import axios from "axios"
import "./Login.css"
import { useHistory } from "react-router-dom"

const Login =({setLoginUser})=>{

    const history = useHistory()

    const [user ,setUser]=useState({
        email:"",
        password:""
        
    })
    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            console.log(res.data.user)
            setLoginUser(res.data.user)
            if(res.data.user.usertype==="admin"){
                history.push("/admin")
            }else{
                history.push("/")
            }
        })
    }



    return (
        <div className="login">
            {console.log("user",user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login