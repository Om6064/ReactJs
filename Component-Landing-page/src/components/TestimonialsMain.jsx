import Title from "./Title"

const TestimonialsMain = () => {
    let arr = [
        {
            des:"Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.",
            img:"/public/img/person-f-3.webp",
            name:"Jessica Parker",
            role:"Marketing Strategist"
        },
        {
            des:"Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.",
            img : "/public/img/person-m-1.webp",
            name : "Daniel Mitchell",
            role : "Creative Director"
        },
        {
            des:"Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.",
            img : "/public/img/person-f-6.webp",
            name : "Rebecca Taylor",
            role : "Lead Developer"
        },
        {
            des:"Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.",
            img : "/public/img/person-m-6.webp",
            name : "Marcus Johnson",
            role : "UI/UX Designer"
        }
    ]
  return (
    <section className="container">
        <div className="py-5">
            <Title main="Testimonials" sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"/>
        </div>
        <div>
            {arr.map((item) => {

            })}
        </div>
    </section>
  )
}

export default TestimonialsMain