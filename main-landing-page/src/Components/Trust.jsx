import React from 'react'

const Trust = () => {
    return (
        <section className='bg-trust p-5'>
            <div className='container'>
                <div className='position-relative z-1'>
                    <p className='text-center fw-bold letter-spacing light fs-2 text-uppercase space'>
                        Trusted by Leading Companies
                    </p>

                    <div className="row gap-30 py-5">
                        <div className="col-2">
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/client/amazon.svg" alt="" className='img-fluid h-10' />
                        </div>
                        <div className="col-2">
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/client/google.svg" alt="" className='img-fluid h-10' />
                        </div>
                        <div className="col-2">
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/client/lenovo.svg" alt="" className='img-fluid h-10' />
                        </div>
                        <div className="col-2">
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/client/paypal.svg" alt="" className='img-fluid h-10' />
                        </div>
                        <div className="col-2">
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/client/shopify.svg" alt="" className='img-fluid h-10' />
                        </div>
                        <div className="col-2">
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/client/spotify.svg" alt="" className='img-fluid h-10' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trust