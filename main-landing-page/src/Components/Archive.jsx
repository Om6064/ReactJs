
import Title from './Title'

import Archivments from './Archivments'

const Archive = () => {
 
    return (
        <section className='mt-5'>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6 ">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src="https://zoyothemes.com/tailwind/evea/assets/images/feature.jpg" alt="" className='img-fluid rounded-5 height-650' />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <Title main="Focused on achievind" des="Achievement Via Our Distinct Methodology" align="left" />

                        <p className='fw-semibold fs-5'>Learn More <i class="bi bi-arrow-right"></i></p>
                        <hr />
                       <Archivments title="Manage markets with empowerment" des="Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success." icon="bi bi-check-lg"/>
                       <Archivments title="Manage your design and architecture" des="Achieve task completion optimization by effectively managing time and resources, ensuring timely delivery and efficiency." icon="bi bi-layers"/>
                       <Archivments title="Presentations in real-time" des="Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success." icon="bi bi-lock"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Archive