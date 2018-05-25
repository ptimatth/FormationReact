import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './home/home';
import Params from './params/params';
import Hierarchical from './hierarchical/hierarchical';
import About from './about/about';
import Header from './header/header';
import Footer from './footer/footer';
import './App.css';
import { Contact } from './contact/contact';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact/:contact_id" component={Contact}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App