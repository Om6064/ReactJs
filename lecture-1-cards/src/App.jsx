import Card from "./components/Card"

const App = () => {
  let aboutDes = "this is about Describtion ... !"
  let serviceDes = "this is Service Describtion ... !"
  let contactDes = "this is Contact Describtion ... !"
  let contectImage = "https://illustoon.com/photo/7817.png"
  let serviceImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHAuTgW4gtpxRP5MBgtEXD-qx2bIFCQ-Ugg&s"
  let aboutImage = "https://static.vecteezy.com/system/resources/previews/007/932/867/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg"
  return (
    <div>
        <div className="container">
            <div className="row">
              <div className="col-4 py-5">
                <Card Title = "About" des = {aboutDes} color="danger" image = {aboutImage}></Card>
              </div>
              <div className="col-4 py-5">
                <Card Title = "Services" des = {serviceDes} color="primary" image = {serviceImage}></Card>
              </div>
              <div className="col-4 py-5">
                <Card Title = "Contact" des = {contactDes} color="warning" image = {contectImage}></Card>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App