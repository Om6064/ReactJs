import { createContext, useState } from "react"
import Navbar from "./components/Navbar"

export const AppContext = createContext()
const App = () => {

    console.log(AppContext);
    

    const [user,setUser] = useState({name: "John Doe"})

    const handleLogout = () => {
        setUser(null)
    }


    return (
        <AppContext.Provider value={{user,handleLogout}}>
            <Navbar/>
        </AppContext.Provider>
    )
}

export default App