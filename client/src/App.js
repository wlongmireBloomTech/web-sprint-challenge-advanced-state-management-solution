import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfDisplay />
        <AddForm />
      </div>
    );
  }
}

export default App;
