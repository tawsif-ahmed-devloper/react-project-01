import React from 'react'
import "./contactfrom.css"
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Contactfrom = () => {
    return (
        <>
            <section className='contactfrom'>
                <Container>
                    <Row>
                        <Col lg={6} className='p-0'>
                            <div className="cfrom-ome">
                                <div className="one-fo">
                                    <h4>Building stellar websites for early startups</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={6} className='p-0'>
                            <div className="send-main">
                                <h2>Send inquiry</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className="send-imput">
                                    <Form>
                                        <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
                                            <Form.Control type="email" placeholder="Your Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="emil" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-5" controlId="formGroupPassword">
                                            <Form.Control type="link" placeholder="Paste your Figma design URL" />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="from-btn">
                                    <button>Send an Inquiry</button>
                                    <Link>Get in touch with us <FaArrowRightLong className='ms-2'/></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Contactfrom