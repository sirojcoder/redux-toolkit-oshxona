import { Navigate, Outlet } from "react-router-dom"
import Navbar from "./Conponents/Navbar"
import Footer from "./Conponents/Footer"

function App() {
  let isAuth = localStorage.getItem("isAuth")
  console.log(isAuth);
  
  if(isAuth){
    return (
 
      <div>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
        
      )
    }else{
      return <Navigate to={'/login'}/>
    }
  }

  

export default App
