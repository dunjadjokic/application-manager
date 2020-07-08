import React from 'react';
//import './App.css';
import NavigationBar from './NavigationBar';
import NewApp from './NewApp'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import ViewApps from './ViewApps'
import EditApp from './EditApp';
import { NotFound } from './NotFound';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Container>
          <Switch>
            <Route exact path="/view" component={ViewApps} />
            <Route exact path="/edit/:id" component={EditApp} />
            <Route exact path="/" component={NewApp} />
            <Route exact path="/not-found" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
