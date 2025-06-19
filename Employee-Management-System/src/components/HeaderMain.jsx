import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"

const HeaderMain = ({ isloggedin, setIsLogedin }) => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setIsLogedin(false)
    localStorage.setItem("isloggedin", JSON.stringify(false))
    toast.success("Logged Out Successfully")
    navigate("/")
    setMenuOpen(false) // Close mobile menu on logout
  }

  return (
    <nav className="bg-white shadow-md fixed z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
  
        <Link to="/" className="text-2xl font-bold text-blue-600" onClick={() => setMenuOpen(false)}>
          MyCompany
        </Link>

    
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

      
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`${pathname == "/" ? "text-blue-600" :"text-gray-700" }  transition`}>Home</Link>
          <Link to="/service" className={`${pathname == "/service" ? "text-blue-600" :"text-gray-700" }  transition`}>Services</Link>
          {isloggedin && (
            <Link to="/employees" className={`${pathname == "/employees" ? "text-blue-600" :"text-gray-700" }  transition`}>Employees</Link>
          )}
          {isloggedin ? (
            <button
              onClick={handleClick}
              className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
              className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600"
            >
              Login
            </button>
          )}
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Services</Link>
          {isloggedin && (
            <Link to="/employees" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Employees</Link>
          )}
          {isloggedin ? (
            <button
              onClick={handleClick}
              className="w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
              className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default HeaderMain
