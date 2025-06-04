const Vistion = (props) => {
    return (
        <div className="container">
            <section className="p-t-100">
            <div className="row gap-3">
                <div className="col-6">
                    {props.left}
                </div>
                <div className="col-5 d-flex flex-column align-items-center justify-content-center">
                    {props.right}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Vistion