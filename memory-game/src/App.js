import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-dark">
        <div class="container">
          <h1 class="navbar-brand text-primary">Memory Game</h1>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Difficulty
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container mt-5">
        <h2>THIS IS WHERE MEMORY BOXES GO</h2>
      </div>
    </div>
  );
}

export default App;
