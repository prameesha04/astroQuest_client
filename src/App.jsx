import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import QuizZone from "./Quiz/QuizZone";
import BoardGame from "./Game/BoardGame";
import InnovationHome from "./Innovation/InnovationHome";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<QuizZone />} />
        <Route path="/board-game" element={<BoardGame />} />
        <Route path="/innovation" element={<InnovationHome />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
