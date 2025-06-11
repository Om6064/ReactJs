import { useRef, useState } from "react";



const Form = () => {
    const [text, setText] = useState({
        name: "",
        email: "",
        course: "",
        review: ""
    });
    const [error, setError] = useState({});
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempObj = {};

        if (!text.name || text.name.trim() === "") {
            tempObj.name = "Please Enter The Name";
        }

        if (!text.date || text.date.trim() === "") {
            tempObj.date = "Please Enter The Date";
        }

        if (text.star === undefined || text.star === null || text.star === "") {
            tempObj.star = "Please Enter The Course";
        }
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (text.email.trim() === "" || !emailRegex.test(text.email)) {
            tempObj.email = "Please Enter The Appropriate Email";
        }

        if (!text.review || text.review.trim() === "") {
            tempObj.review = "Please Enter The Review";
        }

        setError(tempObj);

        if (Object.keys(tempObj).length === 0) {
            return;
        }
    };

    const handleChange = (e) => {
        setText({ ...text, [e.target.id]: e.target.value });
        setError({ ...error, [e.target.id]: "" });
    };


    return (
        <div className="bg-slate-100">
            <div className="container mx-auto px-4 min-h-screen  flex items-center justify-center">

                <form
                    className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full"
                    onSubmit={handleSubmit}
                    ref={inputRef}
                >
                    <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Leave a Review</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="mb-5">
                            <label htmlFor="name" className={`block  text-sm ${!error.name ? "text-gray-600" : "text-red-600"}`}>Name</label>
                            <input
                                onChange={handleChange}
                                value={text.name}
                                type="text"
                                name="name"
                                id="name"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.name ? "border-gray-300" : "border-red-300"}`}
                            />
                            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="course" className={`block  text-sm ${!error.course ? "text-gray-600" : "text-red-600"}`}>Course</label>
                            <select
                                onChange={handleChange}
                                value={text.course}
                                name="course"
                                id="course"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.star ? "border-gray-300" : "border-red-300"}`}
                            >
                                <option value="">--Select Course--</option>
                                <option value="1">Full Stack Development</option>
                                <option value="2">Ui/Ux</option>
                                <option value="3">Ai/Ml/Ds</option>
                            </select>
                            {error.star && <p className="text-red-500 text-sm mt-1">{error.star}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="mb-5">
                            <label htmlFor="email" className={`block  text-sm ${!error.email ? "text-gray-600" : "text-red-600"}`}>Email</label>
                            <input
                                onChange={handleChange}
                                value={text.email}
                                type="text"
                                name="email"
                                id="email"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.email ? "border-gray-300" : "border-red-300"}`}
                            />
                            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                        </div>

                        <div className="flex">
                            <div className="flex items-center me-4">
                                <input id="male" type="radio" defaultValue name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900">Male</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="female" type="radio" defaultValue name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="mb-5">
                            <label htmlFor="password" className={`block  text-sm ${!error.password ? "text-gray-600" : "text-red-600"}`}>password</label>
                            <input
                                onChange={handleChange}
                                value={text.password}
                                type="password"
                                name="password"
                                id="password"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.password ? "border-gray-300" : "border-red-300"}`}
                            />
                            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirmPassword" className={`block  text-sm ${!error.confirmPassword ? "text-gray-600" : "text-red-600"}`}>confirmPassword</label>
                            <input
                                onChange={handleChange}
                                value={text.confirmPassword}
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className={`w-full border-b-2 focus:border-blue-600 outline-none p-2 ${!error.confirmPassword ? "border-gray-300" : "border-red-300"}`}
                            />
                            {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
                        </div>

                    </div>



                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Show Data
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div >
        </div >
    );
};

export default Form;
