import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./project.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import cardone from "../../assets/Card one.png"
import cardtwo from "../../assets/Card two.png"
import cardthree from "../../assets/Card three.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const Project = () => {
    return (
        <>
            <section className='project'>
                <Container>
                    <Row className='pro-one mb-5'>
                        <Col lg={4}>
                            <h2>View our projects</h2>
                        </Col>
                        <Col lg={{ span: 2, offset: 6 }}>
                            <div className="ms-5">
                                <Link>View More <HiOutlineArrowNarrowRight /></Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className="proimg-one">
                                <img src={cardone} alt="" />
                                <div className="pro-color">
                                    <p>Workhub office Webflow <br /> Webflow Design</p>
                                    <Link>View project<FaArrowRightLong className='ms-2' /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Row>
                                <Col>
                                    <div className="pro-bg">
                                        <img src={cardtwo} alt="" />
                                        <div className="probg-color">
                                            <Link>View project<FaArrowRightLong className='ms-2' /></Link>
                                        </div>
                                    </div>
                                    
                                </Col>
                                <Col>
                                    <div className="pro-last">

                                        <img src={cardthree} alt="" />
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Project