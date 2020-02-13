import React, { Component } from 'react';
// import components
import "../css/Answer.css"; 

var answers = ["Osamu Dazai", "Sebastian Michaelis", "Lelouch Vi Britania", "Riku Nanase"];
class Answer extends React.Component {
  render() {
    let ans = [];
    {console.log(answers.length);}
    for (var i=0; i<answers.length; i++) {
      ans.push(<button><Answers rain={answers[i]} /></button>);
    }
    return ans;
  }
}
class Answers extends React.Component {
  render() {
    return (<div className="answers">{this.props.rain}</div>);  }
}

export default Answer;