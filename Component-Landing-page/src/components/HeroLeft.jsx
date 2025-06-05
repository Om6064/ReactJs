import Button from "./ButtonMain"

const HeroLeft = () => {
    return (
        <>
            <div className="inovation-btn mb-3 p-1 border rounded-4">
                <div className="d-flex gap-2">
                    <div className="circle-icon rounded rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-bell font-14"></i>
                    </div>
                    <p className="p-0 m-0 fw-bold">Innovative Solutions</p>
                </div>
            </div>
            <h1 className="fw-semibold mb-4">Accelerating business growth through innovative technology</h1>
            <p className="font-18 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>
            <Button title="Discover More" padding="3"/>
        </>
    )
}

export default HeroLeft