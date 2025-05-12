import React from 'react'
import Button from './Button'

const Hero_sec = (props) => {
  return (
    <section className='bg-color'>
      <div className="container">
        <div className="pb-32 pt-20 px-3">
          <p className='text-center font-48 fw-bold p-0 m-0'>{props.web_heading}</p>
          <p className='text-center font-48 fw-bold p-0 m-0 text-info'>{props.sub_heading}</p>
          <p className='text-center fs-4 text-secondary m-3'>{props.web_des}</p>
          <div className='my-5 py-3 text-center'>
            <Button bgColor="info" textColor="white" fontweight="bold" fontsize="5"></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero_sec