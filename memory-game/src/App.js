import React from "react";
import "./App.css";
import MemoryCard from "./components/memoryCard.js";

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
      <div className="container-flex mt-5" />
      <div className="container">
        <MemoryCard
          imageUrl="https://assets.popbuzz.com/2017/45/nancy-stranger-things--1509979319-view-1.jpeg"
          clicked="false"
        />
        <MemoryCard
          imageUrl="https://nypdecider.files.wordpress.com/2019/07/stranger-things-3-will-wise.jpg?quality=90&strip=all&w=646&h=431&crop=1"
          clicked="false"
        />
        <MemoryCard
          imageUrl="https://i.kinja-img.com/gawker-media/image/upload/s--sYb9O5vT--/c_scale,f_auto,fl_progressive,q_80,w_800/zdmdbibfppxbfqbmtc0p.png"
          clicked="false"
        />
        <MemoryCard
          imageUrl="https://images.hellogiggles.com/uploads/2016/08/05064304/dustin.jpg"
          clicked="false"
        />
      </div>
    </div>
  );
}

export default App;
