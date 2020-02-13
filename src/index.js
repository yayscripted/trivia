import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';

import {buildFirebase} from './clients/firebase.js';

var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = Object.values(data.val());
<<<<<<< HEAD
ReactDOM.render(<App app={questions}/>, document.getElementById('root'));
// Do something with the questions
});
=======
// Do something with the questions
ReactDOM.render(<App data={questions}/>, document.getElementById('root'));
});

>>>>>>> 214c78d884f04f195cdcf9f879c42885dece0999

