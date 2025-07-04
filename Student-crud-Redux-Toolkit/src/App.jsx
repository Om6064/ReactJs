import { useDispatch, useSelector } from "react-redux"


const App = () => {
  const list = useSelector(state => {
    console.log(state);
    return state.student.list
  })
  // const dispatch = useDispatch()
  // console.log(count);

  return (
    <div className="container mx-auto py-9">




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
                    {stu.course}
                  </td>
                  <td class="px-6 py-4">
                    
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

export default App