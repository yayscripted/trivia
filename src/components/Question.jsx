import React, { Component } from 'react';
import { buildFirebase } from '../clients/firebase.js';
<<<<<<< HEAD

=======
>>>>>>> 214c78d884f04f195cdcf9f879c42885dece0999
// import components
import "../css/Question.css"; 


class Question extends Component {
  
  render() {
    return (
<<<<<<< HEAD
      <div className="qFormat"> 
        {this.props.ques};
=======
      <div className="qFormat">
        {this.props.question}
>>>>>>> 214c78d884f04f195cdcf9f879c42885dece0999
      </div>
    );
  }
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
