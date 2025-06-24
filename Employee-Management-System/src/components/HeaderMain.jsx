import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"

const HeaderMain = ({ isloggedin, setIsLogedin }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setIsLogedin(false)
    localStorage.setItem("isloggedin", JSON.stringify(false))
    toast.success("Logged Out Successfully")
    navigate("/")
    setMenuOpen(false)
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg fixed z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300 flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold text-lg">M</span>
          </div>
          <span>MyCompany</span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg p-2 transition-colors duration-200"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${pathname === "/" ? "text-white font-semibold border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-all duration-300 pb-1`}>Home</Link>
          <Link to="/service" className={`${pathname === "/service" ? "text-white font-semibold border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-all duration-300 pb-1`}>Services</Link>
          {isloggedin && (
            <Link to="/employees" className={`${pathname === "/employees" || pathname === "/add-employee" || pathname.includes("/edit-employee") ? "text-white font-semibold border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-all duration-300 pb-1`}>Employees</Link>
          )}
          {isloggedin ? (
            <button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
              className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-900/90 backdrop-blur-sm mx-4 mb-4 rounded-lg">
          <div className="space-y-3 pt-4 text-white">
            <Link to="/" onClick={() => setMenuOpen(false)} className={`block py-2 px-3 rounded-lg transition-all duration-200 ${pathname === "/" ? "bg-gray-800 text-white font-semibold" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}>Home</Link>
            <Link to="/service" onClick={() => setMenuOpen(false)} className={`block py-2 px-3 rounded-lg transition-all duration-200 ${pathname === "/service" ? "bg-gray-800 text-white font-semibold" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}>Services</Link>
            {isloggedin && (
              <Link to="/employees" onClick={() => setMenuOpen(false)} className={`block py-2 px-3 rounded-lg transition-all duration-200 ${pathname === "/employees" ? "bg-gray-800 text-white font-semibold" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}>Employees</Link>
            )}
            <div className="pt-2 border-t border-gray-700">
              {isloggedin ? (
                <button
                  onClick={handleClick}
                  className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-all duration-200"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => { navigate("/login"); setMenuOpen(false); }}
                  className="w-full text-left bg-white text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default HeaderMain
