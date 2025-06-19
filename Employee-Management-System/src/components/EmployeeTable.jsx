const EmployeeTable = ({ employees }) => {
    return (


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Salary
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp,idx) => {
                            <tr key={emp.id} class="odd:bg-white even:bg-gray-50  border-b  border-gray-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {idx +1}
                                </th>
                                <td class="px-6 py-4 text-gray-500 font-semibold">
                                    {emp.name}
                                </td>
                                <td class="px-6 py-4 text-gray-500 font-semibold">
                                    {emp.salary}
                                </td>
                                <td class="px-6 py-4 text-gray-500 font-semibold">
                                    {emp.department}
                                </td>
                                <td class="px-6 py-4 text-gray-500 font-semibold">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default EmployeeTable