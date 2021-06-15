import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './views/home/Home';
import SearchDetail from './views/searchDetail/SearchDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Search-Detail" component={SearchDetail} />
      </Switch>
    </Router> 
  );
}

export default App;
