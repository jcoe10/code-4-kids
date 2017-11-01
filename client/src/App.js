import React, { Component } from 'react'; // import logo from './logo.svg'; 
import './App.css'; 
import Kids from "./pages/web-pages";


class App extends Component { 
  render() { return (

<div className="container">
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
       <button class="btn btn-outline-success navbar-toggler" data-toggle="collapse" type="button">s
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">Features</a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>
  </div>
  <Kids />
</div>
); } } export default App;