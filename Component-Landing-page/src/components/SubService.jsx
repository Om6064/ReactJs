const SubService = (props) => {
    return (
        <div className="mb-3 border-bottom">
            <div className="service-item d-flex align-items-center gap-4">
                <div className="service-icon1 d-flex align-items-center justify-content-center">
                    <i className={`${props.icon} fs-1 fw-semibold`} />

                </div>
                <div className="service-content">
                    <h4 className="hover-text">{props.title}</h4>
                    <p>{props.des}</p>
                </div>
            </div>

        </div>
    )
}

export default SubService