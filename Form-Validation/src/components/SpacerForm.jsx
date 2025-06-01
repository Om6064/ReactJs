import { useRef, useState } from "react";

const SpacerForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /[0-9]{10}/
  const [input, setInput] = useState({
    fname: "", lname: "", phone: "", email: "", password: "", confirmPassword: ""
  });
  const [error, setEroors] = useState({})
  const inputRef = useRef(null)
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    setEroors({ ...error, [e.target.id]: "" })
  };

  console.log(input);


  const handleSubmit = (e) => {
    
    e.preventDefault();
    let errorobj = {};

    if (input.fname.trim() === "") {
      errorobj.fname = "Please Enter The First Name";
    }
    if (input.lname.trim() === "") {
      errorobj.lname = "Please Enter The Last Name";
    }
    
    if (input.phone.trim() === "" || !phoneRegex.test(input.phone)) {
      errorobj.phone = "Please Enter The valid Phone Number";
    }
    if (input.email.trim() === "" || !emailRegex.test(input.email)) {
      errorobj.email = "Please Enter The valid Email";
    }
    if (input.password.trim() === "" || input.password.length < 8) {
      errorobj.password = "Password should be at least 8 characters long";
    }
    if (
      input.confirmPassword.trim() === "" ||
      input.password !== input.confirmPassword
    ) {
      errorobj.confirmPassword = "Passwords do not match";
    }

    setEroors(errorobj);

    if (Object.keys(errorobj).length === 0) {
      inputRef.current.submit();
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden">
        <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-700 to-blue-500 p-10 text-white relative">
          <div className="absolute top-0 right-0 h-full w-10 bg-white rounded-l-full"></div>
          <div className="relative z-10 flex flex-col justify-center h-full">
            <div className="text-center">
              <div className="mb-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <img src="https://cdn-icons-png.flaticon.com/512/3210/3210012.png" alt="Spacer Logo" className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mt-4">Welcome to</h2>
                <h1 className="text-4xl font-extrabold">Spacer</h1>
              </div>
              <p className="text-sm mt-4">
                Learn more about planets, galaxies, and cosmic adventures. Spacer connects curious minds across the universe.
              </p>
              <div className="mt-6">
                <a href="#" className="underline text-white text-sm mx-2">Discover More</a>
                <a href="#" className="underline text-white text-sm mx-2">Creation Hub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Create your account</h2>
          <form onSubmit={handleSubmit} ref={inputRef} noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="fname"
                  onChange={handleChange}
                  placeholder="First name"
                  className={`input-style   border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-2 ${error.fname ? "bg-red-50 border border-red-500" : "focus:ring-blue-500 focus:border-blue-500 bg-gray-50"}`}
                  value={input.fname}
                />
                {
                  error.fname && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{error.fname}</p>
                }
              </div>
              <div>
                <input
                  type="text"
                  id="lname"
                  onChange={handleChange}
                  placeholder="Last name"
                  className={`input-style   border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-2 ${error.lname ? "bg-red-50 border border-red-500" : "focus:ring-blue-500 focus:border-blue-500 bg-gray-50"}`}
                  value={input.lname}
                />
                {
                  error.lname && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{error.lname}</p>
                }
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  onChange={handleChange}
                  placeholder="123-45-678"
                  className={`input-style border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-2 ${error.phone ? "bg-red-50 border border-red-500" : "focus:ring-blue-500 focus:border-blue-500 bg-gray-50"}`}
                  value={input.phone}
                />
                {
                  error.phone && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{error.phone}</p>
                }
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`input-style   border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-2 ${error.email ? "bg-red-50 border border-red-500" : "focus:ring-blue-500 focus:border-blue-500 bg-gray-50"}`}
                  value={input.email}
                  pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
                />
                {
                  error.email && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{error.email}</p>
                }
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className={`input-style   border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-2 ${error.password ? "bg-red-50 border border-red-500" : "focus:ring-blue-500 focus:border-blue-500 bg-gray-50"}`}
                  value={input.password}
                />
                {
                  error.password && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{error.password}</p>
                }
              </div>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className={`input-style   border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 mb-2 ${error.confirmPassword ? "bg-red-50 border border-red-500" : "focus:ring-blue-500 focus:border-blue-500 bg-gray-50"}`}
                  value={input.confirmPassword}
                />
                {
                  error.confirmPassword && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{error.confirmPassword}</p>
                }
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SpacerForm;
