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
<<<<<<< HEAD
        <h1><Question/></h1>
=======
        <h1> <Question/> </h1>
>>>>>>> d521f5163138c0cc0c6605741df3dc25b88c1448
        <Answer/>
      </div>
    );
  }
}

export default App;