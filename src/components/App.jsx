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
    }
  }

  handleClick() {
    //const q = this.props.app[this.state.count];
    //if(q.choices[q.correct_choice_index] === ) {
      i++;
      this.setState({
        count : i,
        button0: "white",
        button1: "white",
        button2: "white",
        button3: "white"
      });
      console.log(i);
    //}
  }

  handleAnswer(index, correctIndex) {
    let obj = {};
    let iButtonClass;
    let cButtonClass;
    
    this.setState({
      button0 : "white",
      button1 : "white",
      button2 : "white",
      button3 : "white"
    });

    if(index === correctIndex) {
      cButtonClass = "button" + index;
      obj[cButtonClass] = "green"      
      this.setState(obj);
    }else{
      iButtonClass = "button" + index;
      cButtonClass = "button" + correctIndex;
      obj[iButtonClass] = "red";
      obj[cButtonClass] = "green";
      this.setState(obj);
    }
  }

    
  

  
  render() {
    const q = this.props.app[this.state.count];
    let ci = q.correct_choice_index;
    console.log(q);
    let button0 = "ansButton " + this.state.button0;
    let button1 = "ansButton " + this.state.button1;
    let button2 = "ansButton " + this.state.button2;
    let button3 = "ansButton " + this.state.button3;
    

    return (
      <div className="app">
        <h1 className="title"> Trivia!</h1>

        
        <h1> <Question ques={q.question_text}/> </h1>
        <div className="btnContainer">
          <div className="btnContainers">
            <button className={button0} onClick={() => this.handleAnswer(0, ci)}><Answer ans = {q.choices[0]}/></button>
            <button className={button1} onClick={() => this.handleAnswer(1, ci)}><Answer ans = {q.choices[1]}/></button>
          </div>
          <div className="btnContainers">
            <button className={button2} onClick={() => this.handleAnswer(2, ci)}><Answer ans = {q.choices[2]}/></button>
            <button className={button3} onClick={() => this.handleAnswer(3, ci)}><Answer ans = {q.choices[3]}/></button>
          </div>
        </div>

        <button  className="switch" onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default App;