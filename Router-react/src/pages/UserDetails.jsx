import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const param = useParams()
    const navigate =  useNavigate()
    // console.log(param.id);
    
    let arr = JSON.parse(localStorage.getItem("users"))
    // console.log(arr);

    let currentUser = arr.find((user) => {
        return user.id == param.id
        
    })
    console.log(currentUser);
    
    
    return (


        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentUser.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentUser.Role}</p>
            <button onClick={() => {
                navigate("/users") 
            }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Back
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>


    )
}

export default UserDetails