import { Col } from "react-bootstrap"
import "./plus.css"
import { GoX } from "react-icons/go";





const Plus = ({title, number, pragrap, icon}) => {
    return (
        <>
            <Col lg={12}>
                <div className="plus-main">
                    <h2>{number} <span>{title}</span></h2>
                    <p>{pragrap}</p>
                    <div className="icon">
                        {icon}
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Plus