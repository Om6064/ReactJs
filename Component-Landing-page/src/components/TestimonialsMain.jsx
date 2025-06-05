import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Title from "./Title"

const TestimonialsMain = () => {

    return (
        <section className="container">
            <div className="py-5">
                <Title main="Testimonials" sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
            </div>
            <div>
                <>
                    <Swiper
                      
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fs-6 text-secondary line-height'>
                                        Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">

                                    <div className="testimonial-profile p-4">
                                        <div className="d-flex gap-2 mb-3">
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                        </div>
                                        <div className="d-flex gap-2 ">
                                            <img src="/public/img/person-f-3.webp" alt="Profile Image" height={55} width={55} className='rounded-circle' />
                                            <div className='d-flex flex-column justify-content-center'>
                                                <p className='m-0 fw-bold'>Robert Johnson</p>
                                                <h4 className='font-14 text-secondary'>Marketing Director</h4>
                                            </div>
                                        </div>
                                    </div>


                                </ListGroup>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fs-6 text-secondary line-height'>
                                        Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">

                                    <div className="testimonial-profile p-4">
                                        <div className="d-flex gap-2 mb-3">
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                        </div>
                                        <div className="d-flex gap-2 ">
                                            <img src="/public/img/person-f-3.webp" alt="Profile Image" height={55} width={55} className='rounded-circle' />
                                            <div className='d-flex flex-column justify-content-center'>
                                                <p className='m-0 fw-bold'>Robert Johnson</p>
                                                <h4 className='font-14 text-secondary'>Marketing Director</h4>
                                            </div>
                                        </div>
                                    </div>


                                </ListGroup>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fs-6 text-secondary line-height'>
                                        Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">

                                    <div className="testimonial-profile p-4">
                                        <div className="d-flex gap-2 mb-3">
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                        </div>
                                        <div className="d-flex gap-2 ">
                                            <img src="/public/img/person-f-3.webp" alt="Profile Image" height={55} width={55} className='rounded-circle' />
                                            <div className='d-flex flex-column justify-content-center'>
                                                <p className='m-0 fw-bold'>Robert Johnson</p>
                                                <h4 className='font-14 text-secondary'>Marketing Director</h4>
                                            </div>
                                        </div>
                                    </div>


                                </ListGroup>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Card.Body className='p-4'>
                                    <Card.Title className='fs-6 text-secondary line-height'>
                                        Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">

                                    <div className="testimonial-profile p-4">
                                        <div className="d-flex gap-2 mb-3">
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                            <i className="bi bi-star-fill color-yellow font-14" />
                                        </div>
                                        <div className="d-flex gap-2 ">
                                            <img src="/public/img/person-f-3.webp" alt="Profile Image" height={55} width={55} className='rounded-circle' />
                                            <div className='d-flex flex-column justify-content-center'>
                                                <p className='m-0 fw-bold'>Robert Johnson</p>
                                                <h4 className='font-14 text-secondary'>Marketing Director</h4>
                                            </div>
                                        </div>
                                    </div>


                                </ListGroup>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide> <Card>
                            <Card.Body className='p-4'>
                                <Card.Title className='fs-6 text-secondary line-height'>
                                    Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                                </Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">

                                <div className="testimonial-profile p-4">
                                    <div className="d-flex gap-2 mb-3">
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                    </div>
                                    <div className="d-flex gap-2 ">
                                        <img src="/public/img/person-f-3.webp" alt="Profile Image" height={55} width={55} className='rounded-circle' />
                                        <div className='d-flex flex-column justify-content-center'>
                                            <p className='m-0 fw-bold'>Robert Johnson</p>
                                            <h4 className='font-14 text-secondary'>Marketing Director</h4>
                                        </div>
                                    </div>
                                </div>


                            </ListGroup>
                        </Card>
                        </SwiperSlide>
                        <SwiperSlide> <Card>
                            <Card.Body className='p-4'>
                                <Card.Title className='fs-6 text-secondary line-height'>
                                    Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.
                                </Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">

                                <div className="testimonial-profile p-4">
                                    <div className="d-flex gap-2 mb-3">
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                        <i className="bi bi-star-fill color-yellow font-14" />
                                    </div>
                                    <div className="d-flex gap-2 ">
                                        <img src="/public/img/person-f-3.webp" alt="Profile Image" height={55} width={55} className='rounded-circle' />
                                        <div className='d-flex flex-column justify-content-center'>
                                            <p className='m-0 fw-bold'>Robert Johnson</p>
                                            <h4 className='font-14 text-secondary'>Marketing Director</h4>
                                        </div>
                                    </div>
                                </div>


                            </ListGroup>
                        </Card>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </section>
    )
}

export default TestimonialsMain