
import Title from './Title'

import Card from './Card'

const Client = () => {
    let arr = [
        {
            title: "Spotlight — Equinox Collection by Shane Griffin",
            desc: "As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...",
            pimg: "https://zoyothemes.com/tailwind/evea/assets/images/user/client-05.jpg",
            name: "Credon catla",
            degi: "August 2"
        },
        {
            title: "Random Explorations with Cinema 4D and Redshift",
            desc: "As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...",
            pimg: "https://zoyothemes.com/tailwind/evea/assets/images/user/client-03.jpg",
            name: "Credon catla",
            degi: "August 3"
        },
        {
            title: "Step by step guide for conducting usability",
            desc: "As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...",
            pimg: "https://zoyothemes.com/tailwind/evea/assets/images/user/client-05.jpg",
            name: "Credon catla",
            degi: "August 8"
        },

    ]
    return (
        <section className='py-5'>
            <div className="container">
                <Title main="Our Clients" des="Stories From Our Customers" subDes="" align="center" />

                <div className='row py-4'>
                    {
                        arr.map((item) => {
                            return <Card title={item.title} desc={item.desc} pimg={item.pimg} name={item.name} date={item.date} />
                        })
                    }
                </div>
          
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <div className='circle border border-secondary rounded-circle d-flex align-items-center justify-content-center'>
                            <i className="bi bi-chevron-left fw-bold" />

                        </div>
                        <div className='circle border border-secondary rounded-circle d-flex align-items-center justify-content-center'>
                            <i className="bi bi-chevron-right fw-bold" />

                        </div>
                    </div>
                </div>
          
        </section>
    )
}

export default Client