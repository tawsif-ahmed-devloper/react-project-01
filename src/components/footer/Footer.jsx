import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import imgone from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="foot-one">
                                <img src={imgone} alt="" />
                                <p>We are always open to discuss your project and improve your online presence.</p>
                            </div>
                        </Col>
                        <Col lg={{ span: 3, offset: 2 }}>
                            <h2 className='foot-two'>Lets Talk!</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} className='foot-contact'>
                            <div className="con-one">
                                <h2>Email me at</h2>
                                <Link>contact@website.com</Link>
                            </div>
                            <div className="con-two">
                                <h2>Call us</h2>
                                <Link to="#">0927 6277 28525</Link>
                            </div>
                        </Col>
                        <Col lg={{ span: 2, offset: 1 }}>
                            <div className="icon-main">
                                <Link className='ami'><FaFacebook /></Link>
                                <Link className='tumi ms-3'> <FaTwitter /></Link>
                                <Link className='nsd ms-3'><FaInstagram /></Link>
                                <Link className='kori ms-3'><FaLinkedinIn /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='link-foot'>
                <Container>
                    <Row >
                        <Col lg={3} className='p-0'>
                            <div className="link-one">
                                <Link>Copyright 2022, Finsweet.com</Link>
                            </div>
                        </Col>
                        <Col lg={{ span: 5, offset: 4 }}>
                            <div className="link-two">
                                <Link to="/">Home</Link>
                                <Link to="/about">About us</Link>
                                <Link>Features</Link>
                                <Link>Pricing</Link>
                                <Link>FAQ</Link>
                                <Link>Blog</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer