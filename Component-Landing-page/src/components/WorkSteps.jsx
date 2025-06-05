import { Container, Row, Col, Card } from 'react-bootstrap';
const steps = [
    {
        title: "Project Planning",
        description: "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        icon: "bi bi-pencil-square"
    },
    {
        title: "Development Phase",
        description: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.",
        icon: "bi bi-gear"
    },
    {
        title: "Testing & QA",
        description: "Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.",
        icon: "bi bi-check-circle"
    },
    {
        title: "Launch & Support",
        description: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt.",
        icon: "bi bi-rocket"
    }
];

const WorkSteps = () => {
    return (
        <Container className="work-steps-section text-center">
            
            <Row className="gy-4 justify-content-center">
                {steps.map((step, index) => (
                    <Col md={7} key={index} className=''>
                        <Card className="step-card p-4 color-main d-flex flex-row align-items-center">
                            <div className="step-number">{`0${index + 1}`}</div>
                            <div className="step-icon">
                                <i className={`${step.icon} icon-inner`}></i>
                            </div>
                            <div className="step-content text-start">
                                <Card.Title className="step-title">{step.title}</Card.Title>
                                <Card.Text className="step-description">{step.description}</Card.Text>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WorkSteps;
