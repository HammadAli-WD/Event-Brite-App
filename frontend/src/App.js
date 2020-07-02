import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import HomePage from './components/HomePage';

class App extends React.Component {
  state ={
    
  } 
  render(){
    return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/backoffice">

        </Route>
      </Switch>
    </Router>
  )};
}

export default App;
