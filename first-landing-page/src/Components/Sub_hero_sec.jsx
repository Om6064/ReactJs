import Card from "./Card"


const Sub_hero_sec = () => {
  let CardInfo = [
    {
      img : "./src/Components/workflow-01.webp",
      badge : "Built-In-Tools",
      des : "it is describtion for built in tools"
    },
    {
      img : "./src/Components/workflow-02.webp",
      badge : "Scale Instasly",
      des : "it is describtion for Scale Instasly"
    },
    {
      img : "./src/Components/workflow-03.webp",
      badge : "Tailored Flows",
      des : "it is describtion for Tailored Flows"
    },
  ]
  return (
    <section>
        <div className="container">
          <div className="d-flex justify-content-between gy-3">
            {CardInfo.map((obj) => {
              return <Card img = {obj.img} badge = {obj.badge} des = {obj.des}></Card>
            })}
          </div>
        </div>
    </section>
  )
}

export default Sub_hero_sec