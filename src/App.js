import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Library from "./components/Library"
import Mybooks from "./components/Mybooks"



function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/library" exact component={Library} />
      <Route path="/mybooks" exact component={Mybooks} />
    </Router>
  );
}

export default App;
