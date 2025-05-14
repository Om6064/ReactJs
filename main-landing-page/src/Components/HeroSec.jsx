import React from 'react'

const HeroSec = () => {
  return (
    <section className='p-t-200 pb-5'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-6">
                    <p className='fw-semibold fs-4'><i class="fa-solid fa-minus"></i> <span>The Best Online Furniture Store</span></p>
                    <h1 className='mt-5 font-60'>The Best Selection <br /> of <span className='text-main fw-bold'>Furniture Online</span></h1>
                    <p className='mt-3 text-secondary'>Online furniture apps simplify home shopping with convenience, variety, and affordability. Browse easily, compare prices.</p>
                    <div className="d-flex gap-3 mt-3">
                        <div className='col-4'>
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/store.png" alt="" className='img-fluid'/>
                        </div>
                        <div className='col-4'>
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/google.png" alt="" className='img-fluid'/>
                        </div>
                    </div>


                </div>
                <div className="col-6">
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src="https://zoyothemes.com/tailwind/evea/assets/images/furniture.png" alt="" height={600}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSec