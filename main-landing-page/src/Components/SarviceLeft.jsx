import React from 'react'
import Title from './Title'
import SubService from './SubService'


const SarviceLeft = () => {

    return (
        <div>
            <Title main="Services" des="Get Started In Minutes: Download The App, Create Your Profile" subDes="Digital payment has revolutionized the way we make financial transactions today With Rible you can enjoy the convenience of making secure & hassle-free payments online. Our platform provides you with a quick and eary." align="left" />

            <div className="pt-5 row">
                <div className="col-md-4">
                    <div className=''>
                        <SubService bgColor="green" icon="bi bi-phone" title="1. Download" des="Join the millions already benefitting from." />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=''>
                        <SubService bgColor="red" icon="bi bi-file-earmark" title="2. Set Profile" des="Join the millions already benefitting from." />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=''>
                        <SubService bgColor="bg-color" icon="bi bi-airplane-fill" title="3. Start" des="Join the millions already benefitting from." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SarviceLeft