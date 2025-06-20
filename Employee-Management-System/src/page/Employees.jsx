import { useNavigate } from "react-router-dom"
import EmployeeTable from "../components/EmployeeTable"
import { useEffect, useState } from "react";

const Employees = () => {
    const [employees, SetEmployees] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let employeeDetails = JSON.parse(localStorage.getItem("employees")) || []
        SetEmployees(employeeDetails)
    }, [])
    console.log(employees);

    const onDelete = (id) => {
        const updatedList = employees.filter(emp => emp.id !== id);
        SetEmployees(updatedList);
        localStorage.setItem("employees", JSON.stringify(updatedList));
    }



    return (
        <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -translate-x-32 translate-y-32"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div>
                        <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                            Employee Directory
                        </h4>
                        <p className="text-gray-600">Manage your team members and their information</p>
                    </div>

                    <button
                        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                        onClick={() => {
                            navigate("/add-employee")
                        }}
                    >
                        <span className="text-lg">+</span>
                        <span>Add Employee</span>
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {employees.length > 0 ? (
                        <EmployeeTable employees={employees} onDelete={onDelete} />
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-6">👥</div>
                            <h1 className="text-3xl font-bold text-gray-700 mb-4">No Employees Found</h1>
                            <p className="text-gray-500 mb-8">Start building your team by adding your first employee</p>
                            <button
                                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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