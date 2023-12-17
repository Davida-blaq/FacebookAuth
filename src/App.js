import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Page from "./components/Page";

// Functional component App
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/page" element={<Page />} /> 
          <Route path="/feed" element={<Feed />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;