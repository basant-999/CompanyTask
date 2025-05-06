import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import "./Css/Home.css"

const Home = () => {
    const navigate = useNavigate()

    
   const handlelogout=()=>{
    localStorage.clear()
    navigate("/")
   }

  return (
   <>
        <div id='top'>
                Welcome to Home page
            </div>
            <div id='second'>
                <h1></h1>
                <button onClick={handlelogout}>logout</button>
            </div>
        <div id='dashboardherosection'>
              <section id='feilds'>
                <button id='dashBtn' onClick={()=>{navigate("Add")}}  >Add product</button>  <br /> <br />
                <button id='dashBtn' onClick={()=>{navigate("search")}} >Search</button> <br /> <br />
                <button id='dashBtn' onClick={()=>{navigate("Display")}}>Product Display</button>
                </section>
                    <section id='outletmanage'>
                      <div>
                        <Outlet/>
                      </div>
                       
                        
                    </section>
       </div>

   </>
  )
}

export default Home