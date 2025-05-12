import { useState } from 'react'


const Counter = () => {
      const [couter,setCounter] = useState(1)
  return (
    <div>
        <h1 className='text-center'>{couter}</h1>
        <div className="text-center">
            <button className='btn btn-danger text-center' onClick={() => {
                setCounter(couter + 1)
            }}>Click Me</button>
        </div>
    </div>
  )
}

export default Counter