import { useContext } from "react"
import { AppContext } from "../App"

const Navlinks = () => {

    const {user,handleLogout} = useContext(AppContext)
    return (
        <div className="d-flex align-items-center gap-4">
            <ul className="d-flex list-unstyled gap-4 mb-0">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Helooooo {user?.name?.toUpperCase()}</li>
            </ul>
            <button className="btn btn-danger" onClick={handleLogout}>Log In</button>
        </div>
    )
}

export default Navlinks