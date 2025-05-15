import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-dark py-5 text-white">
  <div className="container">
    <div className="row">
      {/* Logo & Contact Info */}
      <div className="col-md-3 mb-4">
        <h4 className="mb-4">
          <img src="https://zoyothemes.com/tailwind/evea/assets/images/logo.png" alt="" className='h-10'/>
        </h4>
        <p className="small mb-3">This may include the company's address, phone number, email address, and links to social media profiles.</p>
        <p className="small mb-2"><i className="bi bi-envelope me-2" /> Info@zoyothemes.com</p>
        <p className="small"><i className="bi bi-telephone me-2" /> (888) 253 145 148</p>
      </div>
      {/* Company */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">COMPANY</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="footer-link">About</a></li>
          <li><a href="#" className="footer-link">Services</a></li>
          <li><a href="#" className="footer-link">Portfolio</a></li>
          <li><a href="#" className="footer-link">Blog</a></li>
          <li><a href="#" className="footer-link">Contact</a></li>
        </ul>
      </div>
      {/* Product */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">PRODUCT</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="footer-link">Services</a></li>
          <li><a href="#" className="footer-link">About Us</a></li>
          <li><a href="#" className="footer-link">News &amp; Stories</a></li>
          <li><a href="#" className="footer-link">Roadmap</a></li>
        </ul>
      </div>
      {/* Important Links */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold mb-3">IMPORTANT LINKS</h6>
        <ul className="list-unstyled small">
          <li><a href="#" className="footer-link">Our Journeys</a></li>
          <li><a href="#" className="footer-link">Roadmap</a></li>
          <li><a href="#" className="footer-link">Pricing Plans</a></li>
          <li><a href="#" className="footer-link">Privacy Policy</a></li>
          <li><a href="#" className="footer-link">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
    <hr className="border-light" />
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p className="small mb-2 mb-md-0">2025© Evea – <a href="https://zoyothemes.com" className="footer-link">Zoyothemes.com</a></p>
      <div>
        <a href="#" className="text-white me-3"><i className="bi bi-facebook" /></a>
        <a href="#" className="text-white me-3"><i className="bi bi-google" /></a>
        <a href="#" className="text-white me-3"><i className="bi bi-twitter" /></a>
        <a href="#" className="text-white me-3"><i className="bi bi-github" /></a>
        <a href="#" className="text-white"><i className="bi bi-slack" /></a>
      </div>
    </div>
  </div>
</footer>



  )
}

export default Footer