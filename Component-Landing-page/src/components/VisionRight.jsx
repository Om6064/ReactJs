import Button from "./ButtonMain"
import SubAbout from "./SubAbout"

const VisionRight = () => {
    let arr = [
        { title: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Praesent eget risus vitae massa" },
        { title: "Aenean pretium nisi vel pulvinar" },
    ]
    return (


        <div className="">
            <h3 className="fs-1 mb-4 fw-bold">Unleashing Potential with Creative Strategy</h3>
            <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="mt-2 mb-4">
                <div>
                    <p className="m-0">
                        {arr.map((item) => {
                            return <SubAbout title={item.title} />
                        })}
                    </p>
                </div>
            </div>
            <div className="d-flex gap-4">
                <Button title="Get Started" padding="3" />
                <button className="bg-transparent bg-btn p-3 rounded">
                    <p className="fw-semibold m-0">Learn More</p>
                </button>
            </div>
        </div>
    )
}

export default VisionRight