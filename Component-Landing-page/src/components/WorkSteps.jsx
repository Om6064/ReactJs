import { Container, Row, Col, Card } from 'react-bootstrap';
import Title from './Title';
import WorkStepsCard from './WorkStepsCard';

const WorkSteps = () => {
    const arr = [
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
    return (
        <div className="process-container">
            <Title main="How We Work" sub="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
            <div className='mt-5'>
                {arr.map((items,idx) => {
                    return <WorkStepsCard key={idx} idx={idx} title={items.title} des = {items.description} icon={items.icon}/>
                })}
            </div>


            {/* <div className="content">
                    <span className="step-number">02</span>
                    <div className="card-body">
                        <div className="step-icon">
                            <i className="bi bi-gear" />
                        </div>
                        <div className="step-content">
                            <h3>Development Phase</h3>
                            <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.</p>
                        </div>
                    </div>
                </div> */}
        </div>

    );
};

export default WorkSteps;
