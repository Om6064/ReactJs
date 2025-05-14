import React from 'react'
import Title from './Title'
import Card2 from './Card2'

const Blog = () => {
     let arr = [
        {
            img: "https://zoyothemes.com/tailwind/evea/assets/images/blog/05.jpg",
            title: "Spotlight — Equinox Collection by Shane Griffin",
            desc: "As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...",
            pimg: "https://zoyothemes.com/tailwind/evea/assets/images/user/client-05.jpg",
            name:"Credon catla",
            date:"August 2"
        },
        {
            img: "https://zoyothemes.com/tailwind/evea/assets/images/blog/07.jpg",
            title: "Random Explorations with Cinema 4D and Redshift",
            desc: "As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...",
            pimg: "https://zoyothemes.com/tailwind/evea/assets/images/user/client-03.jpg",
            name:"Credon catla",
            date:"August 3"
        },
        {
            img: "https://zoyothemes.com/tailwind/evea/assets/images/blog/04.jpg",
            title: "Step by step guide for conducting usability",
            desc: "As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...",
            pimg: "https://zoyothemes.com/tailwind/evea/assets/images/user/client-05.jpg",
            name:"Credon catla",
            date:"August 8"
        },
        
    ]
  return (
    <section className='pt-5'>
        <div className="container">
             <Title main="Blog" des="Check the latest news about our company in our blog." subDes="Ligula risus auctor tempus magna feugit lacinia." align="center"/>

        <div className='row pt-4'>
            {
                arr.map((item) => {
                    return <Card2 img={item.img} title = {item.title} desc={item.desc} pimg = {item.pimg} name={item.name} date={item.date}/>
                })
            }
        </div>
         
        </div>
    </section>
  )
}

export default Blog