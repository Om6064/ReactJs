import ServiceCard from "./ServiceCard"
import Title from "./Title"

const Service = () => {
  let arr = [
    {
      title: "Custom Web Development",
      des: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "bi bi-code-slash"
    },
    {
      title: "Mobile App Solutions",
      des: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.",
      icon: "bi bi-phone-fill"
    },
    {
      title: "UI/UX Design",
      des: "Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      icon: "bi bi-palette2"
    },
    {
      title: "Digital Marketing",
      des: "Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
      icon: "bi bi-bar-chart-line"
    },
    {
      title: "Cloud Computing",
      des: "Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.",
      icon: "bi bi-cloud-check"
    },
    {
      title: "Cybersecurity Solutions",
      des: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et. Proin eget tortor risus.",
      icon: "bi bi-shield-lock"
    },
  ]
  return (
    <div>
      <div className="container">
        <Title main="Services" sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
        <div className="row justify-content-between mt-5">
          {arr.map((items,idx) => {
            return <ServiceCard key={idx} title={items.title} des={items.des} icon={items.icon} />
          })}
        </div>
      </div>

    </div>
  )
}

export default Service