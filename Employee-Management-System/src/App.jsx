import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Service from "./page/Service"
import HeaderMain from "./components/HeaderMain"
import Login from "./page/login"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import 'remixicon/fonts/remixicon.css'
import ProtectedRouter from "./components/ProtectedRouter"
import Employees from "./page/Employees"
import AddEmployee from "./page/AddEmployee"

const App = () => {
    const [isloggedin, setIsLogedin] = useState(false)


    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isloggedin")) || false
        setIsLogedin(loginStatus)
    }, [])
    console.log(isloggedin);

    return (
        <BrowserRouter>
            <HeaderMain isloggedin={isloggedin} setIsLogedin={setIsLogedin} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/login" element={<Login setIsLogedin={setIsLogedin} />} />
                <Route path="/employees" element={<ProtectedRouter isloggedin={isloggedin} Component={Employees} />} />
                <Route path="/add-employee" element={<ProtectedRouter isloggedin={isloggedin} Component={AddEmployee} />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>

    )
}

export default App