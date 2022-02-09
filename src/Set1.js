import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

var score = 0;
var numOfQuesses = 3;
var currentQuestion = 0;
var skips = 3;
var questions_view = document.getElementById('questions_view');


class QuestionsItem {
  /**
   * @param quesions shows the value of the question.
   * @param answer  defines answer either being true or false.
   */
  constructor(question, answer) {
    this.question = question;
    this.answer = answer
  }

  setText() {
    return this.question;
  }

  checkAnswer() {
    return this.answer;
  }
};



const q1 = new QuestionsItem("The acronym cd-rom stands for Compact disc read only memory.", "True");
const q2 = new QuestionsItem("A computer can directly understand a high-level language", "False");
const q3 = new QuestionsItem("The term for all kinds of harmful software is called an virus", "True");


let questionList = [q1, q2, q3];


function countdown() {
  if (numOfQuesses === 0) {
    currentQuestion = (currentQuestion + 1) % questionList.length;
    changeQuestion();
    if (numOfQuesses === 0) {
      numOfQuesses = 4;
    }
  }
}

//checks answer from use when the user clicker either the true or valse button it will send a value to this funciton to compear to the anwser inside the questions array
function checkAnswer(clicked) {
  var correct = questionList[currentQuestion].checkAnswer();
  if (clicked == correct) {
    currentQuestion = (currentQuestion + 1) % questionList.length;
    score++;
    numOfQuesses = 3;
    changeQuestion();

  } else {
    countdown();
    numOfQuesses--;
    setQuesses();
    score--;

  }
  setscore();
}

/**
 * allows the player to skip a question if the user selects this option it will move to the next question and take one of the value of skip until the player has no skips remaining
 */
function skip() {
  if (skips != 0) {
    currentQuestion = (currentQuestion + 1) % questionList.length;
    changeQuestion();
    skips--;
    setSkips();
  }


}

const Contact = (props) => {
  const navigate = useNavigate();

  return (

    <>
      <h1>FlashCard set one</h1>


      <div id="score"></div>
      <div id="skips"></div>
      <div id="numOfGuesses"></div>
      <div id="questions_view">This set will test your knowledge on a variety of computing subjects. Once your ready select the start below </div>
      <button id = "startbtn" onClick={() => startgame()}>Start</button>
      <button id = "truebtn" onClick={() => checkAnswer("True")}>True</button>
      <button id = "falsebtn" onClick={() => checkAnswer('False')}> False</button >
      <button id = "skipbtn" onClick={() => skip()}>Skip Question</button>
      <hr></hr>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};
export default Contact;


function changeQuestion() {
  document.getElementById('questions_view').innerText = questionList[currentQuestion].question;
}

function setscore() {
  document.getElementById('score').innerText = "Current score:" + score;
}

function setSkips() {
  document.getElementById('skips').innerText = "Skips left:" + skips;
}

function setQuesses() {
  document.getElementById('numOfGuesses').innerText = "Quesses left:" + numOfQuesses;
}

function startgame() {

  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', setUI());
  } else {  // `DOMContentLoaded` has already fired
    setUI();
  }
  document.getElementById('startbtn').style.visibility = "hidden";
  document.getElementById('truebtn').style.visibility = "visible";
  document.getElementById('falsebtn').style.visibility = "visible";
  document.getElementById('skipbtn').style.visibility = "visible";
  
}

function setUI() {
  setscore();
  setSkips();
  setQuesses();
  changeQuestion();
}
