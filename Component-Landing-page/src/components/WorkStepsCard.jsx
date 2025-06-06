const WorkStepsCard = (props) => {
    return (
        <>
            <div className="content my-4 p-3">
                <span className="step-number">0{props.idx + 1}</span>
                <div className="card-body d-flex p-2 gap-2 align-items-center">
                    <div className="step-icon fs-3 fw-bold">
                        <i className={`${props.icon}`} />
                    </div>
                    <div className="mt-3">
                        <h3>{props.title}</h3>
                        <p>{props.des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkStepsCard