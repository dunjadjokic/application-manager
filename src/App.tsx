import React from 'react';
//import './App.css';
import Navbar from './components/Navbar';
import NewApp from './components/NewApp'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import ViewApps from './components/ViewApps'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/view">
              <ViewApps />
            </Route>
            <Route path="/edit/:id">
              Edit
            </Route>
            <Route path="/">
              <NewApp />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
