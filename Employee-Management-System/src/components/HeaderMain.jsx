import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const HeaderMain = ({ isloggedin, setIsLogedin }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        setIsLogedin(false)
        localStorage.setItem("isloggedin", JSON.stringify(false))
        toast.success("Logged Out SuccesFully");
        navigate("/")
    }
    return (
        <nav className="bg-white shadow-md  w-full">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">MyCompany</Link>
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                    <Link to="/service" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
                    {isloggedin && <Link to="/employees" className="text-gray-700 hover:text-blue-600 transition">Employees</Link>}
                    {isloggedin ? (
                        <button onClick={handleClick} className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600">Logout</button>
                    ) : (
                        <button onClick={() => navigate("/login")} className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600">Login</button>
                    )}
                </div>
            </div>
        </nav>



    )
}

export default HeaderMain