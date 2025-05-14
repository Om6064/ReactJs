import Archive from "./Components/Archive"
import Blog from "./Components/Blog"
import Case from "./Components/Case"
import Client from "./Components/Client"
import Header from "./Components/Header"
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
    </div>
  )
}

export default App