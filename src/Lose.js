import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Home = (props) => {
    const navigate = useNavigate();

    return (
        <>
        <h1>You Lost</h1>
        <p>Sorry unfornatly you didn't score enough. Would you like to you like to try again?</p>
        <button onClick={() => navigate("/Set1")}>Play again?</button>
        <button onClick={() => navigate(-2)}>Go Back</button>
</>

    );
};

export default Home;


