import React, { useEffect, useState } from 'react'
import './Css/Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [Email,Setemail] = useState("")
    const [password,Setpassword] = useState("")
    const Navigate = useNavigate();
    const handlelogin = async (e) => {
      e.preventDefault();
      if (Email == "" || password == "") {
        alert("Something is missing please check");
      } else {
        try {
          const res = await axios.post(
            "https://reqres.in/api/login",
            {
              email: Email,
              password: password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1",
              },
            }
          );
          
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            Navigate("/Home");
          } else {
            alert("Enter currect Email/Password");
          }
        } catch (error) {
          console.error(
            error.response ? error.response.data : error.message
          );
          alert("Login Errro,Try Again.");
        }
      }
   
      
    };
  return (
   <>
     <div id='LoginMainDiv'>
      <div className="container">
            <h2>Login</h2>
        
            <form id="loginForm" onSubmit={handlelogin}>
                <label htmlFor="username">Email</label>
                <input type="email" id="username"  required onChange={(e)=>{Setemail(e.target.value)}} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required onChange={(e)=>{Setpassword(e.target.value)}}/>
                <button type="submit"  >Login</button>
            </form>
      </div>
    </div> 
   </>
  )
}

export default Login