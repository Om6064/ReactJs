
import { Form, Row, Col, Button } from 'react-bootstrap';


const ContactForm = () => {
  return (
    <div className="container py-5">
      <Form>
        <Row className="g-3">
          <Col md={6}>
            <div className="d-flex border rounded overflow-hidden bg-white">
              <div className="form-icon-box">
                <i class="bi bi-person"></i>
              </div>
              <Form.Control type="text" placeholder="Your name*" className="border-0 p-3" />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex border rounded overflow-hidden bg-white">
              <div className="form-icon-box">
                <i className="bi bi-envelope"></i>
              </div>
              <Form.Control type="email" placeholder="Email address*" className="border-0 p-3" />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex border rounded overflow-hidden bg-white">
              <div className="form-icon-box">
                <i className="bi bi-phone"></i>
              </div>
              <Form.Control type="tel" placeholder="Phone number*" className="border-0 p-3" />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex border rounded overflow-hidden bg-white">
              <div className="form-icon-box">
                <i className="bi bi-list"></i>
              </div>
              <Form.Select className="border-0 p-3">
                <option>Select service*</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
              </Form.Select>
            </div>
          </Col>
          <Col xs={12}>
            <div className="d-flex border rounded overflow-hidden bg-white">
              <div className="form-icon-box align-items-center d-flex justify-content-center pt-2">
                <i className="bi bi-chat-dots"></i>
              </div>
              <Form.Control as="textarea" rows={5} placeholder="Write a message*" className="border p-3-0" />
            </div>
          </Col>
          <Col xs={12} className="text-center pt-3">
            <Button type="button" className="btn-submit p-3 fw-semibold">
              Submit Message
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
