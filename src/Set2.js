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



const q1 = new QuestionsItem("When was the first computer invented? A: 1999. B: 1943. C: 1975. D: 2000 ", "B");
const q2 = new QuestionsItem(" When was the first 1 GB disk drive released in the world? A: 1999. B: 1989. C: 1985. D: 1980 ", "D");
const q3 = new QuestionsItem("Which popular company designed the first CPU? A: Intel. B: AMD. C: Microsoft. D: Apple", "A");
const q4 = new QuestionsItem("What is the computer's main circuit board called? A: Fatherboard. B: ComputerBoard. C: Motherboard. D: MainBoard", "C");
const q5 = new QuestionsItem("Which information storage is used to store short-term running programs and data in a computer? A: GPU. B: CPU. C: VRAM. D: RAM", "D");
const q6 = new QuestionsItem("Which part of the computer fetches, decodes, and executes the programming instructions? A: CPU. B: GPU. C: GUI. D: RAM", "A");
const q7 = new QuestionsItem("What is the name of the first operating system designed by Microsoft? A: Windows. B: DOS. C: MS-DOS. D: CMD", "C");
const q8 = new QuestionsItem("Which company invented the USB port? A: Intel. B: AMD. C:Microsoft. D:Apple", "A");
const q9 = new QuestionsItem("Question: 'Firefox', 'Chrome', and 'Safari' are what type of computer software? A: Word Processer. B: GUI. C: Web Browser. D: app", "C");
const q10 = new QuestionsItem("What type of applications are available with a source code to modify and add features to it? A: OpenSource.  B: closedSource. C: OutSouced. D: Sourced", "A");


let questionList = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];


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
  if (clicked === correct) {
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
  if (skips !== 0) {
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
      <h1>FlashCard set two</h1>


      <div id="score"></div>
      <div id="skips"></div>
      <div id="numOfGuesses"></div>
      <div id="questions_view">This set will test your knowledge on a variety of computing subjects. Once your ready select the start below </div>
      <button id="startbtn" onClick={() => startgame()}>Start</button>
      <div class="buttonElementsContainer">
        <button id="Abtn" onClick={() => checkAnswer("A")}>A</button>
        <button id="Bbtn" onClick={() => checkAnswer('B')}> B</button >
        <button id="Cbtn" onClick={() => checkAnswer('C')}> C</button >
        <button id="Dbtn" onClick={() => checkAnswer('D')}> D</button >
        <button id="skipbtn" onClick={() => skip()}>Skip Question</button></div>
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
  document.getElementById('Abtn').style.visibility = "visible";
  document.getElementById('Bbtn').style.visibility = "visible";
  document.getElementById('Cbtn').style.visibility = "visible";
  document.getElementById('Dbtn').style.visibility = "visible";
  document.getElementById('skipbtn').style.visibility = "visible";

}

function setUI() {
  setscore();
  setSkips();
  setQuesses();
  changeQuestion();
}
