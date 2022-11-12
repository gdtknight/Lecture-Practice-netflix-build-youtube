import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
      } else {
        console.log("something wrong");
        // User is signed out
        // ...
      }
    });

    return unsubscribe;
  });
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
