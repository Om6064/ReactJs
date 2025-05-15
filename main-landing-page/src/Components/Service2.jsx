import React from 'react'
import Title from './Title'
import SubService from './SubService'
import SarviceLeft from './SarviceLeft'

const Service2 = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-xl-6">
                        <SarviceLeft/>

                    </div>
                    <div className="col-xl-6">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/feature-iphone.png" alt="" height={600} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service2