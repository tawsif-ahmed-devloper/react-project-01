import React from 'react'
import "./ourblog.css"

import { Col, Container, Row } from 'react-bootstrap'
import Our from '../reused/Our'
import imgone from "../../assets/apple one.png"
import imgtwo from "../../assets/apple three.png"
import imgthree from "../../assets/apple two.png"

const Ourblog = () => {
  return (
    <>
    <section className='ourblog'> 
        <Container>
            <Row>
                <Col>
                <h2 className='ourh'>Our blog</h2>
                </Col>
            </Row>
            <Row>
                <Our img={imgone}/>
                <Our img={imgtwo}/>
                <Our img={imgthree}/>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ourblog