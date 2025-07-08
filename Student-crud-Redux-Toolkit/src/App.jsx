import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addstudent from "./components/addstudent";
import Table from "./components/Table";
import Editstudent from "./components/EditStudent";



const App = () => {
 


  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Table/>} />
            <Route path="/add-student" element={<Addstudent/>} />
            <Route path="/edit-student/:id" element={<Editstudent/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App