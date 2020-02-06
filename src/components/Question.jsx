import React, { Component } from 'react';
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

<<<<<<< HEAD
export default Question; 
=======
export default Question;

class QuestionApi{
  constructor(questionText, choices, correctIndex, userId) {
    this.questionText = questionText;
    this.choices = choices;
    this.correctIndex = question;
    this.userId = userId;
  }

  getQuestionText() {
    return questionText;
  }
  
  getChoices() {
    return choices;
  }
  
  getCorrectIndex() {
    return correctIndex;
  }

  getUserId() {
    return userId;
  }
}
>>>>>>> d521f5163138c0cc0c6605741df3dc25b88c1448
