const Vistion = (props) => {
    return (
        <div className="bg-color">
            <div className="container">
                <section className="py-5">
                    <div className="row gap-3 gy-5">
                        <div className="col-md-5">
                            {props.left}
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                            {props.right}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Vistion