import { Link } from "react-router-dom";

const EmployeeTable = ({ employees, onDelete, sortSalary, isAscending }) => {
    const getDepartment = (id) => {
        switch (id) {
            case 1: return "Designing";
            case 2: return "Development";
            case 3: return "Finance";
            case 4: return "Sales and Marketing";
            default: return "Unknown";
        }
    };

    const handleSalary = () => {
        sortSalary()
    }

    return (
        <div className="overflow-hidden bg-gray-900 text-gray-100 rounded-xl shadow-lg p-4">
            {employees && employees.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-800 border-b border-gray-700">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">#</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">Employee Name</th>
                                <th
                                    className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider cursor-pointer"
                                    onClick={handleSalary}
                                >
                                    Salary
                                    {isAscending ? (
                                        <i className="ri-arrow-down-s-line ml-2"></i>
                                    ) : (
                                        <i className="ri-arrow-up-s-line ml-2"></i>
                                    )}
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-300 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {employees.map((emp, idx) => (
                                <tr key={emp.id} className="hover:bg-gray-800 transition-colors duration-200 group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center w-8 h-8 bg-gray-700 text-blue-400 rounded-full text-sm font-bold">
                                            {idx + 1}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold text-lg">
                                                {emp.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-lg font-semibold text-gray-100">{emp.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-lg font-semibold text-green-400">
                                            ${Number(emp.salary).toLocaleString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-gray-700 text-blue-300">
                                            {getDepartment(Number(emp.department))}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <div className="flex justify-center space-x-3">
                                            <Link
                                                to={`/edit-employee/${emp.id}`}
                                                className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                                            >
                                                ✏️ Edit
                                            </Link>
                                            <button
                                                className="bg-red-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
                                                onClick={() => onDelete(emp.id)}
                                            >
                                                🗑️ Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-20">
                    <h1 className="text-2xl font-semibold text-gray-400">No Employee Found</h1>
                </div>
            )}
        </div>
    );
};

export default EmployeeTable;
