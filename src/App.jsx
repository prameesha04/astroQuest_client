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
import GameZone from "./Game/GameZone";
import InnovationZone from "./Innovation/InnovationZone";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";


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
        <Route path="/game" element={<GameZone />} />
        <Route path="/innovation" element={<InnovationZone />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/quizzes"
          element={
            <AdminProtectedRoute>
              <AdminQuizManager />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/todos"
          element={
            <AdminProtectedRoute>
              <AdminTodo />
            </AdminProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
