import React, { Component } from 'react';
import { buildFirebase } from '../clients/firebase.js';

// import components
import "../css/Question.css"; 

let i = 0;

class Question extends Component {
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
    
    return (
      <div  className="qFormat" onClick={this.handleClick}> 
        {this.props.ques}
      </div>
    )};
}

export default Question;

//let quest = buildFirebase.database();
//let question = quest.ref("/questions");
//question.once("value").then(inputQuestion);

let inputQuestion = function(data) {
  const quest = data.val();
  console.log(quest);
}

class QuestionApi{
  constructor(questionText, choices, correctIndex, userId) {
    this.questionText = questionText;
    this.choices = choices;
    this.correctIndex = correctIndex;
    this.userId = userId;
  }

  getQuestionText() {
    return this.questionText;
  }
  
  getChoices() {
    return this.choices;
  }
  
  getCorrectIndex() {
    return this.correctIndex;
  }

  getUserId() {
    return this.userId;
  }
}
