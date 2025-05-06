
import Home from './Home'

import Login from './Login'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import AddProduct from './pages/AddProduct'
import Display from './pages/Display'
import Search from './pages/Search'
import ProtectedRoute from './ProtectedRoute'
import ProtectLogin from './ProtectLogin'

function App() {
  
  

  return (
    <>
     <BrowserRouter>
            <Routes>

                <Route path="/" element={ <ProtectLogin> <Login/> </ProtectLogin>}/>

                <Route  path="home" element={ <ProtectedRoute>  <Home/> </ProtectedRoute>}>
                    <Route path="Add" element={<AddProduct/>}/>
                    <Route path='search' element={<Search/>}/>
                    <Route path='Display' element={<Display/>}/>
                </Route> 

            </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
