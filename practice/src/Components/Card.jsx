const Card = (props) => {
    console.log(props)
    return (
        <div className="col-3">
            <div className="card" style={{ width: '18rem' }}>
                    <img src={props.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href="#" className={`btn btn-${props.color}`}>Go {props.Title}</a>
                </div>
            </div>
        </div>
    )
}

export default Card