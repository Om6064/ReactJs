import { useState } from "react";
import { useNavigate } from "react-router-dom"

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        salary: "",
        department: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {

        setEmployee({ ...employee, [e.target.id]: e.target.value })
    }



   const handleSubmit = (e) => {
    e.preventDefault();

    const existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const newEmployee = { ...employee, id: Date.now() };
    const updatedEmployees = [...existingEmployees, newEmployee];

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    navigate("/employees");
};

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="input-label">First name</label>
                    <input type="text" id="name" className="input-control" placeholder="John" required onChange={handleChange}
                        value={employee.name} />
                </div>
                <div>
                    <label htmlFor="salary" className="input-label" >Last name</label>
                    <input type="text" id="salary" className="input-control" placeholder="Doe" required onChange={handleChange}
                        value={employee.salary} />
                </div>
                <div>


                    <div>
                        <label htmlFor="department" className="input-label">Department</label>
                        <select id="department" className="input-control" onChange={handleChange}
                            value={employee.department}>
                            <option value="">Choose a Department</option>
                            <option value="1">Designing</option>
                            <option value="2">Development</option>
                            <option value="3">Finanse</option>
                            <option value="4">Sales And Marketing</option>
                        </select>
                    </div>


                </div>
            </div>

            <div className="text-center">
                <button
                    className="text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    type="submit"

                >
                    <i className="ri-add-fill" />
                    Add Employee
                </button>
            </div>
        </form>

    )
}

export default EmployeeForm