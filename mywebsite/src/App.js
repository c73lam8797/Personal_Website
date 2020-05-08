import React from 'react';
import './CSS/App.css';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Main from './Main';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" component = {Main} exact/>
            <Route path="/about" component = {Main.AboutMe} />
        </Switch>
    </div>
  );
}

export default App;
