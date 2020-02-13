import React, { Component } from 'react';
import { buildFirebase } from '../clients/firebase.js';
// import components
import "../css/Question.css"; 


class Question extends Component {
  
  render() {
    return (
      <div className="qFormat">
        {this.props.question}
      </div>
    );
  }
}

export default Question;

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
