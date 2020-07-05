import React from 'react';
//import './App.css';
import Navbar from './components/Navbar';
import NewApp from './components/NewApp'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <NewApp />
          </Route>
          <Route path="/edit">
            edit
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
