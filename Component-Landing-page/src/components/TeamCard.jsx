import Card from 'react-bootstrap/Card';
const TeamCard = (props) => {
    return (
        <div className="col-3">
            <Card className='shadow border-0'>
                <Card.Img variant="top" src={`${props.img}`} />
                <Card.Body>
                    <Card.Title className='text-center mb-2 fw-bold'>{props.name}</Card.Title>
                    <div className='d-flex justify-content-center'>
                        <Card.Text className='bg-color p-2 rounded-pill color-main fw-semibold font-14 role d-flex align-items-center justify-content-center'>
                        {props.role}
                    </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard