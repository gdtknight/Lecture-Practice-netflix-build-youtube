import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={(!user ? (<LoginScreen />) : (<HomeScreen />))} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
