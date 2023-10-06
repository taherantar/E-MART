import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <NavLink className='fw-bold nav-link fs-4' to="/">E-MART</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className=' navbar-nav mx-auto mb-2 mb-lg-0'
                        style={{ maxHeight: '250px' }}
                        navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                    </Nav>
                    <NavLink to="/login">
                        <Button
                            className='m-1' variant="outline-success"> <FontAwesomeIcon icon={faRightToBracket} /> Login
                        </Button>
                    </NavLink>
                    <NavLink to="/register">
                        <Button
                            className='m-1' variant="outline-success"> <FontAwesomeIcon icon={faUserPlus} /> Register
                        </Button>
                    </NavLink>
                    <NavLink to="/cart">
                        <Button
                            className='m-1' variant="outline-success"> <FontAwesomeIcon icon={faCartShopping} /> Cart (0)
                        </Button>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;