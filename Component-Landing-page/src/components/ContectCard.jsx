const ContectCard = (props) => {
    return (
        <div className="col-md-4 p-4 justify-content-between">
            <div className="border p-4 rounded">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="bg-circle1 rounded-circle d-flex align-items-center justify-content-center mb-3">
                        <i className={`${props.icon} fs-2 color-main`}></i>
                    </div>
                    <h3 className="fs-5 fw-semibold mb-4">{props.title}</h3>
                    <p className="text-center">{props.des}</p>
                </div>
            </div>
        </div>
    )
}

export default ContectCard