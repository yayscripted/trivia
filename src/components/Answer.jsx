import React, { Component } from 'react';
// import components
import "../css/Answer.css"; 


class Answers extends React.Component {
  render() {
    return (<div className="answers">{this.props.ans}</div>);  }
}

export default Answers;