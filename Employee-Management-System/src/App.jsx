import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Service from "./page/Service"
import HeaderMain from "./components/HeaderMain"
import Login from "./page/login"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"

const App = () => {
    const [isloggedin,setIsLogedin] = useState(false)

    useEffect(() => {
        let loginStatus =  JSON.parse(localStorage.getItem("isloggedin")) || false
        setIsLogedin(loginStatus)
    },[])
    console.log(isloggedin);
    
    return (
        <BrowserRouter>
        <HeaderMain/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/login" element={<Login setIsLogedin={setIsLogedin}/>}/>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
        
    )
}

export default App