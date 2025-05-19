import React from 'react'
import "./bann.css"
import { Col, Container, Row } from 'react-bootstrap'
import bani from "../../assets/ban.png"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const Bann = () => {
    return (
        <>
            <section id='banner'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="ban-text">
                                <h2>Building stellar websites for early startups</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <Link className='view-one'>View our work</Link>
                                <Link className='view-two ms-2'>View Pricing <FaArrowRightLong  className='ms-2'/></Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={bani} alt="" />

                        </Col>
                    </Row>


                </Container>


            </section>

        </>
    )
}

export default Bann