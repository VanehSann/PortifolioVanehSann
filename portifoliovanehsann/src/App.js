import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        <Route path="/*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
