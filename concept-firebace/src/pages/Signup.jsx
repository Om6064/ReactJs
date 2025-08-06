import { useState } from "react"
import { app } from "../config/firbase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Signup = () => {
    const [input, setInput] = useState({
        email: "", password: ""
    })

    const auth = getAuth(app);

    const signUpUser = async () => {
        try {
            const res = await createUserWithEmailAndPassword(auth, input.email, input.password);
            console.log(res);
        } catch (error) {
            console.log("error");
        }
    };
    console.log(input);
    return (
        <div>
            <p>sign up</p>
            <br />
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
            <br />
            <br />
            <label htmlFor="password">password : </label>
            <input type="password" id="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
            <br />
            <br />

            <button onClick={signUpUser}>Button</button>
        </div>
    )
}

export default Signup