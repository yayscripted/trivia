import React, { Component } from 'react';
import { buildFirebase } from '../clients/firebase.js';
// import components
import "../css/Question.css"; 


class Question extends Component {
  
  render() {
    return (
      <div className="qFormat">
        Which of these roles did Mamoru Miyano do? 
      </div>
    );
  }
}

export default Question;

let quest = buildFirebase.database();
let question = quest.ref("/questions");
question.once("value").then(inputQuestion);

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