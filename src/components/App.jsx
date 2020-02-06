import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question"; 
import Answer from "./Answer";

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <h1><Question/></h1>
        <Answer/>
      </div>
    );
  }
}

export default App;