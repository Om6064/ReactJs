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
    <div className="overflow-hidden">
        {employees ? (
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">#</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Employee Name</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Salary</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Department</th>
                            <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {employees.map((emp, idx) => (
                            <tr key={emp.id} className="hover:bg-gray-50 transition-colors duration-200 group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                                        {idx + 1}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                                {emp.name.charAt(0).toUpperCase()}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-lg font-semibold text-gray-900">{emp.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-lg font-semibold text-green-600">
                                        ${Number(emp.salary).toLocaleString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {getDepartment(Number(emp.department))}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex justify-center space-x-3">
                                        <button 
                                            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-all duration-200 transform hover:scale-105"
                                        >
                                            ✏️ Edit
                                        </button>
                                        <button
                                            className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-200 transition-all duration-200 transform hover:scale-105"
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
                <h1 className="text-2xl font-semibold text-gray-700">No Employee Found</h1>
            </div>
        )}
    </div>
);
};

export default EmployeeTable;
