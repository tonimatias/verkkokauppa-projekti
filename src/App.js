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
        <p>tässä ois 1</p>

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
      
      </div>
      <footer>&copy; Tiimi 10</footer>
    </div>
  );
}

export default App;
