import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div id='container'>
      <header>Hiiret & hiirimatot OY </header>
      <div>Tänne niitä hiiriä ja hiirimattoja kiitos</div>
      <div>
      <img src="../hiiri.jpg" alt="" />
      <p>tässä ois 1</p>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      
      </div>
      <footer>&copy; Tiimi 10</footer>
    </div>
  );
}

export default App;
