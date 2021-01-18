import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
        <Menu/>
        <Switch>
            <Route exact path="/milhieCreation">
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
