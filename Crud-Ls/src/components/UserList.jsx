const UserList = ({ users }) => {
    return (


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
                    {users.map((item,idx)=>{
                        return <tr key={idx} class="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
                        <td  class="px-6 py-4 text-black ">
                            {item.name}
                        </td>
                        <td class="px-6 py-4 text-black">
                            {item.course}
                        </td>
                        <td class="px-6 py-4 text-black">
                            {item.email}
                        </td>
                        <td class="px-6 py-4 text-black">
                            {item.gender}
                        </td>
                        <td class="px-6 py-4 text-black">
                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
        </div>

    );
};

export default UserList;
