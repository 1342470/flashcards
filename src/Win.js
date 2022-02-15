import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Home = (props) => {
    const navigate = useNavigate();

    return (
        <>
        <h1>You Won</h1>
        <p>Congratulations you won would you like to play again</p>
        <button onClick={() => navigate("./Set1")}>Play again?</button>
        <button onClick={() => navigate(-2)}>Go Back</button>
</>

    );
};

export default Home;


