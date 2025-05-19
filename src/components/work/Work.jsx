import React from 'react'
import "./work.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from "react-icons/cg";
import imgone from "../../assets/pointer one.png"
import imgtwo from "../../assets/pointer two.png"
import imgthree from "../../assets/pointer three.png"
import imgfour from "../../assets/pointer four.png"

const Work = () => {
  return (
    <>
      <section id='works'>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="wark-main">
                <h3>How we work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <Link>Get in touch with us <CgArrowLongRight className='ms-2 wor-i' /></Link>

              </div>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <Row>
                <Col lg={6}>
                  <div className="work-img">
                    <img src={imgone} alt="" />
                    <h2>Strategy</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="work-img">
                    <img src={imgfour} alt="" />
                    <h2>Strategy</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="work-img">
                    <img src={imgthree} alt="" />
                    <h2>Strategy</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="work-img">
                    <img src={imgtwo} alt="" />
                    <h2>Strategy</h2>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
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

export default Work