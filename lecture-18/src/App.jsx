import { useEffect, useState } from "react"

const App = () => {

    const [user,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let URL = "http://localhost:8175/users"
            let res = await fetch(URL)
            let data = await res.json()
            console.log(data);
            
            setData(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            {user.map((user) => {
                return <>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                </>
            })}
        </div>
    )
}

export default App