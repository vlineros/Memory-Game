import React from "react";
import "./App.css";
import CardHolder from "./components/cardHolder";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <h1 className="navbar-brand text-primary">Memory Game</h1>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Difficulty
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-flex mt-5 mb-5" />
      <CardHolder />
    </div>
  );
}

export default App;
