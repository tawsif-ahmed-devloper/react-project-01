import React from 'react'
import "./testimonials.css"
import profil from "../../assets/profile.png"
import { Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <>
    <section className='testimonials'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="testi-one">
                        <h2>What our clients say about us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="testi-two">
                        <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                        <img src={profil} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Testimonials