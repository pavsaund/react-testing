import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import { TodosPage } from './Todos/TodosPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SplashScreen} />
          <Route path="/t/" component={TodosPage} />
        </Switch>
      </Router>
    </div>
  );
}

function SplashScreen() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link to="/t/">Go to TodoApp</Link>
    </header>
  );
}

export default App;
