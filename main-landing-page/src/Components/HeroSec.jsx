import React from 'react'
import HeroRight from './HeroRight'

const HeroSec = (props) => {
  return (
    <section className=' pb-5 pt-5'>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6 gy-5">
                    {props.left}


                </div>
                <div className="col-md-6 gy-5">
                    {props.right}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSec