import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSec from './components/HeroSec';
import AboutLeft from './components/AboutLeft';
import AboutRight from './components/AboutRight';
import Service from './components/Service';


const App = () => {
  return (
    <>
      <Header />
      <HeroSec left={<AboutLeft/>} right={<AboutRight/>}/>
      <Service/>
    </>
  )
}

export default App