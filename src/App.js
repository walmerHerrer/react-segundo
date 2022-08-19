import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Menu from './Components/Menu';
import MiFooter from './Components/MiFooter';
import Cabecera from './Components/Cabecera';

function App() {
  return (
    <div className="container">
      {/* Cabecera */}
      <Cabecera/>
      {/* Menu */}
      <Menu />
      {/* Main y imagen */}
      <div className="row">
        <div className="col-7 border border-1">
          <br></br>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/nosotros' component={Nosotros} />
            </Switch>
          </Router>
        </div>
        <div className="col-5 justify-content-center border border-1">
          <div className="d-flex justify-content-center">
            <img alt='soy goku' src="https://cdn.pixabay.com/photo/2020/09/26/07/34/goku-5603384_1280.png" height="600"/>;
          </div>
        </div>
      </div>
      {/* footer */}
      <MiFooter/>
    </div>
  );
};
export default App;
