import TeamCard from "./TeamCard"
import Title from "./Title"

const Team = () => {
    let arr = [
        {
            img : "img/person-m-1.webp",
            name : "Daniel Mitchell",
            role : "Creative Director"
        },
        {
            img : "img/person-f-6.webp",
            name : "Rebecca Taylor",
            role : "Lead Developer"
        },
        {
            img : "img/person-m-6.webp",
            name : "Marcus Johnson",
            role : "UI/UX Designer"
        },
        {
            img : "img/person-f-3.webp",
            name : "Jessica Parker",
            role : "Marketing Analyst"
        },
    ]
    return (
        <>
            <section className="bg-color py-5">
                <div className="container">
                    <div className="pb-5">
                        <Title main="Team" sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
                    </div>
                    <div>
                        <div className="row gy-5">
            
                                {arr.map((items,idx) => {
                                    return <TeamCard key={idx} img={items.img} name={items.name} role={items.role}/>
                                })}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team