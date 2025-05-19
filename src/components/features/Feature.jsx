import React from 'react'
import "./feature.css"
import { Col, Container, Row } from 'react-bootstrap'
import CardReused from '../reused/CardReused'
import one from "../../assets/Icon.png"
import two from "../../assets/Icon (1).png"
import three from "../../assets/Icon (2).png"
import four from "../../assets/Icon (3).png"
import five from "../../assets/Icon (4).png"
import six from "../../assets/Icon (5).png"



const Feature = () => {
    return (
        <>
            <section className='feature'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={2} className='feat-one'>
                            <h3>Features</h3>
                        </Col>
                    </Row>
                     <Row className='justify-content-center'>
                        <Col lg={6} className='feat-two'>
                            <h4>Design that solves problems, one product at a time</h4>
                        </Col>
                    </Row>
                    <Row>
                        <CardReused img={one} title="Uses Client First"/>
                        <CardReused img={two} title="Two Free Revision Round"/>
                        <CardReused img={three} title="Template Customization"/>
                        <CardReused img={four} title="24/7 Support"/>
                        <CardReused img={five} title="Quick Delivery"/>
                        <CardReused img={six} title="Hands-on approach"/>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Feature