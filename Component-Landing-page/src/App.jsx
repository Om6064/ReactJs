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
import FaqRight from './components/FaqRight';
import Team from './components/Team';
import TestimonialsMain from './components/TestimonialsMain';
import Contect from './components/Contect';
import Footer from './components/Footer';
import WorkSteps from './components/WorkSteps';


const App = () => {
  return (
    <>
      <Header />
      <HeroSec left={<AboutLeft/>} right={<AboutRight/>}/>
      <WorkSteps/>
      <Service/>
      <HeroSec left={<ServiceLeft/>} right={<ServiceRight/>}/>
      <Vistion left={<VisionLeft/>} right={<VisionRight/>}/>
      <HeroSec left={<FaqLeft/>} right={<FaqRight/>}/>
      <Team/>
      <TestimonialsMain/>
      <Contect/>
      <Footer/>
    </>
  )
}

export default App