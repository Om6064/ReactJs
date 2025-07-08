import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeStudents } from "../feature/student/studentSlice";

const Table = () => {
    const list = useSelector(state => {
        console.log(state);
        return state.student.list
    })
    // const dispatch = useDispatch()
    // console.log(count);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeStudents(id))
    }


    return (
        <div className="container mx-auto py-9">

            <button type="button" onClick={() => navigate("/add-student")} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+ Add Student</button>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cource
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((stu) => {
                                return <tr key={stu.id} class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {stu.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {stu.age}
                                    </td>
                                    <td class="px-6 py-4">
                                        {stu.cource}
                                    </td>
                                    <td class="flex gap-3 px-6 py-4">
                                        <Link to={`/edit-student/${stu.id}`} className="text-blue-600">Edit</Link>
                                        <button onClick={() => {
                                            handleDelete(stu.id)
                                        }} className="text-red-600">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Table