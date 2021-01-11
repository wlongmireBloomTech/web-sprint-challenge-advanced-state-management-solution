import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a href="#" className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <SmurfDisplay />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default App;
