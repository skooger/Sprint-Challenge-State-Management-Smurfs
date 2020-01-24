import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';


class App extends Component {



  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf API!</h1>
        <SmurfForm />
        <SmurfList />
        
      </div>
    );
  }
}

export default App;
