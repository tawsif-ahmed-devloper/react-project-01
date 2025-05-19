import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./menu.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';



const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className='header' >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto menu">
                            <Nav.Link>
                                <Link to="/">HOme</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about">About us</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="#">Features</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="#">Pricing</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="#">FAQ</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="#">Blog</Link>
                            </Nav.Link>
                            <div className="contact ms-4">
                                <Link>Contact us</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu