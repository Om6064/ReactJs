import React from 'react'
import HeroSec from './HeroSec'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'


const Header = () => {
    return (
        <div className='bg-img'>
            <header>
                <div className="container">
                    <div className="row py-3 align-items-center justify-content-between">
                        <div className="col-2">
                            <div>
                                <img src="https://zoyothemes.com/tailwind/evea/assets/images/logo.png" alt="Logo" className='h-10' />
                            </div>
                        </div>
                        <div className="col-8">
                            <ul className=' justify-content-between align-items-center mt-3 d-none d-lg-flex'>
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
                            <button className='d-none d-lg-flex outline bg-button float-end justify-content-center gap-2 rounded p-2 text-white'>
                                <div><i class="fa-solid fa-download"></i> </div>
                                <p className='m-0'>Download</p>
                            </button>
                            <div className='d-flex d-lg-none' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                                <i class="bi bi-list fs-1"></i>
                            </div>
                        </div>

                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                            </div>
                            <div className="offcanvas-body">
                               <ul className=''>
                                <li className='mt-5'>Home</li>
                                <li className='mt-5'>Service</li>
                                <li className='mt-5'>Features</li>
                                <li className='mt-5'>About</li>
                                <li className='mt-5'>Pricing</li>
                                <li className='mt-5'>Testimonial</li>
                                <li className='mt-5'>Blog</li>
                                <li className='mt-5'>Contact</li>
                            </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <HeroSec left={<HeroLeft />} right={<HeroRight />} />
        </div>
    )
}

export default Header