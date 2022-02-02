import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Set1 from "./Set1";
import Set2 from "./Set2";

const App = () => {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Set1" element={<Set1 />} />
          <Route path="/Set2" element={<Set2 />} />
        </Routes>
      </Router>

  );
};

export default App;

