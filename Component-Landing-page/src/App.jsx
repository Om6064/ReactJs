import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSec from './components/HeroSec';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import Service from './components/Service';
import ServiceLeft from './components/ServiceLeft';
import ServiceRight from './components/ServiceRight';
import VisionLeft from './components/VisionLeft';
import VisionRight from './components/VisionRight';
import Vistion from './components/Vistion';
import FaqLeft from './components/FaqLeft';


const App = () => {
  return (
    <>
      <Header />
      <HeroSec left={<AboutLeft/>} right={<AboutRight/>}/>
      <Service/>
      <HeroSec left={<ServiceLeft/>} right={<ServiceRight/>}/>
      <Vistion left={<VisionLeft/>} right={<VisionRight/>}/>
      <HeroSec left={<FaqLeft/>} right={<ServiceRight/>}/>
    </>
  )
}

export default App