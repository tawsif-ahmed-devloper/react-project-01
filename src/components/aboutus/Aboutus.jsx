import "./aboutus.css"
import imgone from "../../assets/grup.png"







import { Col, Container, Row } from 'react-bootstrap'

const Aboutus = () => {
  return (
    <>
    <section className='aboutus'>
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="abu-text">
                        <h3>About us</h3>
                        <h2>Our designs solve problems</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>
                <Col lg={{ span: 6, offset: 1 }}>
                    <div className="">
                        <img src={imgone} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>


    </>
  )
}

export default Aboutus