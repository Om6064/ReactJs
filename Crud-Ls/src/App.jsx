import { useEffect, useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

const App = () => {
    const [users, setUsers] = useState([]);
    const [editedUser,setEditedUser] = useState(null)
    
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

    const deleteUser = (userId) => {
        let newUsers =  users.filter((user) => {
            return user.id !== userId
        })
        setUsers(newUsers)
    }

    const getEditUser = (user) => {
        console.log(user);
        setEditedUser(user)
    }

    const UpdateUser = () => {
        
    }

    console.log(users);
    
    return (
        <div>
            <Form addUser={addUser} editedUser={editedUser}/>
            <UserList users={users} deleteUser={deleteUser} getEditUser={getEditUser}/>
        </div>
    );
};

export default App;
