import { useNavigate } from "react-router-dom"
import EmployeeTable from "../components/EmployeeTable"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Employees = () => {
    const [employees, SetEmployees] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let employeeDetails = JSON.parse(localStorage.getItem("employees")) || []
        SetEmployees(employeeDetails)
    }, [])

    const onDelete = (id) => {
        const updatedList = employees.filter(emp => emp.id !== id);
        SetEmployees(updatedList);
        localStorage.setItem("employees", JSON.stringify(updatedList));
        toast.success("Employee Deleted Successfully")
    }

    return (
        <div className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen relative overflow-hidden text-gray-100">
            {/* Decorative blur circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-32 translate-y-32"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div>
                        <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
                            Employee Directory
                        </h4>
                        <p className="text-gray-400">Manage your team members and their information</p>
                    </div>

                    <button
                        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-900 transform hover:-translate-y-1 flex items-center space-x-2"
                        onClick={() => navigate("/add-employee")}
                    >
                        <span className="text-lg">+</span>
                        <span>Add Employee</span>
                    </button>
                </div>

                <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
                    {employees.length > 0 ? (
                        <EmployeeTable employees={employees} onDelete={onDelete} />
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-6">👥</div>
                            <h1 className="text-3xl font-bold text-gray-100 mb-4">No Employees Found</h1>
                            <p className="text-gray-400 mb-8">Start building your team by adding your first employee</p>
                            <button
                                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-900 transform hover:-translate-y-1"
                                onClick={() => navigate("/add-employee")}
                            >
                                Add First Employee
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Employees
