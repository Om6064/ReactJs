import { useState } from "react"
import { useDispatch } from "react-redux"
import { addStudents } from "../feature/student/studentSlice"
import { useNavigate } from "react-router-dom"

const Addstudent = () => {
    
    const [input,setInput] = useState(
        {name:"",age:"",cource:""}
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setInput({...input,[e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
        dispatch(addStudents(input))

        
    }

    return (
        <form onSubmit={(e) => {
            handleSubmit(e)
        }}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input onChange={(e) => {
                        handleChange(e)
                    }} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required value={input.name} />
                </div>
                <div>
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input onChange={(e) => {
                        handleChange(e)
                    }} type="text" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required value={input.age} />
                </div>
                <div>
                    <label htmlFor="cource" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input onChange={(e) => {
                        handleChange(e)
                    }} type="text" id="cource" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required value={input.cource} />
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>


    )
}

export default Addstudent