import Button from "./ButtonMain"
import SubAbout from "./SubAbout"

const AboutLeft = () => {
    let arr = [

        { title: "Ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { title: "Duis aute irure dolor in reprehenderit in voluptate velit." },
        {
            title: " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla" },

    ]
    return (
        <div className="container">
            <div className="py-5">
                <p className="mb-3">WHO WE ARE</p>
                <h3 className="fs-2 fw-bold">Unleashing Potential with Creative Strategy</h3>
                <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </i>
                <div className="mt-2 mb-4">
                    <div>
                        <div className="m-0">
                            {arr.map((item,idx) => {
                                return <SubAbout key={idx} title={item.title} />
                            })}
                        </div>
                    </div>
                </div>
                <Button title="Read More ➜" padding="3"/>
            </div>
        </div>
    )
}

export default AboutLeft