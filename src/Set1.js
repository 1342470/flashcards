import React from "react";
// import "./QuestionItem";
import { useNavigate } from "react-router-dom";

var score = 0;
var numOfQuesses =3;
var currentQuestion = 0;
var skips = 3;

// const q1 = new QuestionsItem("The acronym cd-rom stands for Compact disc read only memory.","True");
// const q2 = new QuestionsItem("A computer can directly understand a high-level language","False");
// const q3 = new QuestionsItem("The term for all kinds of harmful software is called an virus","True");
// const q4 = "test"

// let questionList = [q1,q2,q3,q4];

// console.log(questionList[0]);


//checks answer from use when the user clicker either the true or valse button it will send a value to this funciton to compear to the anwser inside the questions array
function checkAnswer(clicked){
  alert(clicked);
}


const Contact = (props) => {
  const navigate = useNavigate();
  
  return (

    <>
      <h1>FlashCard set one</h1>

     

      <h2>TEST</h2>

      <button onClick={() =>checkAnswer("true")}>True</button>
      <button onClick={() =>checkAnswer("false")}>False</button> 
      <hr></hr>
      
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Contact;

