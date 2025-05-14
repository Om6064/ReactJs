import React from 'react'
import SliderContent from './SliderContent'

const SliderMain = () => {
    

    let swiperArr = [
        {
            des: "It is A describtion for Aryan Patel What Is Degignation ANd etc..",
            name: "Aryan Patel",
            deg: 'cO-fOUNDER And CEO'
        },
        {
            des: "It is A describtion for Aryan Patel What Is Degignation ANd etc..",
            name: "Aryan Patel",
            deg: 'cO-fOUNDER And CEO'
        },
        {
            des: "It is A describtion for Aryan Patel What Is Degignation ANd etc..",
            name: "Aryan Patel",
            deg: 'cO-fOUNDER And CEO'
        },

    ]

    
    return (
       <div className="main-swiper">
         <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                {swiperArr.map((item) => {
                    return <SliderContent des={item.des} name={item.name} deg={item.deg} />
                })}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
       </div>
    )
}

export default SliderMain