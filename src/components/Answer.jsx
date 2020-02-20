import React, { Component } from 'react';
// import components
import "../css/Answer.css"; 

class Answer extends React.Component {
  render() {
    let ans = [];
    
    for (var i=0; i < 4; i++) {
      ans.push(<button><Answers rain={this.props.app[this.state.count].choices[i]} /></button>);
    }
    return ans;
  }
}
class Answers extends React.Component {
  render() {
    return (<div className="answers">{this.props.rain}</div>);  }
}

export default Answer;