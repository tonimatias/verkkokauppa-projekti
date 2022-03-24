import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div id='body'>

      < Header />

      <section id='content'>
        <h3>Tarjoukset</h3>


        <Carousel id='carousel' variant='dark'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../hiiri.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Hiiri 1</h3>
              <p>iha saatanan leveä hiiri</p>
              <div id='hinta'><span id='vanha-hinta'>5,95</span> 4,95</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="../hiiri.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>hiiri2</h3>
              <p>sdfsdgjsdf</p>
              <div id='hinta'><span id='vanha-hinta'>5,95</span> 4,95</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="../keyboard1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Näppäimistö</h3>
              <p>edfghds</p>
              <div id='hinta'><span id='vanha-hinta'>139,95</span> 119,95</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div><h3>Suosituimmat tuotteet</h3></div>

        <div id='cards'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id='kuva' src="../hiiri.jpg" />
            <Card.Body>
              <Card.Title>Hiiri 1</Card.Title>
              <Card.Text>
                Älyttömän hyvä hiiri kaikkeen maholliseen näpyttelyyn!<br></br>
                <div id='hinta'>59,95</div>
              </Card.Text>
              <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri1'></img></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id='kuva' src="../hiiri.jpg" />
            <Card.Body>
              <Card.Title>Hiiri 2</Card.Title>
              <Card.Text>
                Budjetti luokan hiiri. Ajaa asiansa välillä.<br></br>
                <div id='hinta'>5,95</div>
              </Card.Text>
              <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='hiiri2'></img></Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id='kuva' src="../keyboard1.jpg" />
            <Card.Body>
              <Card.Title>Näppäimistö</Card.Title>
              <Card.Text>
                Maailman paras peli näppis! Et tule löytämään parempaa!<br></br>
                <div id='hinta'>119,95</div>
              </Card.Text>
              <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='näppäimistö1' ></img></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" id='kuva' src="../keyboard1.jpg" />
            <Card.Body>
              <Card.Title>Näppäimistö2</Card.Title>
              <Card.Text>
                Maailman 2.  paras peli näppis! Hyvä se on, muttei paras. <br></br>
                <div id='hinta'>79,90</div>
              </Card.Text>
              <Button variant="primary"><img className='shoppingcartIcon' src='../cart.png' title='Lisää ostoskoriin' alt='näppäimistö2'></img></Button>
            </Card.Body>
          </Card>
        </div>

      </section>

      <Footer />

    </div>
  );
}

export default App;
