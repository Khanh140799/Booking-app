import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../usecontext/authcontext";


const SignIn=()=>{
    const [userlogin,setUserlogin]=useState(
        {
            username:undefined,
            password:undefined,
        }
    )
    const handleChange=(e)=>{
        setUserlogin((prev)=>(
            {
                ...prev,
                [e.target.id]:e.target.value
            }
        ))
    }
    const navigate=useNavigate()
    const {user,loading,error,dispatch}=useContext(AuthContext)
    const handleClick=async (e) =>{
        e.preventDefault();
        dispatch({type:"login_start"})
        try{
            const res= await axios.post("http://localhost:3001/api/auth/login",userlogin)
            dispatch({type:"login_success",payload:res.data})
            console.log(res.data)
            navigate("/")
        }catch(err){
            dispatch({type:"login_fail",payload:err.response.data})
        }
    }
    console.log(error);
    return(
        <div className="sign_in_contain">
            <div className="username">
                <div className="username_text">
                    Username
                </div>
                <input classname="username_input"
                id="username"
                onChange={handleChange}/>
            </div>
            <div className="password">
                <div className="password_text">
                    Password
                </div>
                <input classname="password_input"
                id="password"
                onChange={handleChange}
                type="password"/>
            </div>
            <button className="login_btn"
            onClick={handleClick}  
            >Login</button>
            {error&&
            <div>{error}</div>}
        </div>
    )
}

export default SignIn;