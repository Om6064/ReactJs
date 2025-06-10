import { useEffect, useState } from "react"

const App = () => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        let num = JSON.parse(sessionStorage.getItem("count")) || 0
        setCount(num)
    },[])

    useEffect(() => {
        sessionStorage.setItem("count",JSON.stringify(count))
    },[count])
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Click Me
            </button>
        </div>
    )
}

export default App