import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={Projects} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
