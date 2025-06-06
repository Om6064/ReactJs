const ServiceCard = (props) => {
    return (
        <div className="col-md-6 my-3">
            <div className="service-item d-flex">
                <div className="service-icon d-flex align-items-center justify-content-center">
                    <i className={`${props.icon} fs-3 fw-semibold`} />
                </div>
                <div className="service-content">
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                    <div className="service-link color-main">
                        <span>Learn More</span>
                        <i className="bi bi-arrow-right" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard