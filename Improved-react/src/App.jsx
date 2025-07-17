import { useCallback, useMemo, useState } from "react"
import Person from "./Person"

const App = () => {
    const [count, setCount] = useState(0)
    const [users, setUser] = useState([
        { id: 1, name: "Aryyan" },
        { id: 2, name: "Shreya" },
        { id: 3, name: "ANjan" },
    ])
    const [limit, setLimit] = useState(1000)

    // Memoized delete function (only re-created when users change)
    const handleDelete = useCallback((id) => {
        const newUser = users.filter((user) => user.id !== id)
        setUser(newUser)
    }, [users])

    // Memoized value calculation (only recalculates when `limit` changes)
    const limitdata = useMemo(() => {
        let data = 0;
        for (let i = 0; i < limit; i++) {
            data += i;
        }
        return data;
    }, [limit])

    return (
        <div>
            <p>Count is: {count}</p>
            <p>Limit Data: {limitdata}</p>

            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
            <button onClick={() => setLimit(limit * 10)}>
                Increase Limit
            </button>

            {users.map((user) => (
                <Person 
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default App
