import './App.css';
import Contain from './elementer/Container';
import ScanQr from './elementer/scanQr';
import Nav from './elementer/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Card, Button} from '@material-ui/core';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Hjem} />
      <Route path="/scanqrcode" component={ScanQr} />
      <Route path="/opretqr" component={Contain} />
      </Switch>
    </div>
    </Router>
  );
}

const Hjem = () => (
  <div>
    <Container className="con1start">
      <h3 className="intro" >Denne app er lavet som udvidelse til en flaskeautomat. Når man har pantet sine flasker, vil der være mulighed for at få en qr code, og gennem den donere til et selvvalgt verdensmål.</h3>
      <Card>
    <h4>Læs om FN's 17 verdensmål her: </h4>
    <Button className="but1start" variant="contained" color="primary" href="https://www.verdensmaalene.dk/maal">Tryk her</Button>
    </Card>
    </Container>
  </div>
);

export default App;
