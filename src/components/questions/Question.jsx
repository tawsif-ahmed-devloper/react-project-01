import React from 'react'
import "./question.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Plus from '../reused/Plus'
import { GoPlus } from "react-icons/go";
import { GoX } from "react-icons/go";



const Question = () => {
    return (
        <>
            <section className='question'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="question-one">
                                <h3>Frequently asked questions</h3>
                                <Link>Contact us for more info</Link>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Row>
                                <Plus title="How much time does it take?" pragrap="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." number="01" icon={<GoX />}/>
                                <div className="much-one"><Plus title="What is your class naming convention?" number="02"  icon={<GoPlus />}/></div>
                                <div className="much-one"><Plus title="How do you communicate?" number="03"  icon={<GoPlus />}/></div>
                                <div className="much-one"><Plus title="I have a bigger project. Can you handle it?" number="04"  icon={<GoPlus />}/></div>
                                <div className="much-one"><Plus title="What is your class naming convention?" number="05"  icon={<GoPlus />}/></div>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Question