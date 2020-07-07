import React from 'react';
//import './App.css';
import Navbar from './components/Navbar';
import NewApp from './components/NewApp'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/">
              <NewApp />
            </Route>
            <Route path="/edit">
              edit
          </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
