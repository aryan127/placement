import React from "react"
import "./Register.css"
import { useState } from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom';


const Register =({setLoginUser})=>{
    const history = useHistory()

    const [user ,setUser]=useState({})
    const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
        const {name,email,password ,reenterpassword,usertype} = user

        if(name && email && password  && password==reenterpassword && usertype){
            // alert("posted")
            axios.post("http://localhost:9002/register" , user).then(res=>console.log(res))
        }
        else{
            alert("Invalid Input    ")
        }

        
    }




    return (
        <div className="register">
            {console.log("user",user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reenterpassword" value={user.reenterpassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <input type="usertype" name="usertype" value={user.usertype} placeholder="User Type" onChange={ handleChange }></input>
            
            <div className="button"  onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
    </div>
    )
}

export default Register