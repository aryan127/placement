import React from "react"
import Login from "../Login/Login"
import "./Admin.css"
import { useHistory } from "react-router-dom"

const Admin = ({setLoginUser}) => {
    const history = useHistory();

    return (
        <div className="admin">
            <h1>Hello Admin</h1>
            <div className="button" onClick={() => history.push('/login')} >Logout</div>
        </div>
    )
}

export default Admin