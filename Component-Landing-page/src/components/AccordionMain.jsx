import Accordion from 'react-bootstrap/Accordion';
const AccordionMain = (props) => {
    return (
        <div className='faq-item'>

                <Accordion className=''>
                <Accordion.Item eventKey={`${props.idx}`} className='mb-3 border-0'>

                    <div className='m-0'>
                        <Accordion.Header>{props.qus}</Accordion.Header>
                    </div>

                    <Accordion.Body>
                        {props.ans}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
         
        </div>
    )
}

export default AccordionMain