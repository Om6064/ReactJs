const Footer = () => {
    return (
        <footer className="footer mt-5 py-5 bg-light text-dark">
            <div className="container">
                <div className="row gy-4">
                    {/* Company Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold pb-4 fs-3">MyWebsite</h5>
                        <p className="font-14 line-height">A108 Adam Street<br />New York, NY 535022</p>
                        <p className="font-14 line-height mb-4"><strong>Phone:</strong> +1 5589 55488 55<br />
                            <strong>Email:</strong> info@example.com</p>
                        <div className="d-flex gap-3">
                            <a href="#" className="social-icon"><i className="bi bi-twitter" /></a>
                            <a href="#" className="social-icon"><i className="bi bi-facebook" /></a>
                            <a href="#" className="social-icon"><i className="bi bi-instagram" /></a>
                            <a href="#" className="social-icon"><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="fw-bold">Useful Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
            
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h6 className="fw-bold">Our Services</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>
              
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="fw-bold">Hic solutastep</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Molestiae accusamus iure</a></li>
                            <li><a href="#">Excepturi dignissimos</a></li>
                            <li><a href="#">Suscipit distinctio</a></li>
                            <li><a href="#">Dilecta</a></li>
                            <li><a href="#">Sit quas consectetur</a></li>
                        </ul>
                    </div>
                 
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="fw-bold">Nobis illum</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Ipsam</a></li>
                            <li><a href="#">Laudantium dolorum</a></li>
                            <li><a href="#">Dinera</a></li>
                            <li><a href="#">Trodelas</a></li>
                            <li><a href="#">Flexo</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
        
                <div className="text-center small">
                    <p className="mb-0">© Copyright <strong>MyWebsite</strong>. All Rights Reserved</p>
                    <p>Designed by <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a></p>
                </div>
            </div>
        </footer>


    )
}

export default Footer