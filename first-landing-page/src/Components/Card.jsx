

const Card = (props) => {
    return (
     
           <div className="col-md-4">
             <div className="card my-5" style={{}}>
                <img src={`${props.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.badge}</h5>
                    <p className="card-text">{props.des}</p>
                </div>
            </div>
           </div>

     
    )
}

export default Card