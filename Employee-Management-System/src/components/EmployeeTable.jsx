const EmployeeTable = ({ employees, onDelete }) => {
    const getDepartment = (id) => {
        switch (id) {
            case 1: return "Designing";
            case 2: return "Development";
            case 3: return "Finance";
            case 4: return "Sales and Marketing";
            default: return "Unknown";
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {employees ? <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Number</th>
                        <th className="px-6 py-3">Employee Name</th>
                        <th className="px-6 py-3">Salary</th>
                        <th className="px-6 py-3">Department</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, idx) => (
                        <tr key={emp.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{idx + 1}</th>
                            <td className="px-6 py-4 text-gray-500 font-semibold">{emp.name}</td>
                            <td className="px-6 py-4 text-gray-500 font-semibold">{emp.salary}</td>
                            <td className="px-6 py-4 text-gray-500 font-semibold">
                                {getDepartment(Number(emp.department))}
                            </td>
                            <td className="px-6 py-4 text-gray-500 font-semibold">
                                <div className="flex gap-5">
                                    <button className="font-medium text-blue-600 hover:underline"
                                        onClick={() => {
                                            onEdit(emp)
                                        }}>Edit</button>
                                    <button
                                        className="font-medium text-red-600 hover:underline"
                                        onClick={() => onDelete(emp.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> : <h1>No Employee Found</h1>}
        </div>
    );
};

export default EmployeeTable;
