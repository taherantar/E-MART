import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function SiteNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand className='fw-bold fs-4' href="/">E-MART</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className=' navbar-nav mx-auto mb-2 mb-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <Button className='m-1' variant="outline-success"> <FontAwesomeIcon icon={faRightToBracket} /> Login</Button>
                    <Button className='m-1' variant="outline-success"> <FontAwesomeIcon icon={faUserPlus} /> Register</Button>
                    <Button className='m-1' variant="outline-success"> <FontAwesomeIcon icon={faCartShopping} /> Cart (0)</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;