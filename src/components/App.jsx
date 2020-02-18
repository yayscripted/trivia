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
      i++;
      this.setState({
       count : i,
      });
    }

  render() {
    const q = this.props.app[this.state.count].question_text;
    return (
      <div className="app" onClick={this.handleClick}>
        Trivia!
        <h1> <Question ques={q}/> </h1>
        <Answer/>
      </div>
    );
  }
}

export default App;