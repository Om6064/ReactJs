import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./COMPONENTS/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Sarvice from "./pages/Sarvice"
import Contect from "./pages/Contect"

const App = () => {
  return (

    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/sarvice"} element={<Sarvice/>} />
          <Route path={"/contect"} element={<Contect/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App