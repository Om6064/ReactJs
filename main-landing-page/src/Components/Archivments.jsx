import React from 'react'


const Archivments = (props) => {
    return (
        <div className="d-flex mt-5">
            <div className="col-2">
                <div className='bg-color btn-outline-info rounded-circle icons d-flex align-items-center justify-content-center fs-4 text-main'>
                    <i class={`${props.icon}`}></i>
                </div>
            </div>
            <div className="col-10">
                <h4 className='fw-semibold'>{props.title}</h4>
                <p className='text-secondary'>{props.des}</p>

            </div>
        </div>
    )
}

export default Archivments