import React from 'react'
import Title from './Title'
import Scard from './Scard'

const Services = () => {
    let arr = [
        {
            icon: "bi bi-globe",
            title: "Website Pro",
            desc: "We build professional responsive websites optimized for the most popular search engines."
        },
        {
            icon: "bi bi-cart",
            title: "E-Commerce",
            desc: "Increase your sales with an incredible online store, full of features and functionality."
        },
        {
            icon: "bi bi-phone",
            title: "Mobile Apps",
            desc: "Follow the global trend and create your revolutionary mobile app built with the best technologies."
        },
        {
            icon: "bi bi-stack",
            title: "Web Application",
            desc: "We build applications for different purposes using technologies that allow you more security."
        },
        {
            icon: "bi bi-phone",
            title: "Mobile Apps",
            desc: "Follow the global trend and create your revolutionary mobile app built with the best technologies."
        },
        {
            icon: "bi bi-stack",
            title: "Web Application",
            desc: "We build applications for different purposes using technologies that allow you more security."
        },
        {
            icon: "bi bi-bar-chart-line",
            title: "Digital Marketing",
            desc: "We work to promote your brand in partnership with the best marketing platforms today."
        },
        {
            icon: "bi bi-lightbulb",
            title: "Brand Creation",
            desc: "We create your brand thinking about your target audience using design techniques."
        }
    ]
    return (
        <section className='pt-4'>
            <div className="container">
                <Title main="Services" des="Build a customer - centric marketing strategy" subDes="Ligula risus auctor tempus magna feugit lacinia." align="center"/>

                <div className="py-5  row gy-5">
                    {arr.map((item) => {
                        return <Scard icon={item.icon} title={item.title} desc={item.desc} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services