import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Introduction from "./components/Introduction";
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* Pass a default selectedAnimal value for testing */}
          <Route path="/introduction" element={<Introduction selectedAnimal="Hippo" />} />
          <Route path="/mainpage" element={<MainPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
