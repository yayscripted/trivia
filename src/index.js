import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';

import {buildFirebase} from './clients/firebase.js';

var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = Object.values(data.val());
ReactDOM.render(<App app={questions}/>, document.getElementById('root'));
// Do something with the questions
});

