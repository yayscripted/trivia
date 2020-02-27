import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question"; 
import Answer from "./Answer";

let i = 0;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count : i,
      color : "white",
      cn: "answer"
    }
  }

  handleClick() {
    //const q = this.props.app[this.state.count];
    //if(q.choices[q.correct_choice_index] === ) {
      i++;
      this.setState({
        count : i,
        color: "white",
        cn : "answer"
      });
      console.log(i);
    //}
  }

  handleAnswer = (index, correctIndex) => {
    //const answer = event.target.value;
    console.log(index);
    if(index === correctIndex) {
      this.setState({
        color:"green"
      })
    }else{
      this.setState({
        color:"red"
      })

    }
    
    //}
  }

    
  

  
  render() {
    const q = this.props.app[this.state.count];
    const ci = q.correct_choice_index;
    console.log(q);
    return (
      <div className="app">
        Trivia!

        
        <h1> <Question ques={q.question_text}/> </h1>
        <div className="btnContainer">
          <div className="btnContainers">
            <button className="ansButton" onClick={() => this.handleAnswer(0, ci)}><Answer ans = {q.choices[0]}/></button>
            <button className="ansButton" onClick={() => this.handleAnswer(1, ci)}><Answer ans = {q.choices[1]}/></button>
          </div>
          <div className="btnContainers">
            <button className="ansButton" onClick={() => this.handleAnswer(2, ci)}><Answer ans = {q.choices[2]}/></button>
            <button className="ansButton" onClick={() => this.handleAnswer(3, ci)}><Answer ans = {q.choices[3]}/></button>
          </div>
        </div>

        <button  className="switch" onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default App;