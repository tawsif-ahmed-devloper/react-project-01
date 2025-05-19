import React from 'react'
import { Col } from 'react-bootstrap'
import "./cardreused.css"




const CardReused = ({img, title}) => {
  return (
    <>
    <Col lg={4}>
        <div className="card-main">
          <img src={img} alt="" />
          <h4>{title}</h4>
          <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
    </Col>
    
    </>
  )
}

export default CardReused