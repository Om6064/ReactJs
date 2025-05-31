import { useState } from "react";

const SpacerForm = () => {
  const [input, setInput] = useState({
    fname: "", lname: "", phone: "", email: "", password: "", confirmPassword: ""
  });
  const [error, setEroors] = useState({})
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  console.log(input);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", input);

    let errorobj = - {};

    if (input.fname.trim() == "") {
      errorobj.fname = "Please Enter The Fname";
    }
    if (input.lname.trim() == "") {
      errorobj.fname = "Please Enter The Lname";
    }
    if (input.phone.trim() == "") {
      errorobj.fname = "Please Enter The Phone Num";
    }
    if (input.email.trim() == "") {
      errorobj.fname = "Please Enter The Phone Num";
    }
    if (input.password.trim() == "" || input.password.length < 8) {
      errorobj.fname = "Password should be at Least 8 Charecter Long";
    }
    if (input.confirmPassword.trim() == "" || input.password != input.confirmPassword) {
      errorobj.fname = "Password and ConfirmPassword should be Same";
    }

    setEroors(errorobj)


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
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                id="fname"
                onChange={handleChange}
                placeholder="First name"
                className="input-style p-4"
                value={input.fname}
                required
              />
              {/* {
                error.fname && 
              } */}
              <input
                type="text"
                id="lname"
                onChange={handleChange}
                placeholder="Last name"
                className="input-style p-4"
                value={input.lname}
                required
              />
              <input
                type="tel"
                id="phone"
                onChange={handleChange}
                placeholder="123-45-678"
                className="input-style p-4"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={input.phone}
                required
              />
              <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="Email address"
                className="input-style p-4"
                value={input.email}
                required
              />
              <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Password"
                className="input-style p-4"
                value={input.password}
                required
              />
              <input
                type="password"
                id="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm password"
                className="input-style p-4"
                value={input.confirmPassword}
                required
              />
            </div>

            <div className="flex items-center my-4">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 underline">Terms & Conditions</a>
              </label>
            </div>

            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Custom input style (optional global Tailwind extension)
const style = `
.input-style p-4 {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5;
}
`;

export default SpacerForm;
