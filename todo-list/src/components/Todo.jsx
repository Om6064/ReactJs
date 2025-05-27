import { useState } from "react"
import Table from "./Table"

const Todo = () => {
  const [text, setText] = useState("")
  console.log(text);
  

  return (
    <>
      <h1 className="text-center font-semibold my-5 text-3xl">Todo List ☑️</h1>
      <div className="container mx-auto">
        <div className="w-6/12 mx-auto">
          <form className="flex items-center max-w-lg mx-auto">
            <div className="relative w-full flex">
              <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12 p-2.5" placeholder="Add Your Tasks" onChange={(e) => {
                setText(e.target.value)
              }} required />
              <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <Table />

      </div>
    </>
  )
}

export default Todo