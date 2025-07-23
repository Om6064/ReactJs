import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

    const [input, setInput] = useState({
        name: "", age: ""
    })

    const [user, setData] = useState([])
    const [isedit, setisedit] = useState(false)
    const fetchData = async () => {
        let { data } = await axios.get("http://localhost:8175/users")
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleAdd = async (id) => {
        if (isedit == false) {
            await axios.post("http://localhost:8175/users", {
                ...input, id: Date.now().toString()
            })
            fetchData();
            setInput({ name: '', age: "" })
        }else{
            await axios.put(`http://localhost:8175/users/${id}`,input)
            fetchData()
            setInput({ name: '', age: "" })
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8175/users/${id}`)
        fetchData()
    }

    const handleEdit = async (id) => {
        let { data } = await axios.get(`http://localhost:8175/users/${id}`)
        setInput(data)
        setisedit(true)
    }
    return (
        <div>
            <input type="text" value={input.name} id="name" onChange={(e) => {
                setInput({ ...input, [e.target.id]: e.target.value })
            }} />
            <br />
            <br />
            <input type="number" value={input.age} id="age" onChange={(e) => {
                setInput({ ...input, [e.target.id]: e.target.value })
            }} />
            <br />
            <br />
            <button onClick={() => {
                handleAdd(input.id)
            }}>Add User</button>
            {user.map((user) => {
                return <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                    <button onClick={() => {
                        handleDelete(user.id)
                    }}>X</button>
                    <button onClick={() => {
                        handleEdit(user.id)
                    }}>Edit</button>
                </div>
            })}
        </div>
    )
}

export default App