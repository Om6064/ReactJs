import React from 'react'
import HeroSec from './HeroSec'


const Header = () => {
    return (
       <div className='bg-img'>
         <header>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-2">
                        <div>
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/logo.png" alt="Logo" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-8">
                        <ul className='d-flex justify-content-between align-items-center mt-3'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Testimonial</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <button className='outline bg-button float-end d-flex justify-content-center gap-2 rounded p-2 text-white'>
                            <div><i class="fa-solid fa-download"></i> </div>
                            <p className='m-0'>Download</p>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <HeroSec/>
       </div>
    )
}

export default Header