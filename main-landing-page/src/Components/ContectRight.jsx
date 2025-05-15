import React from 'react'

const ContectRight = () => {
    return (
   <div className="container mt-5">
  <div className="card shadow rounded">
    <div className="card-body p-4">
      <form>
        <div className="row g-4">
          {/* First Name */}
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="Your first name..." required />
          </div>
          {/* Last Name */}
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last first name..." required />
          </div>
          {/* Email Address */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Your email..." required />
          </div>
          {/* Phone Number */}
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
            <input type="text" className="form-control" id="phone" placeholder="Type phone number..." required />
          </div>
          {/* Message */}
          <div className="col-12">
            <label htmlFor="message" className="form-label fw-semibold">Messages</label>
            <textarea className="form-control" id="message" rows={4} placeholder="Type messages..." required defaultValue={""} />
          </div>
          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary px-4">
              Send Messages <i className="bi bi-send ms-2" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>




    )
}

export default ContectRight