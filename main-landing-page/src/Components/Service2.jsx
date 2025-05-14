import React from 'react'
import Title from './Title'
import SubService from './SubService'

const Service2 = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <Title main="Services" des="Get Started In Minutes: Download The App, Create Your Profile" subDes="Digital payment has revolutionized the way we make financial transactions today With Rible you can enjoy the convenience of making secure & hassle-free payments online. Our platform provides you with a quick and eary." align="left" />

                        <div className="pt-5 d-flex">
                            <div className="col-4">
                                <SubService bgColor="green" icon="bi bi-phone" title="1. Download" des = "Join the millions already benefitting from."/>
                            </div>
                            <div className="col-4">
                                  <SubService bgColor="red" icon="bi bi-file-earmark" title="2. Set Profile" des = "Join the millions already benefitting from."/>
                            </div>
                            <div className="col-4">
                                  <SubService bgColor="bg-color" icon="bi bi-airplane-fill" title="3. Start" des = "Join the millions already benefitting from."/>
                            </div>
                        </div>


                    </div>
                    <div className="col-6">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/feature-iphone.png" alt="" height={600} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service2