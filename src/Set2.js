import React from "react";
import { useNavigate } from "react-router-dom";

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

const q1 = new QuestionsItem("test.", "answer");
const q2 = new QuestionsItem("which show has a programming language named after", "monty python");
const q3 = new QuestionsItem("The term for all kinds of harmful software is called an virus", "True");


let questionList = [q1, q2, q3];


// console.log(questionList[currentQuestion]);

function changeQuestion() {
  document.getElementById('questions_view').innerText = questionList[currentQuestion].question;
}

function setscore() {
  document.getElementById('score').innerText = "Current score:" + score;

}

function setSkips() {
  document.getElementById('skips').innerText = "Skips left:" +skips;
}

function setQuesses() {
  document.getElementById('numOfGuesses').innerText = "Quesses left:" + numOfQuesses;
}


function countdown() {
  if (numOfQuesses == 0) {
    currentQuestion = (currentQuestion + 1) % questionList.length;
    changeQuestion();
    if (numOfQuesses == 0) {
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
  }


}

const Contact = (props) => {
  const navigate = useNavigate();

  return (

    <>
      <h1>FlashCard set one</h1>


      <div id="score">Score:</div>
      <div id="skips">Skips left:</div>
      <div id="numOfGuesses">Quesses left:</div>
      <div id="questions_view">Question</div>


      <button onClick={() => checkAnswer("True")}>True</button>
      <button onClick={() => checkAnswer("False")}>False</button>
      <button onClick={() => skip()}>Skip Question</button>
      <hr></hr>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};
export default Contact;

setscore();
setSkips();
setQuesses();
changeQuestion();