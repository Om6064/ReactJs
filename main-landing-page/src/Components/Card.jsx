import React from 'react'

const Card = (props) => {
  return (
     <div className="col-md-6 col-xl-4 mb-4">
            <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <div className="d-flex align-items-center mt-3">
                        <img src={props.pimg} alt={props.name} className="rounded-circle" width="40" height="40" />
                        <div className="ms-2">
                            <div>{props.name}</div>
                            <small className="text-muted">{props.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Card