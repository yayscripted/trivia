import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question"; 
import Answer from "./Answer";

class App extends Component {

  render() {
    
    const q = this.props.app[0].question_text;
    console.log(q);
    return (
      <div className="app">
        Trivia!
        <h1> <Question ques={q}/> </h1>
        <Answer/>
      </div>
    );
  }
}

export default App;