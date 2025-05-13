import Faq from "./Components/Faq"
import Header from "./Components/Header"
import Hero_sec from "./Components/Hero_sec"
import Left_side from "./Components/Left_side"
import Left_side2 from "./Components/Left_side2"
import Left_side3 from "./Components/Left_side3"
import Right_side from "./Components/Right_side"
import Right_side2 from "./Components/Right_side2"
import Right_side3 from "./Components/Right_side3"
import Sub_hero_sec from "./Components/Sub_hero_sec"
import Title from "./Components/Title"


const App = () => {
  let web_heading = "The modern landing page for"
  let sub_heading = "React developers"
  let web_des = "The easiest way to build a React landing page in seconds."
  let q1 = "What Is Frenk AI ?"
  return (
    <div>
      <Header name="Starter" menu1="Github" menu2="Sign In" />
      <Hero_sec web_heading={web_heading} sub_heading={sub_heading} web_des={web_des}></Hero_sec>
      <Sub_hero_sec></Sub_hero_sec>
      <div className="container py-5">
        <h2 className='text-center'>Your title here</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
      </div>
      <Title left={<Left_side />} right={<Right_side />} />
      <Title left={<Left_side2 />} right={<Right_side2 />} />
      <Title left={<Left_side3 />} right={<Right_side3 />} />
      <Faq q1 = {q1}/>
    </div>
  )
}

export default App