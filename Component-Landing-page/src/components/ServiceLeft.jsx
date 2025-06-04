import Button from "./Button"

const ServiceLeft = () => {
  return (
       <div className="container">
            <div className="py-5">
                <p className="mb-3 color-main fw-semibold text-uppercase">Our innovative services</p>
                <h3 className="fs-2 fw-bold mb-4">Our customers excel in technology management</h3>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt diam et gravida consequat. Sed nec mauris quis lacus commodo lobortis. Suspendisse euismod commodo sem, in finibus purus bibendum et. Morbi eu neque sed velit convallis vestibulum a vel odio.
                </p>
                <Button title="Explore All Service" padding = "3"/>
            </div>
        </div>    
  )
}

export default ServiceLeft