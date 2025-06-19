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
                        <EmployeeTable employees={employees}/>
                    </div>
            </div>
        </div>
    )
}

export default Employees