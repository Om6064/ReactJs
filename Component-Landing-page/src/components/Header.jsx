import Button from "./Button";
import Card from "./Card";
import HeroLeft from "./HeroLeft";
import HeroRight1 from "./HeroRight";
import HeroSec from "./HeroSec";


const Header = () => {
    return (
        <div className="bg-color">
            <div className="container my-3">

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1>Invent.</h1>
                    </div>
                    <div>
                        <ul className="d-flex list-unstyled align-items-center gap-4">
                            <li className="fw-semibold hover">Home</li>
                            <li className="fw-semibold hover">About</li>
                            <li className="fw-semibold hover">Service</li>
                            <li className="fw-semibold hover">Portfolio</li>
                            <li className="fw-semibold hover">Pricing</li>
                            <li className="fw-semibold hover">Team</li>
                            <li className="fw-semibold hover">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <Button title={"Get Started"} padding={"2"} />
                    </div>
                </div>

            </div>
            <HeroSec left={<HeroLeft />} right={<HeroRight1 />} sub={<Card />} />
        </div>
    );
};

export default Header;
