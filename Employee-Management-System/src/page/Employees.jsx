import { useNavigate } from "react-router-dom"
import EmployeeTable from "../components/EmployeeTable"
import { useEffect, useState } from "react";

const Employees = () => {
    const [employees,SetEmployees] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let employeeDetails =  JSON.parse(localStorage.getItem("employees")) || []
        SetEmployees(employeeDetails)
    },[])
    console.log(employees);

    const onDelete = (id) => {
        const updatedList = employees.filter(emp => emp.id !== id);
        SetEmployees(updatedList);
        localStorage.setItem("employees", JSON.stringify(updatedList));
    }

    
    
    return (
        <div className="py-24">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <h4 className="text-3xl font-semibold text-blue-600">
                        Employee Detailes...
                    </h4>

                    <button
                        className=" bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            navigate("/add-employee")
                        }}
                    >
                        <i className="ri-add-fill" />
                        Add Employee
                    </button>
                </div>
                    <div className="py-10">
                        {employees.length > 0 ? <EmployeeTable employees={employees} onDelete={onDelete} /> : <h1 className="text-center text-3xl py-10 font-semibold">No Data Found</h1>}
                    </div>
            </div>
        </div>
    )
}

export default Employees