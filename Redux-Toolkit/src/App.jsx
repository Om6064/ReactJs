import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./feature/couter/counterSlice";

const App = () => {
  const count = useSelector(state => state.counterReducer.state)
  const dispatch = useDispatch()
  console.log(count);
  
  return (
    <div>
      <p>count :{count}</p>


      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App