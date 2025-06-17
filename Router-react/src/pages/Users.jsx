import { Link } from "react-router-dom"

const Users = () => {

    let users = [
        {
            id: 1,
            name: "Aryan",
            Role: "Developer"
        },
        {
            id: 2,
            name: "om",
            Role: "chotu"
        },
        {
            id: 3,
            name: "Kalu",
            Role: "Brother"
        },
    ]
     localStorage.setItem("users", JSON.stringify(users))
    
   



    return (


        <div className="container mx-auto my-7">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => {
                            return <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.Role}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/users/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</Link>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default Users