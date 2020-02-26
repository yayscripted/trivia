import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question"; 
import Answer from "./Answer";

let i = 0;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count : i}
  }

  handleClick() {
    //const q = this.props.app[this.state.count];
    //if(q.choices[q.correct_choice_index] === ) {
      i++;
      this.setState({
        count : i,
      });
      console.log(i);
    //}
   
  }

  render() {
    const q = this.props.app[this.state.count];
    return (
      <div className="app">
        Trivia!
        <button  onClick={() => this.handleClick()}>Click</button>
        <h1> <Question ques={q.question_text}/> </h1>
        <button><Answer ans = {q.choices[0]}/></button>
        <button><Answer ans = {q.choices[1]}/></button>
        <button><Answer ans = {q.choices[2]}/></button>
        <button><Answer ans = {q.choices[3]}/></button>
    
      </div>
    );
  }
}

export default App;