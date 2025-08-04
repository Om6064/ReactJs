import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "./config/firbase";

const App = () => {
    const auth = getAuth(app);

    const signUpUser = async () => {
        try{
            const res = await createUserWithEmailAndPassword(auth, "aryan@gmail.com", "123456");
            console.log(res);
        }catch(error){
            console.log("error");
        }
    };

    return (
        <div onClick={signUpUser}>Button</div>
    );
};

export default App;
