

const Card = (props) => {
    return (
        <div className="my-5">
           <div className="col-4">
             <div className="card" style={{ width: '18rem' }}>
                <img src={`${props.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.badge}</h5>
                    <p className="card-text">{props.des}</p>
                </div>
            </div>
           </div>

        </div>
    )
}

export default Card