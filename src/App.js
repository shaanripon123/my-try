import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/Home/About/About';
import Review from './components/Review/Review';
import Navbar from './components/Home/Navbar/Navbar';
import Wk from './components/Wk/Wk';
import Contact from './components/Contact/Contact';

function App() {
  return (
   <div>
          <Navbar></Navbar>
    <Router>
       <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/wk">
          <Wk></Wk>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/review">
          <Review></Review>
          </Route>
          <Route path="/contact">
          <Contact> </Contact>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
