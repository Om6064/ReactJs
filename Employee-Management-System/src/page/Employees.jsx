import { useNavigate } from "react-router-dom"
import EmployeeTable from "../components/EmployeeTable"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Employees = () => {
    const [employees, SetEmployees] = useState([])
    const [filteredEmployee, setFilteredEmployee] = useState("")
    const [filteredDepartment, setFilteredDepartment] = useState("")
    const [isAscending, setIsAscending] = useState(true);

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
    // console.log(filteredEmployee);
    console.log(filteredDepartment);

    const EmployeeByName = employees.filter((emp) => {
        return emp.name.toLowerCase().includes(filteredEmployee.toLowerCase())
    }).filter((emp) => {
        return filteredDepartment == "" ? true : emp.department == filteredDepartment
    })

    const sortSalary = () => {
        const sorted = [...employees].sort((a, b) => {
            return isAscending
                ? Number(a.salary) - Number(b.salary)
                : Number(b.salary) - Number(a.salary);
        });
        SetEmployees(sorted);
        setIsAscending(!isAscending);
    };



    return (
        <div className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen relative overflow-hidden text-gray-100">
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

                    <div className="flex gap-4">
                        <select
                            id="department"
                            className="bg-[#374151] border border-gray-600 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-3"
                            onChange={(e) => {
                                setFilteredDepartment(e.target.value)
                            }}
                        // value={employee.department}
                        >
                            <option value="">All Department</option>
                            <option value="1">Designing</option>
                            <option value="2">Development</option>
                            <option value="3">Finance</option>
                            <option value="4">Sales And Marketing</option>
                        </select>
                        <input
                            type="text"
                            id="name"
                            className="bg-[#374151] text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 transition-all duration-200 border border-gray-600"
                            placeholder="Search By Name"
                            required
                            onChange={(e) => {
                                setFilteredEmployee(e.target.value)
                            }}
                        // value={employee.name}
                        />
                        <button
                            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-900 transform hover:-translate-y-1 flex items-center space-x-2"
                            onClick={() => navigate("/add-employee")}
                        >
                            <span className="text-lg">+</span>
                            <span>Add Employee</span>
                        </button>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
                    {employees.length > 0 ? (
                        <EmployeeTable
                            employees={EmployeeByName}
                            onDelete={onDelete}
                            sortSalary={sortSalary}
                            isAscending={isAscending}
                        />

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
