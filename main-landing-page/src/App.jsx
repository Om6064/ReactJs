import Archive from "./Components/Archive"
import Blog from "./Components/Blog"
import Case from "./Components/Case"
import Client from "./Components/Client"
import ContactLeft from "./Components/ContactLeft"
import ContectRight from "./Components/ContectRight"
import Faq from "./Components/Faq"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HeroSec from "./Components/HeroSec"
import Service2 from "./Components/Service2"
import Services from "./Components/Services"
import Trust from "./Components/Trust"

const App = () => {
  return (
    <div>
        <Header />
        <Services/>
        <Archive/>
        <Case/>
        <Service2/>
        <Trust/>
        <Blog/>
        <Client/>
        <Faq/>
        <HeroSec left={<ContactLeft/>} right={<ContectRight/>}/>
        <Footer/>
    </div>
  )
}

export default App