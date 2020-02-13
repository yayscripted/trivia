import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question"; 
import Answer from "./Answer";

class App extends Component {

  render() {
    console.log(this.props.data[0].question_text);
    return (
      <div className="app">
        Trivia!
    <h1> <Question question={this.props.data[0].question_text}/> </h1>
        <Answer/>
      </div>
    );
  }
}

export default App;