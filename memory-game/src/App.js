import React from "react";
import "./App.css";
import CardHolder from "./components/cardHolder";
// import MemoryCard from "./components/memoryCard.js";
// import BillyImage from "./assets/images/Billy_STMG.webp"; //"https://images2.minutemediacdn.com/image/upload/c_crop,h_1076,w_1916,x_133,y_0/f_auto,q_auto,w_1100/v1553289783/shape/mentalfloss/577785-netflix.jpg"
// import BobImage from "./assets/images/Bob_STMG.jpg"; //"https://media1.popsugar-assets.com/files/thumbor/-C2xy7eesrnZTCz7Qppnas6YZgg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/10/31/845/n/1922283/af4abe9e59f8cc637ace57.04537866_edit_img_image_17268548_1509477153/i/Reactions-Bob-Stranger-Things-Season-2.jpg"
// import DustinImage from "./assets/images/Dustin_STMG.webp"; //"https://thefederalist.com/wp-content/uploads/2016/08/dustin.jpg"
// import ElevenImage from "./assets/images/Eleven_STMG.webp"; //"https://i.kinja-img.com/gawker-media/image/upload/s--sYb9O5vT--/c_scale,f_auto,fl_progressive,q_80,w_800/zdmdbibfppxbfqbmtc0p.png"
// import HopperImage from "./assets/images/Hopper_STMG.jpg"; //"https://costumewall.com/wp-content/uploads/2016/10/jim-hopper.jpg"
// import LucasImage from "./assets/images/Lucas_STMG.jpg"; //"https://imgix.bustle.com/uploads/image/2019/7/13/568e1730-eca0-49d1-8db1-91ee0bff3f4e-nerd-league-lucas.jpg"
// import MaxImage from "./assets/images/Max_STMG.jpg"; //"https://www.thewrap.com/wp-content/uploads/2017/10/stranger-things-max-sadie-sink.jpg"
// import MikeImage from "./assets/images/mike_STMG.jpg"; //"https://ewedit.files.wordpress.com/2017/10/st21.jpg"
// import MurrayImage from "./assets/images/Murray_STMG.jpg"; //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtANRx_senA2SMnoJtSqQbfsLHYZ8jXufo-tgYPGh757INjj245Q"
// import NancyImage from "./assets/images/Nancy_STMG.jpeg"; //"https://assets.popbuzz.com/2017/45/nancy-stranger-things--1509979319-view-1.jpeg"
// import SteveImage from "./assets/images/Steve_STMG.jpg"; //"https://vignette.wikia.nocookie.net/p__/images/a/a3/Steve-1.jpg/revision/latest?cb=20180207154629&path-prefix=protagonist"
// import WillImage from "./assets/images/Will_STMG.jpg"; //"https://nypdecider.files.wordpress.com/2019/07/stranger-things-3-will-wise.jpg?quality=90"

function App() {
  // put memoryCards into array and shuffle it when clicked
  // const images = [
  //   { src: BillyImage, clicked: false },
  //   { src: BobImage, clicked: false },
  //   { src: DustinImage, clicked: false },
  //   { src: ElevenImage, clicked: false },
  //   { src: HopperImage, clicked: false },
  //   { src: LucasImage, clicked: false },
  //   { src: MaxImage, clicked: false },
  //   { src: MikeImage, clicked: false },
  //   { src: MurrayImage, clicked: false },
  //   { src: NancyImage, clicked: false },
  //   { src: SteveImage, clicked: false },
  //   { src: WillImage, clicked: false }
  // ];

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
