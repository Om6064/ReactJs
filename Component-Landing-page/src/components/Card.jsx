import SubHero from "./SubHero";

const Card = () => {
    let arr = [
        {
            title: "Rapid Deployment",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
            icon: "bi bi-gear"
        },
        {
            title: "Advanced Security",
            des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            icon: "bi bi-window"
        },
        {
            title: "Dedicated Support",
            des: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            icon: "bi bi-headset"
        },
    ];
    return (
        <div className="mt-5">
            <div className="row justify-content-between">
                {arr.map((item, index) => (
                    <SubHero
                        key={index}
                        title={item.title}
                        des={item.des}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Card