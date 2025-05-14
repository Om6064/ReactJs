

const SliderContent = (props) => {
     var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    return (
        <div className="swiper-slide flex-column">
            <p className='fs-3'>
                {props.des}
            </p>
            <h3>{props.name}</h3>
            <p className='fs-5'>
                {props.deg}
            </p>

        </div>
        )
}

export default SliderContent