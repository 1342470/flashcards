import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Set1 from "./Set1";
import Set2 from "./Set2";
import Win from "./Win";
import Lose from "./Lose";

const App = () => {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Set1" element={<Set1 />} />
          <Route path="/Set2" element={<Set2 />} />
          <Route path="/Win" element={<Win />} />
          <Route path="/Lose" element={<Lose />} />
        </Routes>
      </Router>

  );
};

export default App;

