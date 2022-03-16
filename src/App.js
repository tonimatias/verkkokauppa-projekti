import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



function App() {
  return (
    <div id=''>
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
              <Nav.Link href="#" id='link'>Yhteystiedot</Nav.Link>
              <NavDropdown title="Kategoriat" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
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
      <div><h3>Suosituimmat tuotteet</h3></div>
      <div id='cards'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../hiiri.jpg" />
          <Card.Body>
            <Card.Title>Hiiri 1</Card.Title>
            <Card.Text>
              Älyttömän hyvä hiiri kaikkeen maholliseen näpyttelyyn!
            </Card.Text>
            <Button variant="primary">Katso tarkemmin</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../hiiri.jpg" />
          <Card.Body>
            <Card.Title>Hiiri 2</Card.Title>
            <Card.Text>
              Budjetti luokan hiiri.
            </Card.Text>
            <Button variant="primary">Katso tarkemmin</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../keyboard1.jpg" />
          <Card.Body>
            <Card.Title>Näppäimistö</Card.Title>
            <Card.Text>
              Maailman paras peli näppis!
            </Card.Text>
            <Button variant="primary">Katso tarkemmin</Button>
          </Card.Body>
        </Card>
      
      </div>
      <footer>&copy; Tiimi 10</footer>
    </div>
  );
}

export default App;
