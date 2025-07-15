import Navlinks from "./Navlinks"

const Navbar = () => {
    return (
        <div className="my-4">
            <div className="container d-flex justify-content-between">
                <div>
                    logo
                </div>
                <div>
                    <Navlinks />
                </div>
            </div>
        </div>
    )
}

export default Navbar