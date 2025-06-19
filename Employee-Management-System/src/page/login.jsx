import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = ({ setIsLogedin }) => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email == "admin@gmail.com" && input.password == "admin@123") {
            toast.success("Logged In SuccesFully");
            setIsLogedin(true)
            localStorage.setItem("isloggedin", JSON.stringify(true))
            navigate("/employees")
        } else {
            toast.error("Email Or Password Should Be Match")
        }
        setInput({
            email: "",
            password: ""
        })

    }

    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transition-all duration-500">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Welcome Back 👋</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                onChange={handleChange}
                                required
                                className="w-full pl-10 p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                📧
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                onChange={handleChange}
                                required
                                className="w-full pl-10 p-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                🔒
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </section>


    )
}

export default Login