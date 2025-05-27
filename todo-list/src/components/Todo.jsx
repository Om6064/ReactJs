import { useState } from "react"
import Table from "./Table"

const Todo = () => {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (text.trim() === "") return

    const newTask = {
      id: Date.now(),
      isComplete: false,
      taskName: text
    }

    setTasks([...tasks, newTask])
    setText("")
  }

  const markAsComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isComplete: true } : task
    )
    setTasks(updatedTasks)
  }

  return (
   <>
       <h1 className="text-center font-semibold my-5 text-3xl">Todo List ☑️</h1>
      <div className="container mx-auto">
        <div className="w-6/12 mx-auto">
          <form className="flex items-center max-w-lg mx-auto">
            <div className="relative w-full flex">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12 p-2.5"
                placeholder="Add Your Tasks"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="button"
                onClick={addTask}
                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>

        {tasks.length === 0 ? (
          <h2 className="text-center text-2xl text-red-500 mt-10">No tasks found 😕</h2>
        ) : (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full md:w-8/12 lg:w-6/12 mx-auto text-sm text-left text-gray-700 border shadow-lg rounded-xl overflow-hidden">
              <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-6 py-3">Task</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <Table
                    key={task.id}
                    id={task.id}
                    name={task.taskName}
                    complete={task.isComplete}
                    onComplete={markAsComplete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default Todo
