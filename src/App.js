import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap'
import WallDecos from './components/WallDecos';
import WeddingDecos from './components/WeddingDecos';
import Dreamcatcher from './components/Dreamcatcher';
import Others from './components/Others';
import Jewerly from './components/Jewerly';
import LifeTree from './components/LifeTree';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar  variant="dark" className="d-flex flex-column flex-lg-row border m-4 backgroundLight" >
          <NavbarBrand className="text-left d-flex" href="/"><img src="https://i.servimg.com/u/f19/18/20/68/28/th/img_2023.jpg"  alt="milhie création"/><h1 className="m-auto">&nbsp; Milhie Création</h1> </NavbarBrand>
          <Navbar.Text className=" w-100 text-right text-lg-center">Perles et fils d'aluminium...</Navbar.Text>
        </Navbar>
        <Menu/>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/milhieCreation/lifeTree">
              <LifeTree />
            </Route>
            <Route path="/milhieCreation/jewerly">
              <Jewerly />
            </Route>
            <Route path="/milhieCreation/dreamcatcher">
              <Dreamcatcher />
            </Route>
            <Route path="/milhieCreation/wallDecos">
              <WallDecos />
            </Route>
            <Route path="/milhieCreation/weddingDecos">
              <WeddingDecos />
            </Route>
            <Route path="/milhieCreation/Others">
              <Others />
            </Route>
          </Switch>
          <Footer />
        
      </Router>
    </div>
  );
}

export default App;
