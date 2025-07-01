import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./redux/action"

const App = () => {
        const dispatch =  useDispatch()
        const count = useSelector(state => state)
    return (
        <div>
            <p>count : {count}</p>

            <button onClick={() => {dispatch(increment())}}>Add</button>
            <button onClick={() => {dispatch(decrement())}}>minus</button>
            <button onClick={() => {dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default App