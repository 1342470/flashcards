import React from "react";
import { useNavigate } from "react-router-dom";
import logo from './res/1_AJk55yyiWpZfDHlS2BPj9g.jpeg';
import './App.css';

const Home = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container" role="region">
                <img src={logo} id="WelcomeImg" alt="Welcome background" />
                <div className="welcomeText">
                    <h1>Flashcards</h1>
                    <p>A quick a easy way to remember for a upcoming test click on the following options to go to the quiz try to reach the score to win but be carefull miss to many quesions and your lose</p>
                    <div class="topnav" role="navigation" aria-label="navigation bar" id="myTopnav">
                        <button onClick={() => navigate("/Set1")}>Go to first set</button>
                        <button onClick={() => navigate("/Set2")}>Go to first set</button>
                    </div> 
                </div>
            </div>
        </>
    );
};

export default Home;


