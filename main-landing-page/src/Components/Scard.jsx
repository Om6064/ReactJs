import React from 'react'

const Scard = (props) => {
  return (
    
      <div className="col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center align-items-center">
        <div className="text-center" style={{ width: '18rem' }}>
          <div className="card-body d-flex align-items-center justify-content-center flex-column">
            <div className='d-flex align-items-center justify-content-center'>
              <h5 className="card-title fs-1 bor-red d-flex bg-color text-main align-items-center justify-content-center">
                <i className={`${props.icon}`}></i>
              </h5>
            </div>
            <p className="card-text mt-3 fs-5 fw-semibold">{props.title}</p>
            <p className="card-text text-secondary">{props.desc}</p>
          </div>
        </div>
      </div>
   

  )
}

export default Scard