import React from 'react'

const SubService = (props) => {
    return (
        <div>
            <div className={`${props.bgColor} rounded-circle icons d-flex align-items-center justify-content-center fs-2 fw-bold service-icon`}>
                <i class={`${props.icon}`}></i>
            </div>

            <p className='pt-4 fs-5 fw-semibold'>{props.title}</p>
            <p className='text-secondary mt-2'>{props.des}</p>
        </div>
    )
}

export default SubService