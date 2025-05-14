import React from 'react'
import SliderImage from './SliderImage'
import SliderMain from './SliderMain'

const Slider = () => {
    
  return (
    <section>
        <div className="container">
            <div className="row my-5">
                <div className="col-3">
                    <SliderImage/>
                </div>
                <div className="col-9">
                    <SliderMain/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slider