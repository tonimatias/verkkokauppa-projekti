import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
      <Navbar bg="dark" expand="lg">
          <Container fluid>
              <Navbar.Brand href="<App />"> <img src='../Gaming Gadgets.png' className='logo' alt='logo'></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '200px' }}
                      navbarScroll
                  >

                      <Nav.Link href="#action2" id='link'>Etusivu</Nav.Link>
                      <Nav.Link href="#" id='link'>Ostoskori</Nav.Link>
                      <NavDropdown title="Kategoriat" id="navbarScrollingDropdown">
                          <NavDropdown.Item href="< />">Hiiret</NavDropdown.Item>
                          <NavDropdown.Item href="< />">Näppäimistöt</NavDropdown.Item>
                          <NavDropdown.Item href="< />">Kuulokkeet</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                      <FormControl
                          type="search"
                          placeholder="Hae tuotteita"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="outline-success">Haku</Button>
                  </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}