import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useState } from "react";
import { app } from "../config/firbase";


const Signin = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();

  const signInUser = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, input.email, input.password);
      console.log("Signed in successfully:", res);
    } catch (error) {
      console.log("Firebase Error:", error.message); 
    }
  };

  const GoogleSignin = async() => {
      let res = await signInWithPopup(auth, GoogleProvider)
      console.log(res);
      
  }

  return (
    <div>
      <div>
        Sign In
      </div>
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={input.email}
        onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={input.password}
        onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })}
      />
      <br />
      <br />
      <button onClick={signInUser}>Sign In</button><br />
      <button onClick={GoogleSignin}>Continue With Google...</button>
    </div>
  );
};

export default Signin;
