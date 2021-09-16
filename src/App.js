
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
