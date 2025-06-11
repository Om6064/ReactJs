import { useEffect, useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(savedUsers);
    }, []);

    useEffect(() => {
        localStorage.setItem("users",JSON.stringify(users))
    },[users])

    const addUser = (newusers) => {
        setUsers([...users,newusers])
    }

    console.log(users);
    
    return (
        <div>
            <Form addUser={addUser} />
            <UserList users={users} />
        </div>
    );
};

export default App;
