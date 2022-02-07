import React from "react";
import { useNavigate } from "react-router-dom";



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

