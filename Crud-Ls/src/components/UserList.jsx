const UserList = ({ users, deleteUser, getEditUser }) => {
    const handleDelete = (userId) => {
        deleteUser(userId)
    }
    const handleEdit = (user) => {
        getEditUser(user)
    }

    const getCourse = (course) => {
        switch (course) {
            case 1:
                return "Full Stack Development"
            case 2:
                return "UI/UX"
            case 3:
                return "AI/ML/DS"
            default:
                return "Unknown Course";
        }
    };

    return (

        <div>
            {users.length !== 0  ? <div className="bg-slate-100 h-[459px] overflow-y-auto">
                <div className="container mx-auto">
                    <div class="overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-black uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Course
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Gender
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item) => {
                                    return <tr key={item.id} class="odd:bg-white  even:bg-gray-50 hover:bg-gray-50  border-b  border-gray-200">
                                        <td class="px-6 py-4 text-black ">
                                            {item.name}
                                        </td>
                                        <td class="px-6 py-4 text-black">
                                            {/* {item.course} */}
                                            {getCourse(Number(item.course))}
                                        </td>
                                        <td class="px-6 py-4 text-black">
                                            {item.email}
                                        </td>
                                        <td class="px-6 py-4 text-black">
                                            {item.gender}
                                        </td>
                                        <td class="px-6 py-4 text-black">
                                            <div className="flex gap-5">
                                                <button class="font-medium text-blue-600 hover:underline" onClick={() => {
                                                    handleEdit(item)
                                                    
                                                }}>Edit</button>
                                                <button class="font-medium text-red-600 hover:underline" onClick={() => {
                                                    handleDelete(item.id)
                                                }}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> : <h1 className="bg-slate-100 h-[459px] text-center text-xl font-semibold pt-10">No Data Found</h1>}
        </div>
    );
};

export default UserList;
