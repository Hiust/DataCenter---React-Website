import React from 'react';
import Navbar from './components/base/navbar/Navbar';
import Footer from './components/base/footer/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
