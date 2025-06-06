import Card from 'react-bootstrap/Card';

const SubHero = (props) => {
    return (
        <div className="col-md-4 mb-4">
            <Card className='hover-img rounded-4 p-3'>
                <Card.Body>
                    <div className="d-flex gap-3">
                        <div className='bg-circle1 rounded-circle d-flex align-items-center justify-content-center' style={{ width: 50, height: 50 }}>
                            <i className={`${props.icon} fs-3`}></i>
                        </div>
                        <div>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.des}</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SubHero;
