import ContactForm from "./ContactForm"
import ContectCard from "./ContectCard"
import Title from "./Title"

const Contect = () => {
    let arr = [
        {
            icon: "bi bi-geo-alt",
            title: "Our Address",
            des: "2847 Rainbow Road, Springfield, IL 62701, USA"
        },
        {
            icon: "bi bi-telephone",
            title: "Contact Number",
            des: "Mobile: +1 (555) 123-4567 Email: info@example.com"
        },
        {
            icon: "bi bi-clock",
            title: "Opening Hour",
            des: "Monday - Saturday: 9:00 - 18:00 Sunday: Closed"
        },
    ]


    return (
        <>
            <div className="container">
                <div className="my-5">
                    <Title main="Contact" sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
                </div>
                <div className="row justify-content-between g-4 mb-4">
                    {arr.map((item, index) => (
                        <ContectCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            des={item.des}
                        />
                    ))}
                </div>
                <div>
                    <ContactForm/>
                </div>


            </div>
        </>
    )
}

export default Contect