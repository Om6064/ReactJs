import SubService from "./SubService"

const ServiceRight = () => {
  let arr = [
    {
      icon: "bi bi-code-square",
      title: "Software Engineering",
      des: "Lorem ipsum dolor sit amet consectetur adipiscing."
    },
    {
      icon: "bi bi-graph-up",
      title: "Business Analytics",
      des: "Lorem ipsum dolor sit amet consectetur adipiscing."
    },
    {
      icon: "bi bi-phone",
      title: "Mobile Solutions",
      des: "Lorem ipsum dolor sit amet consectetur adipiscing."
    },
    {
      icon: "bi bi-gear",
      title: "Tech Infrastructure",
      des: "Lorem ipsum dolor sit amet consectetur adipiscing."
    },
  ]
  return (
    <div>

      {arr.map((items,idx) => {
        return <SubService key={idx} icon={items.icon} title={items.title} des={items.des} />
      })}
    </div>

  )
}

export default ServiceRight