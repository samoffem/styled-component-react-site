import React from 'react';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Footer} from './components'
import HomePage from './Pages/HomePage/HomePage';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
      
  );
}

export default App;
