import "./our.css"
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";


const Our = ({img}) => {
    return (
        <>
        <Col lg={4}>
        <div className="">
                <Card className='our-main'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="p-0">
                        <Card.Title className="taxt-one">19 Jan 2022</Card.Title>
                        <Card.Text className="text-two">
                           How one Webflow user grew his single person consultancy from $0-100K in 14 months
                        </Card.Text>
                        <p className="text-three">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <Link className="text-four">Read More <FaArrowRightLong className="ms-2"/></Link>
                    </Card.Body>
                </Card>
            </div>
        </Col>
            


        </>
    )
}

export default Our