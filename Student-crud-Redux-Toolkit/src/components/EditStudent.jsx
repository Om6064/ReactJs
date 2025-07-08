import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudents } from "../feature/student/studentSlice";
import { useNavigate, useParams } from "react-router-dom";

const Editstudent = () => {
  const [input, setInput] = useState({ id: "", name: "", age: "", cource: "" });

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const students = useSelector((state) => {
    return state.student.list;
  });

  useEffect(() => {
    const existingStudent = students.find((stu) => stu.id === id);
    if (existingStudent) {
      setInput(existingStudent);
    }else{
      navigate("/")
    }
  }, [id]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudents(input));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="John"
            required
            value={input.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ..."
          />
        </div>
        <div>
          <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Age
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="age"
            placeholder="20"
            required
            value={input.age}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ..."
          />
        </div>
        <div>
          <label htmlFor="cource" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Course
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="cource"
            placeholder="React"
            required
            value={input.cource}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 ..."
      >
        Submit
      </button>
    </form>
  );
};

export default Editstudent;
