import { Navigate } from "react-router-dom"


const ProtectLogin = ({children}) => {
    const authent = localStorage.getItem("token")

    if(authent){
    return <Navigate to="/home"/>
    }
  return children

 
  
}

export default ProtectLogin