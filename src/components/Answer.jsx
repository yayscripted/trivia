import React, { Component } from 'react';
// import components
import "../css/Answer.css"; 

var answers = ["Kazuto Kirigaya", "Dazai Osamu", "Tetsuya Kuroko", "Lelouch Vi Britania"]

class Answer extends Component {
  

  render() {
    return (
    <div className = "aContainer">
        <button className="a1">
            Kazuto Kirigaya  
        </button>

        <button className="a2">
            Dazai Osamu  
        </button>

        <button className="a3">
            Tetsuya Kuroko  
        </button>

        <button className="a4">
            Lelouch Vi Britania  
        </button>
    </div>
    );
  }
}

export default Answer;