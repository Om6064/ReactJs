import ButtonMain from "./ButtonMain";
import Card from "./Card";
import HeroLeft from "./HeroLeft";
import HeroRight1 from "./HeroRight";
import HeroSec from "./HeroSec";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="bg-color">
            <div className="container py-3">

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="m-0 fs-4 fw-semibold">Invent.</h1>
                    </div>
                    <div>
                        <ul className="d-flex list-unstyled align-items-center gap-4 mt-3 d-xl-flex d-none">
                            <li className="fw-semibold hover">Home</li>
                            <li className="fw-semibold hover">About</li>
                            <li className="fw-semibold hover">Service</li>
                            <li className="fw-semibold hover">Portfolio</li>
                            <li className="fw-semibold hover">Pricing</li>
                            <li className="fw-semibold hover">Team</li>
                            <li className="fw-semibold hover">Contact</li>
                        </ul>
                    </div>
                    <div className="d-flex gap-3">
                        <div>
                            <ButtonMain title={"Get Started"} padding={"2"} />
                        </div>
                        <div>
                            <span className="d-xl-none" onClick={handleShow}>
                                <i class="bi bi-list fs-2"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="list-unstyled align-items-center gap-4 mt-3">
                            <li className="fw-semibold hover my-4">Home</li>
                            <li className="fw-semibold hover my-4">About</li>
                            <li className="fw-semibold hover my-4">Service</li>
                            <li className="fw-semibold hover my-4">Portfolio</li>
                            <li className="fw-semibold hover my-4">Pricing</li>
                            <li className="fw-semibold hover my-4">Team</li>
                            <li className="fw-semibold hover my-4">Contact</li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>

            </div>
            <HeroSec left={<HeroLeft />} right={<HeroRight1 />} sub={<Card />} />
        </div>
    );
};

export default Header;
